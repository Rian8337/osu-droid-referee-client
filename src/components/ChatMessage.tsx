import { IChatMessage } from "../structures/IChatMessage";
import "./ChatMessage.css";

interface Props {
    /**
     * The message to display.
     */
    readonly message: IChatMessage;
}

export default function ChatMessage(props: Props) {
    const { username, message } = props.message;

    return (
        <p className={`chat-message${!username ? " system-chat-message" : ""}`}>
            {username && (
                <>
                    <span className="chat-message-username">{username}</span>:{" "}
                </>
            )}
            {message}
        </p>
    );
}
