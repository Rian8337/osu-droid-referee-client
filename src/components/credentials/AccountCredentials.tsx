import { useContext } from "react";
import { UsernameContext } from "../../hooks/credentials/UsernameContext";
import { UserPasswordContext } from "../../hooks/credentials/UserPasswordContext";
import Credential from "./Credential";
import CredentialContainer from "./CredentialContainer";

export default function AccountCredentials() {
    const username = useContext(UsernameContext);
    const password = useContext(UserPasswordContext);

    return (
        <CredentialContainer title="Account Credentials">
            <Credential name="Username" credential={username} maxLength={20} />
            <br />
            <Credential
                name="Password"
                credential={password}
                maskInput={true}
            />
        </CredentialContainer>
    );
}
