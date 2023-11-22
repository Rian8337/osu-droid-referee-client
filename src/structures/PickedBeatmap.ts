/**
 * Represents a picked beatmap.
 */
export interface PickedBeatmap {
    /**
     * The artist of this beatmap.
     */
    readonly artist: string;

    /**
     * The creator of this beatmap.
     */
    readonly creator: string;

    /**
     * The MD5 hash of this beatmap.
     */
    readonly md5: string;

    /**
     * The title of this beatmap.
     */
    readonly title: string;

    /**
     * The version (difficulty name) of this beatmap.
     */
    readonly version: string;

    /**
     * The beatmap set ID of this beatmap.
     */
    readonly beatmapSetId?: number;
}
