import { Socket as SocketIO } from "socket.io-client";
import { ServerToClientSocketEvents } from "./ServerToClientSocketEvents";
import { ClientToServerSocketEvents } from "./ClientToServerSocketEvents";

/**
 * The socket.io socket type.
 */
export type Socket = SocketIO<
    ServerToClientSocketEvents,
    ClientToServerSocketEvents
>;
