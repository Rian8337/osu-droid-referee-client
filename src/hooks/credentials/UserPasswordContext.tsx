import { PropsWithChildren, createContext, useState } from "react";
import { ContextData } from "../../structures/ContextData";

export const UserPasswordContext = createContext<ContextData<string>>({
    value: localStorage.getItem("password") ?? "",
    setValue: () => {},
});

export function UserPasswordContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState("");

    return (
        <UserPasswordContext.Provider
            value={{
                value: value,
                setValue: (value) => {
                    localStorage.setItem("password", value);

                    setValue(value);
                },
            }}
        >
            {props.children}
        </UserPasswordContext.Provider>
    );
}
