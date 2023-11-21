/**
 * Represents a chat message.
 */
export interface IChatMessage {
    /**
     * The username of the player who sent the message.
     */
    readonly username: string | null;

    /**
     * The message that was sent.
     */
    readonly message: string;
}
