import * as React from 'react';
import ChannelHeader from "./channelHeader";

const Channel = ({ currentlyJoinedChannel, children, handleLeaveChannel, channelRef }: any) => {

    if (currentlyJoinedChannel) {
        return <div className="channel" ref={channelRef}>
            <ChannelHeader>{currentlyJoinedChannel.name}</ChannelHeader>
            <div>
                <button className="leave-channel" onClick={handleLeaveChannel}>Leave Channel</button>
            </div>
            <div>
                {children}
            </div>
        </div>;
    }
    return (
        <div className="channel"></div>
    );
}

export default Channel;