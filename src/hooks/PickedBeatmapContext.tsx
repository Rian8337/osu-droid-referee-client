import { PropsWithChildren, createContext, useState } from "react";
import { ContextData } from "../structures/ContextData";
import { PickedBeatmap } from "../structures/PickedBeatmap";

const defaultValue = null;

export const PickedBeatmapContext = createContext<
    ContextData<PickedBeatmap | null>
>({
    value: defaultValue,
    setValue: () => {},
});

export function PickedBeatmapContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState<PickedBeatmap | null>(defaultValue);

    return (
        <PickedBeatmapContext.Provider
            value={{
                value: value,
                setValue: setValue,
            }}
        >
            {props.children}
        </PickedBeatmapContext.Provider>
    );
}
