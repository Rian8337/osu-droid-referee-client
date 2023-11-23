import { PropsWithChildren, createContext, useState } from "react";
import { ArrayContextData } from "../structures/ArrayContextData";
import { MultiplayerPlayer } from "../structures/MultiplayerPlayer";

export const PlayersContext = createContext<
    ArrayContextData<MultiplayerPlayer>
>({
    values: [],
    addValue: () => {},
    removeValue: () => {},
});

export function PlayersContextProvider(props: PropsWithChildren) {
    const [values, setValues] = useState<MultiplayerPlayer[]>([]);

    return (
        <PlayersContext.Provider
            value={{
                values: values,
                addValue: (value) => {
                    setValues((prev) => [...prev, value]);
                },
                removeValue: (predicate) => {
                    const index = values.findIndex(predicate);
                    if (index === -1) {
                        return;
                    }

                    setValues((prev) => {
                        prev.splice(index, 1);

                        return prev;
                    });
                },
            }}
        >
            {props.children}
        </PlayersContext.Provider>
    );
}
