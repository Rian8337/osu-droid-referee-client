/**
 * Represents an array of data hold inside a context.
 */
export interface ArrayContextData<T> {
    /**
     * The current values.
     */
    readonly values: readonly T[];

    /**
     * Adds a new value to the array.
     *
     * @param value The value to add.
     */
    addValue(value: T): void;

    /**
     * Removes a value from the array.
     *
     * @param predicate A predicate that indicates whether the object should be removed.
     */
    removeValue(predicate: (value: T) => boolean): void;
}
