import { MultiplayerTeamMode } from "./constants/MultiplayerTeamMode";
import { MultiplayerWinCondition } from "./constants/MultiplayerWinCondition";
import { MultiplayerRoomMods } from "./structures/MultiplayerRoomMods";

/**
 * Converts a mods object to its string representation.
 *
 * @param mods The mods object to convert.
 * @returns The string representation of the mods object.
 */
export function modsToString(mods: MultiplayerRoomMods): string {
    const strings: string[] = [];

    if (mods.mods) {
        const modsStr: string[] = [];

        for (const s of mods.mods) {
            switch (s) {
                case "a":
                    modsStr.push("AU");
                    break;
                case "x":
                    modsStr.push("RX");
                    break;
                case "p":
                    modsStr.push("AP");
                    break;
                case "e":
                    modsStr.push("EZ");
                    break;
                case "n":
                    modsStr.push("NF");
                    break;
                case "r":
                    modsStr.push("HR");
                    break;
                case "h":
                    modsStr.push("HD");
                    break;
                case "i":
                    modsStr.push("FL");
                    break;
                case "d":
                    modsStr.push("DT");
                    break;
                case "c":
                    modsStr.push("NC");
                    break;
                case "t":
                    modsStr.push("HT");
                    break;
                case "s":
                    modsStr.push("PR");
                    break;
                case "m":
                    modsStr.push("SC");
                    break;
                case "l":
                    modsStr.push("RE");
                    break;
                case "f":
                    modsStr.push("PF");
                    break;
                case "u":
                    modsStr.push("SD");
                    break;
                case "v":
                    modsStr.push("SV2");
                    break;
            }
        }

        strings.push(modsStr.join(","));
    }

    if (mods.speedMultiplier !== 1) {
        strings.push(mods.speedMultiplier.toFixed(2) + "x");
    }

    if (mods.forceAR !== undefined) {
        strings.push(`AR${mods.forceAR.toFixed(1)}`);
    }

    return strings.join(", ");
}

/**
 * Converts a win condition to its string representation.
 *
 * @param winCondition The win condition to convert.
 * @returns The string representation of the win condition.
 */
export function winConditionToString(
    winCondition: MultiplayerWinCondition
): string {
    switch (winCondition) {
        case MultiplayerWinCondition.scoreV1:
            return "Score V1";
        case MultiplayerWinCondition.accuracy:
            return "Accuracy";
        case MultiplayerWinCondition.maxCombo:
            return "Max combo";
        case MultiplayerWinCondition.scoreV2:
            return "Score V2";
    }
}

/**
 * Converts a team mode to its string representation.
 *
 * @param teamMode The team mode to convert.
 * @returns The string representation of the team mode.
 */
export function teamModeToString(teamMode: MultiplayerTeamMode): string {
    switch (teamMode) {
        case MultiplayerTeamMode.headToHead:
            return "Head-to-head";
        case MultiplayerTeamMode.teamVS:
            return "Team VS";
    }
}
