import { PropsWithChildren, createContext, useState } from "react";
import { ContextData } from "../../structures/ContextData";

export const RoomPasswordContext = createContext<ContextData<string>>({
    value: "",
    setValue: () => {},
});

export function RoomPasswordContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState("");

    return (
        <RoomPasswordContext.Provider
            value={{ value: value, setValue: setValue }}
        >
            {props.children}
        </RoomPasswordContext.Provider>
    );
}
