/**
 * Represents events that can be sent to the server.
 */
export interface ClientToServerSocketEvents {
    /**
     * Emit to send a chat message.
     *
     * @param message The message to send.
     */
    chatMessage: (message: string) => void;
}
