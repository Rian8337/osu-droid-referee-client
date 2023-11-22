import { PropsWithChildren, createContext, useState } from "react";
import { ContextData } from "../structures/ContextData";
import { MultiplayerTeamMode } from "../constants/MultiplayerTeamMode";

const defaultValue = MultiplayerTeamMode.headToHead;

export const TeamModeContext = createContext<ContextData<MultiplayerTeamMode>>({
    value: defaultValue,
    setValue: () => {},
});

export function TeamModeContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <TeamModeContext.Provider
            value={{
                value: value,
                setValue: setValue,
            }}
        >
            {props.children}
        </TeamModeContext.Provider>
    );
}
