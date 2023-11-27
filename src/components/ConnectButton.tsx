import { useContext, useRef } from "react";
import { UsernameContext } from "../hooks/credentials/UsernameContext";
import { UserPasswordContext } from "../hooks/credentials/UserPasswordContext";
import { RoomNameContext } from "../hooks/credentials/RoomNameContext";
import { RoomPasswordContext } from "../hooks/credentials/RoomPasswordContext";
import { MaxPlayersContext } from "../hooks/credentials/MaxPlayersContext";
import "./ConnectButton.css";
import { UserAuthenticationData } from "../structures/auth/UserAuthenticationData";
import { UserAuthenticationResponse } from "../structures/auth/UserAuthenticationResponse";
import { ConnectionState } from "../constants/ConnectionState";
import { ConnectionStateContext } from "../hooks/ConnectionStateContext";
import { SocketContext } from "../hooks/SocketContext";
import { io } from "socket.io-client";
import { RoomAuthenticationData } from "../structures/auth/RoomAuthenticationData";
import { MessagesContext } from "../hooks/MessagesContext";
import { RoomIdContext } from "../hooks/RoomIdContext";
import { Socket } from "../structures/Socket";
import { RoomModsContext } from "../hooks/RoomModsContext";
import { PickedBeatmapContext } from "../hooks/PickedBeatmapContext";
import { FreeModSettingContext } from "../hooks/FreeModSettingContext";
import { WinConditionContext } from "../hooks/WinConditionContext";
import { TeamModeContext } from "../hooks/TeamModeContext";
import { RemoveSliderLockContext } from "../hooks/RemoveSliderLockContext";
import { PlayersContext } from "../hooks/PlayersContext";

function escapeHTMLSpecialCharacters(str: string): string {
    return str
        .replace("&", "&amp;")
        .replace('"', "&quot;")
        .replace("'", "&apos;")
        .replace("<", "&lt;")
        .replace(">", "&gt;");
}

function addSlashes(str: string): string {
    return str.replace("'", "\\'").replace('"', '\\"').replace("\\", "\\\\");
}

function getSHA256(buf: ArrayBuffer): string {
    let str = "";
    const dataView = new DataView(buf);

    for (let i = 0; i < dataView.byteLength; i += 4) {
        str += dataView
            // Get 4 bytes of binary data.
            .getUint32(i)
            // Convert the binary data to hex.
            .toString(16)
            // Pad the hex with 0s.
            .padStart(8, "0");
    }

    return str;
}

function getButtonLabel(connectionState: ConnectionState): string {
    switch (connectionState) {
        case ConnectionState.disconnected:
            return "Connect";
        case ConnectionState.connecting:
            return "Connecting";
        case ConnectionState.connected:
            return "Disconnect";
    }
}

