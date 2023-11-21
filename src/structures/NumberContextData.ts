import { ContextData } from "./ContextData";

/**
 * Represents a data containing a number with additional limitations.
 */
export interface NumberContextData extends ContextData<number> {
    /**
     * The minimum value of the number.
     */
    readonly minValue?: number;

    /**
     * The maximum value of the number.
     */
    readonly maxValue?: number;

    /**
     * The precision allowed for the number.
     */
    readonly precision?: number;
}

export function isNumberContextData(
    data: ContextData
): data is NumberContextData {
    return typeof data.value === "number";
}
