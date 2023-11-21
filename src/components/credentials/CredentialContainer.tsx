import { PropsWithChildren } from "react";
import "./Credentials.css";

interface Props {
    /**
     * The title of credential section.
     */
    title?: string;
}

export default function CredentialContainer(props: PropsWithChildren<Props>) {
    return (
        <>
            {props.title && (
                <span className="credential-title">{props.title}</span>
            )}

            <div className="credential-container">{props.children}</div>
        </>
    );
}
