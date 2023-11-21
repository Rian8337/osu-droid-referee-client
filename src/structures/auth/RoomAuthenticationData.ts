/**
 * Represents the authentication data to a multiplayer room.
 */
export interface RoomAuthenticationData {
    /**
     * The ID of the player.
     */
    readonly uid: string;

    /**
     * The password to authenticate through the multiplayer room.
     */
    readonly password: string;

    /**
     * The current login session.
     */
    readonly sessionId: string;

    /**
     * The connection type.
     */
    readonly type: "2";

    /**
     * The API version to authenticate to.
     */
    readonly version: number;
}
