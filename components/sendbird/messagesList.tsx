import * as React from 'react';
import _ from 'lodash';
import Message from './message';
import ProfileImage from "./profileImage";

const MessagesList = ({ sb, messages, handleDeleteMessage, updateMessage }: any) => {
    return (
        <div className="message-list">
        {
            _.map(messages, (message: any) => {
                if (!message.sender) return null;
                const messageSentByYou = message.sender.userId === sb.currentUser.userId;
                return (
                    <div key={message.messageId} className={`message-item ${messageSentByYou ? 'message-from-you' : ''}`}>
                        <Message
                            message={message}
                            handleDeleteMessage={handleDeleteMessage}
                            updateMessage={updateMessage}
                            messageSentByYou={messageSentByYou} />
                        <ProfileImage user={message.sender} />
                    </div>
                );
            })
        }
    </div>
    );
}

export default MessagesList;