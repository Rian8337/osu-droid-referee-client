import { PropsWithChildren, createContext, useState } from "react";
import { ContextData } from "../structures/ContextData";

const defaultValue = false;

export const RemoveSliderLockContext = createContext<ContextData<boolean>>({
    value: defaultValue,
    setValue: () => {},
});

export function RemoveSliderLockContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <RemoveSliderLockContext.Provider
            value={{
                value: value,
                setValue: setValue,
            }}
        >
            {props.children}
        </RemoveSliderLockContext.Provider>
    );
}
