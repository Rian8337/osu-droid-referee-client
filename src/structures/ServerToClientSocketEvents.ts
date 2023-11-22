import { MultiplayerTeamMode } from "../constants/MultiplayerTeamMode";
import { MultiplayerWinCondition } from "../constants/MultiplayerWinCondition";
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
     * Emitted when a error happens.
     *
     * @param message The error message.
     */
    error: (message: string) => void;
}
