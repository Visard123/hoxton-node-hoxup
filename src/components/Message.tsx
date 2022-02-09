type MessageTs = {
  userId: number;
  messageText: string;
  conversationId: number;
  id: number;
};

type Props = {
  message: MessageTs;
  outgoing: boolean;
};

function Message({ message, outgoing }: Props) {
  return (
    <li className={outgoing ? "outgoing" : "incoming"}>
      <p>{message.messageText}</p>
    </li>
  );
}

export default Message;
