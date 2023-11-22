import { PropsWithChildren, createContext, useState } from "react";
import { ContextData } from "../structures/ContextData";

const defaultValue = false;

export const FreeModSettingContext = createContext<ContextData<boolean>>({
    value: defaultValue,
    setValue: () => {},
});

export function FreeModSettingContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <FreeModSettingContext.Provider
            value={{
                value: value,
                setValue: setValue,
            }}
        >
            {props.children}
        </FreeModSettingContext.Provider>
    );
}
