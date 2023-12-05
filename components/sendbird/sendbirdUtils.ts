import {
    GroupChannelFilter,
    GroupChannelListOrder,
    MessageCollectionInitPolicy,
    MessageFilter
} from '@sendbird/chat/groupChannel';

export const loadChannels = async (sb: any, channelHandlers: any) => {
    const groupChannelFilter = new GroupChannelFilter();
    groupChannelFilter.includeEmpty = true;

    const collection = sb.groupChannel.createGroupChannelCollection({
        filter: groupChannelFilter,
        order: GroupChannelListOrder.LATEST_LAST_MESSAGE,
    });

    collection.setGroupChannelCollectionHandler(channelHandlers);

    const channels = await collection.loadMore();
    return [channels, null];
}

export const loadMessages = (channel: any, messageHandlers: any, onCacheResult: any, onApiResult: any) => {
    const messageFilter = new MessageFilter();

    const collection = channel.createMessageCollection({
        filter: messageFilter,
        startingPoint: Date.now(),
        limit: 100
    });

    collection.setMessageCollectionHandler(messageHandlers);
    collection
        .initialize(MessageCollectionInitPolicy.CACHE_AND_REPLACE_BY_API)
        .onCacheResult(onCacheResult)
        .onApiResult(onApiResult);
    return collection;
}

export const inviteUsersToChannel = async (channel: any, userIds: any) => {
    await channel.inviteWithUserIds(userIds);
}

export const createChannel = async (sb: any, channelName: any, userIdsToInvite: any) => {
    try {
        const groupChannelParams: any = {};
        groupChannelParams.invitedUserIds = userIdsToInvite;
        groupChannelParams.name = channelName;
        groupChannelParams.operatorUserIds = userIdsToInvite;
        const groupChannel = await sb.groupChannel.createChannel(groupChannelParams);
        return [groupChannel, null];
    } catch (error) {
        return [null, error];
    }
}

export const deleteChannel = async (channelUrl: any, sb: any) => {
    try {
        const channel = await sb.groupChannel.getChannel(channelUrl);
        await channel.delete();
        return [channel, null];
    } catch (error) {
        return [null, error];
    }
}

export const deleteMessage = async (currentlyJoinedChannel: any, messageToDelete: any) => {
    await currentlyJoinedChannel.deleteMessage(messageToDelete);
}

export const getAllApplicationUsers = async (sb: any) => {
    try {
        const userQuery = sb.createApplicationUserListQuery({ limit: 100 });
        const users = await userQuery.next();
        return [users, null];
    } catch (error) {
        return [null, error];
    }
}
