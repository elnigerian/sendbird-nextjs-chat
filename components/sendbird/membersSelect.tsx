import * as React from 'react';
import _ from 'lodash';
import ProfileImage from './profileImage';

const MembersSelect = ({
                           applicationUsers,
                           groupChannelMembers,
                           currentlyJoinedChannel,
                           addToChannelMembersList,
                           handleCreateChannel,
                           handleUpdateChannelMembersList

                       }: any) => {

    if (applicationUsers.length > 0) {
        return (
            <div className="overlay">
                <div className="overlay-content">
                    <button onClick={() => {
                        if (currentlyJoinedChannel) {
                            handleUpdateChannelMembersList();
                        } else {
                            handleCreateChannel();
                        }
                    }}>{currentlyJoinedChannel ? 'Submit' : 'Create'}</button>
                    {
                        _.map(applicationUsers, (user) => {
                            const userSelected = _.some(groupChannelMembers, (member: any) => member === user.userId);
                            return (
                                <div key={user.userId}
                                className={`member-item ${userSelected ? 'member-selected' : ''}`}
                                onClick={() => addToChannelMembersList(user.userId)}>
                                    <ProfileImage user={user} />
                                    <div className="member-item-name">{user.nickname}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
    return null;
}

export default MembersSelect;