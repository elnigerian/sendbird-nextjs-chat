import * as React from 'react';
import {handleEnterPress} from '../../utils/messageUtils';

const MessageInput = ({ value, onChange, sendMessage, onFileInputChange }: any) => {
    return (
        <div className="message-input">
            <input
                placeholder="write a message"
                value={value}
                onChange={onChange}
                onKeyDown={(event => handleEnterPress(event, sendMessage))}
            />
            <div className="message-input-buttons">
                <button className='send-message-button' onClick={sendMessage}>
                    Send Message
                </button>
                <label className="file-upload-label" htmlFor="upload" >Select File</label>

                <input
                    id="upload"
                    className="file-upload-button"
                    type='file'
                    hidden={true}
                    onChange={onFileInputChange}
                    onClick={() => { }}
                />
            </div>
        </div>
    );
}

export default MessageInput;