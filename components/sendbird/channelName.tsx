import * as React from 'react';
import _ from 'lodash';

const ChannelName = ({ members }: any) => {
    const membersToDisplay = members.slice(0, 2);
    const membersNotToDisplay = members.slice(2);

    return <>
        {
            _.map(membersToDisplay, (member: any) => <span key={member.userId}>{member.nickname}</span>)
        }
        {membersNotToDisplay.length > 0 && `+ ${membersNotToDisplay.length}`}
    </>
}

export default ChannelName;
