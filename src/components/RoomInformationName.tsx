import { useContext } from "react";
import { RoomIdContext } from "../hooks/RoomIdContext";
import { RoomNameContext } from "../hooks/credentials/RoomNameContext";
import "./RoomInformationName.css";

export default function RoomInformationName() {
    const roomId = useContext(RoomIdContext);
    const roomName = useContext(RoomNameContext);

    return (
        <div className="room-name-container">
            {roomName.value} (ID: {roomId.value})
        </div>
    );
}
