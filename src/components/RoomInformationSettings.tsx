import { useContext } from "react";
import { RoomModsContext } from "../hooks/RoomModsContext";
import { WinConditionContext } from "../hooks/WinConditionContext";
import { modsToString, teamModeToString, winConditionToString } from "../utils";
import { TeamModeContext } from "../hooks/TeamModeContext";
import { RemoveSliderLockContext } from "../hooks/RemoveSliderLockContext";

export default function RoomInformationSettings() {
    const roomMods = useContext(RoomModsContext);
    const teamMode = useContext(TeamModeContext);
    const winCondition = useContext(WinConditionContext);
    const removeSliderLock = useContext(RemoveSliderLockContext);

    return (
        <>
            Mods: {modsToString(roomMods.value)}
            <br />
            Team Mode: {teamModeToString(teamMode.value)}
            <br />
            Win Condition: {winConditionToString(winCondition.value)}
            <br />
            Remove Slider Lock: {removeSliderLock.value ? "Yes" : "No"}
        </>
    );
}
