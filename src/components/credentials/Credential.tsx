import { PropsWithChildren, useContext } from "react";
import { ContextData } from "../../structures/ContextData";
import "./Credentials.css";
import { isNumberContextData } from "../../structures/NumberContextData";
import { ConnectionStateContext } from "../../hooks/ConnectionStateContext";
import { ConnectionState } from "../../constants/ConnectionState";

interface Props {
    /**
     * The name of the credential.
     */
    readonly name: string;

    /**
     * The credential this component is responsible for.
     */
    readonly credential: ContextData<string | number>;

    /**
     * Whether to hide the input value. Only works for strings.
     */
    readonly maskInput?: boolean;

    /**
     * The maximum length of the input. Only works for strings.
     */
    readonly maxLength?: number;
}

export default function Credential(props: PropsWithChildren<Props>) {
    const { name, credential, maskInput, maxLength } = props;
    const connectionState = useContext(ConnectionStateContext);

    const isSliderInput =
        isNumberContextData(credential) &&
        (credential.minValue !== undefined ||
            credential.maxValue !== undefined);

    return (
        <>
            <span className="credential-name">{name}</span>

            {isNumberContextData(credential) ? (
                <>
                    <input
                        className="credential-input"
                        disabled={
                            connectionState.value !==
                            ConnectionState.disconnected
                        }
                        autoComplete="off"
                        aria-autocomplete="none"
                        type={isSliderInput ? "range" : "number"}
                        value={credential.value}
                        min={credential.minValue}
                        max={credential.maxValue}
                        step={credential.precision}
                        onChange={(e) => {
                            credential.setValue(parseFloat(e.target.value));
                        }}
                    />

                    {isSliderInput && (
                        <span className="credential-input-display">
                            {credential.value}
                        </span>
                    )}
                </>
            ) : (
                <input
                    className="credential-input"
                    disabled={
                        connectionState.value !== ConnectionState.disconnected
                    }
                    autoComplete="off"
                    aria-autocomplete="none"
                    type={maskInput ? "password" : "text"}
                    value={credential.value}
                    maxLength={maxLength}
                    onChange={(e) => {
                        credential.setValue(e.target.value);
                    }}
                />
            )}
        </>
    );
}
