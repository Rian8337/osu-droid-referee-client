import { PropsWithChildren, createContext, useState } from "react";
import { ContextData } from "../../structures/ContextData";

export const RoomNameContext = createContext<ContextData<string>>({
    value: "",
    setValue: () => {},
});

export function RoomNameContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState("");

    return (
        <RoomNameContext.Provider value={{ value: value, setValue: setValue }}>
            {props.children}
        </RoomNameContext.Provider>
    );
}
