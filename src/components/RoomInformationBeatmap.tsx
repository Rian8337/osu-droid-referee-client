import { useContext } from "react";
import { PickedBeatmapContext } from "../hooks/PickedBeatmapContext";

export default function RoomInformationBeatmap() {
    const pickedBeatmap = useContext(PickedBeatmapContext);

    if (!pickedBeatmap.value) {
        return <>Beatmap: No beatmap selected</>;
    }

    const text = `${pickedBeatmap.value.artist} - ${pickedBeatmap.value.title} (${pickedBeatmap.value.creator}) [${pickedBeatmap.value.version}]`;

    if (pickedBeatmap.value.beatmapSetId) {
        return (
            <>
                Beatmap:{" "}
                <a
                    href={`https://osu.ppy.sh/s/${pickedBeatmap.value.beatmapSetId}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {text}
                </a>
            </>
        );
    }

    return <>Beatmap: {text}</>;
}
