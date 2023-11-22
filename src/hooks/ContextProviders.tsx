import { FC } from "react";
import { UsernameContextProvider } from "./credentials/UsernameContext";
import { UserPasswordContextProvider } from "./credentials/UserPasswordContext";
import { RoomNameContextProvider } from "./credentials/RoomNameContext";
import { RoomPasswordContextProvider } from "./credentials/RoomPasswordContext";
import { MaxPlayersContextProvider } from "./credentials/MaxPlayersContext";
import { ConnectionStateContextProvider } from "./ConnectionStateContext";
import { SocketContextProvider } from "./SocketContext";
import { MessagesContextProvider } from "./MessagesContext";
import { RoomIdContextProvider } from "./RoomIdContext";
import { PickedBeatmapContextProvider } from "./PickedBeatmapContext";
import { RoomModsContextProvider } from "./RoomModsContext";
import { FreeModSettingContextProvider } from "./FreeModSettingContext";
import { WinConditionContextProvider } from "./WinConditionContext";
import { TeamModeContextProvider } from "./TeamModeContext";
import { RemoveSliderLockContextProvider } from "./RemoveSliderLockContext";

const compose =
    (...components: FC<Record<string, unknown>>[]) =>
    (props: { children: JSX.Element }) =>
        components.reduce(
            (children, Current) => <Current {...props}>{children}</Current>,
            props.children
        );

export const Providers = compose(
    UsernameContextProvider,
    UserPasswordContextProvider,
    RoomNameContextProvider,
    RoomPasswordContextProvider,
    MaxPlayersContextProvider,
    ConnectionStateContextProvider,
    MessagesContextProvider,
    SocketContextProvider,
    RoomIdContextProvider,
    PickedBeatmapContextProvider,
    RoomModsContextProvider,
    FreeModSettingContextProvider,
    WinConditionContextProvider,
    TeamModeContextProvider,
    RemoveSliderLockContextProvider
);
