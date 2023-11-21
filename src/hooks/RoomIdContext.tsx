import { PropsWithChildren, createContext, useState } from "react";
import { ContextData } from "../structures/ContextData";

export const RoomIdContext = createContext<ContextData<string | undefined>>({
    value: undefined,
    setValue: () => {},
});

export function RoomIdContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState<string | undefined>();

    return (
        <RoomIdContext.Provider
            value={{
                value: value,
                setValue: setValue,
            }}
        >
            {props.children}
        </RoomIdContext.Provider>
    );
}
