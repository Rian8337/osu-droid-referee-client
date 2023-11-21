/**
 * Represents the response received from the server in user authentication.
 */
export interface UserAuthenticationResponse {
    /**
     * The ID of the player.
     */
    readonly uid: string;

    /**
     * The current login session.
     */
    readonly sessionId: string;

    /**
     * The ID of the room.
     */
    readonly roomId: string;
}
