import { PropsWithChildren, createContext, useState } from "react";
import { ArrayContextData } from "../structures/ArrayContextData";
import { IChatMessage } from "../structures/IChatMessage";

export const MessagesContext = createContext<ArrayContextData<IChatMessage>>({
    values: [],
    addValue: () => {},
    removeValue: () => {},
});

export function MessagesContextProvider(props: PropsWithChildren) {
    const [values, setValues] = useState<IChatMessage[]>([]);

    return (
        <MessagesContext.Provider
            value={{
                values: values,
                addValue: (value) => {
                    setValues((prev) => [...prev.slice(0, 49), value]);
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
        </MessagesContext.Provider>
    );
}
