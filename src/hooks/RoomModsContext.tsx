import { PropsWithChildren, createContext, useState } from "react";
import { MultiplayerRoomMods } from "../structures/MultiplayerRoomMods";
import { ContextData } from "../structures/ContextData";

const defaultValue: MultiplayerRoomMods = {
    speedMultiplier: 1,
    flFollowDelay: 0.12,
};

export const RoomModsContext = createContext<ContextData<MultiplayerRoomMods>>({
    value: defaultValue,
    setValue: () => {},
});

export function RoomModsContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <RoomModsContext.Provider
            value={{
                value: value,
                setValue: setValue,
            }}
        >
            {props.children}
        </RoomModsContext.Provider>
    );
}
