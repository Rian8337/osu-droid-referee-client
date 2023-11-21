/**
 * Represents the data that is sent to the server for user authentication.
 */
export interface UserAuthenticationData {
    /**
     * The username of the player.
     */
    readonly username: string;

    /**
     * The password of the player, hashed in SHA-256.
     */
    readonly password: string;

    /**
     * The name of the room.
     */
    readonly roomName: string;

    /**
     * The password of the room.
     */
    readonly roomPassword: string;

    /**
     * The maximum amount of players allowed in the room.
     */
    readonly maxPlayers: number;

    /**
     * The version of authentication.
     */
    readonly version: number;
}
