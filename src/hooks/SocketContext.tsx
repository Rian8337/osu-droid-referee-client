import { PropsWithChildren, createContext, useState } from "react";
import { ContextData } from "../structures/ContextData";
import { Socket } from "../structures/Socket";

export const SocketContext = createContext<ContextData<Socket | undefined>>({
    value: undefined,
    setValue: () => {},
});

export function SocketContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState<Socket | undefined>();

    return (
        <SocketContext.Provider
            value={{
                value: value,
                setValue: setValue,
            }}
        >
            {props.children}
        </SocketContext.Provider>
    );
}
