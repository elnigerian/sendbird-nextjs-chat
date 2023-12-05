import * as React from 'react';
import _ from 'lodash';
import ChannelName from './channelName';

const ChannelList = ({
                         channels,
                         handleJoinChannel,
                         handleDeleteChannel,
                         handleLoadMemberSelectionList
                     }: any) => {
    return (
        <div className='channel-list'>
            <div className="channel-type">
                <h1>Group Channels</h1>
                <button className="channel-create-button" onClick={() => handleLoadMemberSelectionList()}>
                    Create Channel
                </button>
            </div>
            {
                _.map(channels, (channel: any) => {
                    return (
                        <div key={channel.url} className="channel-list-item" >
                            <div
                                className="channel-list-item-name"
                                onClick={() => { handleJoinChannel(channel.url) }}>
                                <ChannelName members={channel.members} />
                                <div className="last-message">{channel.lastMessage?.message}</div>
                            </div>
                            <div>
                                <button className="control-button" onClick={() => handleDeleteChannel(channel.url)}>
                                    <img className="channel-icon" src='/icon_delete.png' />
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </div >);
}

export default ChannelList;