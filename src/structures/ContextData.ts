/**
 * Represents a data hold inside a context.
 */
export interface ContextData<T = unknown> {
    /**
     * The current value.
     */
    readonly value: T;

    /**
     * Sets the value of this data.
     */
    setValue(value: T): void;
}
