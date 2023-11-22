import { FormEvent, UIEvent, useContext, useEffect } from "react";
import "./RoomChat.css";
import ChatMessage from "./ChatMessage";
import { SocketContext } from "../hooks/SocketContext";
import { MessagesContext } from "../hooks/MessagesContext";
import { RoomIdContext } from "../hooks/RoomIdContext";
import { RoomNameContext } from "../hooks/credentials/RoomNameContext";

export default function RoomChat() {
    const messages = useContext(MessagesContext);
    const socket = useContext(SocketContext);

    const roomName = useContext(RoomNameContext);
    const roomId = useContext(RoomIdContext);

    const chatBoxContainerId = "chat-box-container";

    useEffect(() => {
        // Scroll to bottom every time a message is sent, provided that
        // the container is not being scrolled.
        const element = document.getElementById(chatBoxContainerId);
        if (!element || element.hasAttribute("scrolled")) {
            return;
        }

        element.scrollTop = element.scrollHeight;
    });

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!socket.value?.connected) {
            return;
        }

        const message = (e.currentTarget[0] as HTMLInputElement).value;
        if (!message) {
            return;
        }

        e.currentTarget.reset();

        socket.value.emit("chatMessage", message);
    }

    function onChatBoxScroll(e: UIEvent<HTMLDivElement>) {
        if (e.currentTarget.hasAttribute("scrolled")) {
            return;
        }

        e.currentTarget.setAttribute("scrolled", "y");

        e.currentTarget.addEventListener(
            "scrollend",
            () => {
                // Reobtain the element because the reference from the event may have been changed.
                document
                    .getElementById(chatBoxContainerId)
                    ?.removeAttribute("scrolled");
            },
            { once: true }
        );
    }

    return (
        <>
            <div className="chat-box-title">
                {roomName.value} (ID: {roomId.value})
                <br />
                Chat
            </div>

            <form
                id="chat-message-form"
                className="chat-input-container"
                onSubmit={onSubmit}
                autoComplete="off"
                aria-autocomplete="none"
            >
                <input
                    id="chat-message-input"
                    className="chat-input-field"
                    placeholder="Enter a message..."
                />
                <button type="submit" className="chat-input-send">
                    Send
                </button>
            </form>

            <div
                id={chatBoxContainerId}
                className="chat-box-container"
                onScroll={onChatBoxScroll}
            >
                {messages.values.map((m, i) => (
                    <ChatMessage key={`chat-message-${i}`} message={m} />
                ))}
            </div>
        </>
    );
}
