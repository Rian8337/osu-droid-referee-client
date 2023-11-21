import { useContext } from "react";
import ConnectButton from "./components/ConnectButton";
import AccountCredentials from "./components/credentials/AccountCredentials";
import RoomCredentials from "./components/credentials/RoomCredentials";
import Header from "./components/Header";
import RoomChat from "./components/RoomChat";
import { ConnectionStateContext } from "./hooks/ConnectionStateContext";
import { ConnectionState } from "./constants/ConnectionState";

export default function App() {
    const connectionState = useContext(ConnectionStateContext);

    return (
        <>
            <Header />
            <br />

            {connectionState.value !== ConnectionState.connected ? (
                <>
                    <AccountCredentials />
                    <br />
                    <RoomCredentials />
                    <br />
                </>
            ) : null}

            <ConnectButton />

            {connectionState.value === ConnectionState.connected ? (
                <>
                    <br />
                    <RoomChat />
                </>
            ) : null}
        </>
    );
}