export default function ConnectButton() {
    const disconnectTimeout = useRef<number>();

    const username = useContext(UsernameContext);
    const password = useContext(UserPasswordContext);

    const roomId = useContext(RoomIdContext);
    const roomName = useContext(RoomNameContext);
    const roomPassword = useContext(RoomPasswordContext);
    const maxPlayers = useContext(MaxPlayersContext);

    const connectionState = useContext(ConnectionStateContext);
    const messages = useContext(MessagesContext);
    const socket = useContext(SocketContext);

    const pickedBeatmap = useContext(PickedBeatmapContext);
    const roomMods = useContext(RoomModsContext);
    const freeModSetting = useContext(FreeModSettingContext);
    const winCondition = useContext(WinConditionContext);
    const teamMode = useContext(TeamModeContext);
    const removeSliderLock = useContext(RemoveSliderLockContext);

    const players = useContext(PlayersContext);

    function onClick() {
        if (socket.value?.connected) {
            const disconnect = confirm(
                "Are you sure you want to disconnect from the room?"
            );

            if (disconnect) {
                socket.value.disconnect();
            }

            return;
        }

        if (!username.value) {
            alert("Please enter your osu!droid account's username.");
            return;
        }

        if (!password.value) {
            alert("Please enter your osu!droid account's password.");
            return;
        }

        if (!roomName.value) {
            alert("Please enter the name of the room.");
            return;
        }

        connectionState.setValue(ConnectionState.connecting);

        const processedPassword =
            escapeHTMLSpecialCharacters(addSlashes(password.value)) +
            "taikotaiko";

        crypto.subtle
            .digest("SHA-256", new TextEncoder().encode(processedPassword))
            .then((buffer) => {
                fetch(
                    "https://droidpp.osudroid.moe/api/tournament/createtournamentroom",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            username: username.value,
                            password: encodeURIComponent(getSHA256(buffer)),
                            roomName: roomName.value,
                            roomPassword: roomPassword.value,
                            maxPlayers: maxPlayers.value,
                            version: 1,
                        } satisfies UserAuthenticationData),
                    }
                )
                    .then(async (res) => {
                        if (!res.ok) {
                            throw new Error(await res.text());
                        }

                        return res.json();
                    })
                    .then((res: UserAuthenticationResponse) => {
                        roomId.setValue(res.roomId);

                        socket.setValue(
                            (
                                io(
                                    `https://droidpp.osudroid.moe/api/tournament/${res.roomId}`,
                                    {
                                        path: "/api/tournament/socket.io",
                                        transports: ["websocket"],
                                        auth: {
                                            uid: res.uid,
                                            sessionId: res.sessionId,
                                            password: roomPassword.value,
                                            type: "2",
                                            version: 5,
                                        } satisfies RoomAuthenticationData,
                                    }
                                ) as Socket
                            )
                                .on("connect", () => {
                                    console.log("Socket connected to server");

                                    if (
                                        disconnectTimeout.current !== undefined
                                    ) {
                                        clearTimeout(disconnectTimeout.current);
                                        disconnectTimeout.current = undefined;
                                    }

                                    connectionState.setValue(
                                        ConnectionState.connected
                                    );
                                })
                                .on("disconnect", (reason) => {
                                    switch (reason) {
                                        case "io server disconnect":
                                        case "io client disconnect":
                                            console.log(
                                                "Disconnected from the server"
                                            );

                                            connectionState.setValue(
                                                ConnectionState.disconnected
                                            );
                                            break;
                                        default:
                                            console.log(
                                                "Disconnected from the server, attempting to reconnect"
                                            );

                                            disconnectTimeout.current =
                                                setTimeout(() => {
                                                    console.log(
                                                        "Disconnected from the server after attempting to reconnect"
                                                    );

                                                    connectionState.setValue(
                                                        ConnectionState.disconnected
                                                    );
                                                }, 35000);
                                    }
                                })
                                .on("connect_error", onError)
                                .on("chatMessage", (username, message) => {
                                    messages.addValue({
                                        username: username,
                                        message: message,
                                    });
                                })
                                .on("error", (message) => {
                                    alert(
                                        `An error message received from the server:\n\n${message}`
                                    );
                                })
                                .on(
                                    "beatmapChanged",
                                    pickedBeatmap.setValue.bind(pickedBeatmap)
                                )
                                .on(
                                    "roomModsChanged",
                                    roomMods.setValue.bind(roomMods)
                                )
                                .on(
                                    "freeModsSettingChanged",
                                    freeModSetting.setValue.bind(freeModSetting)
                                )
                                .on(
                                    "winConditionChanged",
                                    winCondition.setValue.bind(winCondition)
                                )
                                .on(
                                    "teamModeChanged",
                                    teamMode.setValue.bind(teamMode)
                                )
                                .on(
                                    "roomNameChanged",
                                    roomName.setValue.bind(roomName)
                                )
                                .on(
                                    "maxPlayersChanged",
                                    maxPlayers.setValue.bind(maxPlayers)
                                )
                                .on(
                                    "removeSliderLockChanged",
                                    removeSliderLock.setValue.bind(
                                        removeSliderLock
                                    )
                                )
                                .on(
                                    "playerJoined",
                                    players.addValue.bind(players)
                                )
                                .on("playerLeft", (uid) => {
                                    players.removeValue((v) => v.uid === uid);
                                })
                                .on("playerStatusChanged", (uid, status) => {
                                    const player = players.values.find(
                                        (v) => v.uid === uid
                                    );

                                    if (player) {
                                        player.status = status;
                                    }
                                })
                                .on("teamChanged", (uid, team) => {
                                    const player = players.values.find(
                                        (v) => v.uid === uid
                                    );

                                    if (player) {
                                        player.team = team;
                                    }
                                })
                                .on("playerModsChanged", (uid, mods) => {
                                    const player = players.values.find(
                                        (v) => v.uid === uid
                                    );

                                    if (player) {
                                        player.mods = mods;
                                    }
                                })
                        );
                    })
                    .catch(onError);
            })
            .catch(onError);
    }

    function onError(e: Error) {
        console.error(e);

        connectionState.setValue(ConnectionState.disconnected);

        alert(
            `Encountered an error when attempting to connect to the server:\n\n${e.message}`
        );
    }

    return (
        <div className="authenticate-button-container">
            <button
                className="authenticate-button"
                type="button"
                disabled={connectionState.value === ConnectionState.connecting}
                onClick={onClick}
            >
                {getButtonLabel(connectionState.value)}
            </button>
        </div>
    );
}
