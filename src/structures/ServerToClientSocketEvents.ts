/**
 * Represents events that can be received from the server.
 */
export interface ServerToClientSocketEvents {
    /**
     * Emitted when a player or the system sends a chat message.
     *
     * @param username The username of the player. If `null`, the message is a system message.
     * @param message The message that was sent by the player or system.
     */
    chatMessage: (username: string | null, message: string) => void;

    /**
     * Emitted when a error happens.
     *
     * @param message The error message.
     */
    error: (message: string) => void;
}
