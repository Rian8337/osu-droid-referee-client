import RoomInformationBeatmap from "./RoomInformationBeatmap";
import RoomInformationName from "./RoomInformationName";
import RoomInformationSettings from "./RoomInformationSettings";

export default function RoomInformation() {
    return (
        <>
            <RoomInformationName />
            <br />
            <RoomInformationBeatmap />
            <br />
            <RoomInformationSettings />
        </>
    );
}
