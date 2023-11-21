import { PropsWithChildren, createContext, useState } from "react";
import { ContextData } from "../../structures/ContextData";

export const UsernameContext = createContext<ContextData<string>>({
    value: localStorage.getItem("username") ?? "",
    setValue: () => {},
});

export function UsernameContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState("");

    return (
        <UsernameContext.Provider
            value={{
                value: value,
                setValue: (value) => {
                    localStorage.setItem("username", value);

                    setValue(value);
                },
            }}
        >
            {props.children}
        </UsernameContext.Provider>
    );
}
