/**
 * A structure containing mods and other settings that can be accessed via the mods menu.
 */
export interface MultiplayerRoomMods {
    /**
     * The mods set in this room.
     */
    readonly mods?: string;

    /**
     * The speed multiplier set in this room.
     */
    readonly speedMultiplier: number;

    /**
     * The Flashlight follow delay set in this room.
     */
    readonly flFollowDelay: number;

    /**
     * The force AR set in this room.
     */
    readonly forceAR?: number;
}
