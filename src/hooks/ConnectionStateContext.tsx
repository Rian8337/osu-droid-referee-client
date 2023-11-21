import { ConnectionState } from "../constants/ConnectionState";
import { ContextData } from "../structures/ContextData";
import { PropsWithChildren, createContext, useState } from "react";

const defaultValue = ConnectionState.disconnected;

export const ConnectionStateContext = createContext<
    ContextData<ConnectionState>
>({
    value: defaultValue,
    setValue: () => {},
});

export function ConnectionStateContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <ConnectionStateContext.Provider
            value={{
                value: value,
                setValue: setValue,
            }}
        >
            {props.children}
        </ConnectionStateContext.Provider>
    );
}
