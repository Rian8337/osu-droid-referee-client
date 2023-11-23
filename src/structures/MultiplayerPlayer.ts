import { MultiplayerPlayerStatus } from "../constants/MultiplayerPlayerStatus";
import { MultiplayerTeam } from "../constants/MultiplayerTeam";
import { MultiplayerRoomMods } from "./MultiplayerRoomMods";

/**
 * Represents a player in the room.
 */
export interface MultiplayerPlayer {
    /**
     * The uid of this player.
     */
    readonly uid: string;

    /**
     * The username of this player.
     */
    readonly username: string;

    /**
     * The status of this player.
     */
    status: MultiplayerPlayerStatus;

    /**
     * The team at which this player belongs to. `null` if the team mode is not Team VS.
     */
    team: MultiplayerTeam | null;

    /**
     * The player-specific mods this player is currently selecting.
     */
    mods: MultiplayerRoomMods;
}
