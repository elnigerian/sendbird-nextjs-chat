import * as React from 'react';
import _ from 'lodash';

const MembersList = ({ channel, handleMemberInvite }: any) => {
    if (channel) {
        return <div className="members-list">
            <button onClick={handleMemberInvite}>Invite</button>
            {
                _.map(channel.members, (member: any) =>
                    <div className="member-item" key={member.userId}>{member.nickname}</div>
                )
            }
        </div>;
    } else {
        return null;
    }
}

export default MembersList;