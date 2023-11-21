import { useContext } from "react";
import Credential from "./Credential";
import CredentialContainer from "./CredentialContainer";
import { RoomNameContext } from "../../hooks/credentials/RoomNameContext";
import { RoomPasswordContext } from "../../hooks/credentials/RoomPasswordContext";
import { MaxPlayersContext } from "../../hooks/credentials/MaxPlayersContext";

export default function RoomCredentials() {
    const name = useContext(RoomNameContext);
    const password = useContext(RoomPasswordContext);
    const maxPlayers = useContext(MaxPlayersContext);

    return (
        <CredentialContainer title="Room Creation Settings">
            <Credential name="Name" credential={name} maxLength={50} />
            <br />
            <Credential
                name="Password"
                credential={password}
                maskInput={true}
            />
            <br />
            <Credential name="Max players" credential={maxPlayers} />
        </CredentialContainer>
    );
}
