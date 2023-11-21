import { PropsWithChildren, createContext, useState } from "react";
import { NumberContextData } from "../../structures/NumberContextData";

const minValue = 2;
const defaultValue = 8;
const maxValue = 16;
const precision = 1;

export const MaxPlayersContext = createContext<NumberContextData>({
    value: defaultValue,
    minValue: minValue,
    maxValue: maxValue,
    precision: precision,
    setValue: () => {},
});

export function MaxPlayersContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <MaxPlayersContext.Provider
            value={{
                value: value,
                minValue: minValue,
                maxValue: maxValue,
                precision: precision,
                setValue: setValue,
            }}
        >
            {props.children}
        </MaxPlayersContext.Provider>
    );
}
