import { MultiplayerPlayerStatus } from "../constants/MultiplayerPlayerStatus";
import { MultiplayerTeam } from "../constants/MultiplayerTeam";
import { MultiplayerTeamMode } from "../constants/MultiplayerTeamMode";
import { MultiplayerWinCondition } from "../constants/MultiplayerWinCondition";
import { MultiplayerPlayer } from "./MultiplayerPlayer";
import { MultiplayerRoomMods } from "./MultiplayerRoomMods";
import { PickedBeatmap } from "./PickedBeatmap";

/**
 * Represents events that can be received from the server.
 */
export interface ServerToClientSocketEvents {
    /**
     * Emitted when the host changes the beatmap.
     *
     * @param beatmap The new beatmap. If omitted, no beatmap was selected.
     */
    beatmapChanged: (beatmap: PickedBeatmap | null) => void;

    /**
     * Emitted when a player or the system sends a chat message.
     *
     * @param username The username of the player. If `null`, the message is a system message.
     * @param message The message that was sent by the player or system.
     */
    chatMessage: (username: string | null, message: string) => void;

    /**
     * Emitted when the mods of a room was changed.
     *
     * @param mods The new mods.
     */
    roomModsChanged: (mods: MultiplayerRoomMods) => void;

    /**
     * Emitted when the host changes the win condition.
     *
     * @param winCondition The new win condition.
     */
    winConditionChanged: (winCondition: MultiplayerWinCondition) => void;

    /**
     * Emitted when the free mod setting of a room was changed.
     *
     * @param isFreeMod Whether free mods are enabled.
     */
    freeModsSettingChanged: (isFreeMod: boolean) => void;

    /**
     * Emitted when the host changes the team mode.
     *
     * @param teamMode The new team mode.
     */
    teamModeChanged: (teamMode: MultiplayerTeamMode) => void;

    /**
     * Emitted when the name of a room changes.
     *
     * @param name The new name of the room.
     */
    roomNameChanged: (name: string) => void;

    /**
     * Emitted when the maximum players of a room changes.
     *
     * @param maxPlayers The new maximum players of the room.
     */
    maxPlayersChanged: (maxPlayers: number) => void;

    /**
     * Emitted when the remove slider lock setting of a room was changed.
     *
     * @param isEnabled Whether the setting is enabled.
     */
    removeSliderLockChanged: (isEnabled: boolean) => void;

    /**
     * Emitted when a player joins the room.
     *
     * @param player The player who joined the room.
     */
    playerJoined: (player: MultiplayerPlayer) => void;

    /**
     * Emitted when the player leaves a multiplayer room.
     *
     * @param uid The uid of the player.
     */
    playerLeft: (uid: string) => void;

    /**
     * Emitted when a player changes their status.
     *
     * @param uid The uid of the player.
     * @param status The new status.
     */
    playerStatusChanged: (uid: string, status: MultiplayerPlayerStatus) => void;

    /**
     * Emitted when a player changes their team.
     *
     * @param uid The uid of the player.
     * @param team The new team of the player, `null` if the player does not belong in any team.
     */
    teamChanged: (uid: string, team: MultiplayerTeam | null) => void;

    /**
     * Emitted when a player changes their mods in a free mod setting.
     *
     * @param uid The uid of the player.
     * @param mods The new mods.
     */
    playerModsChanged: (uid: string, mods: MultiplayerRoomMods) => void;

    /**
     * Emitted when a error happens.
     *
     * @param message The error message.
     */
    error: (message: string) => void;
}
