import { PropsWithChildren, createContext, useState } from "react";
import { MultiplayerWinCondition } from "../constants/MultiplayerWinCondition";
import { ContextData } from "../structures/ContextData";

const defaultValue = MultiplayerWinCondition.scoreV1;

export const WinConditionContext = createContext<
    ContextData<MultiplayerWinCondition>
>({
    value: defaultValue,
    setValue: () => {},
});

export function WinConditionContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <WinConditionContext.Provider
            value={{
                value: value,
                setValue: setValue,
            }}
        >
            {props.children}
        </WinConditionContext.Provider>
    );
}
