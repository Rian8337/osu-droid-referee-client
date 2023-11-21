/**
 * Represents possible connection states of the socket.
 */
export enum ConnectionState {
    /**
     * The socket is disconnected.
     */
    disconnected,

    /**
     * The socket is currently connecting.
     */
    connecting,

    /**
     * The socket is connected.
     */
    connected,
}
