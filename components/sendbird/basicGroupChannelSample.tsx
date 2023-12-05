import * as React from 'react';
import _ from 'lodash';
import {APP_ID} from './sendbirdConstants';
import {
    createChannel, deleteChannel,
    deleteMessage,
    getAllApplicationUsers,
    inviteUsersToChannel,
    loadChannels,
    loadMessages
} from "./sendbirdUtils";
import SendbirdChat from "@sendbird/chat";
import {GroupChannelModule} from "@sendbird/chat/groupChannel";
import CreateUserForm from "./createUserForm";
import ChannelList from "./channelList";
import MembersSelect from "./membersSelect";
import Channel from "./channel";
import MessagesList from "./messagesList";
import MessageInput from "./messageInput";
import MembersList from "./membersList";

// let sb: any;

const BasicGroupChannelSample = (props: any) => {
    const [sendbirdChat, setSendbirdChat] = React.useState<any>(() => SendbirdChat.init({
        appId: APP_ID,
        localCacheEnabled: true,
        modules: [new GroupChannelModule()]
    }));

    const [state, updateState] = React.useState<any>({
        applicationUsers: [],
        groupChannelMembers: [],
        currentlyJoinedChannel: null,
        messages: [],
        channels: [],
        messageInputValue: "",
        userNameInputValue: "",
        userIdInputValue: "",
        channelNameUpdateValue: "",
        settingUpUser: true,
        file: null,
        messageToUpdate: null,
        messageCollection: null,
        loading: false,
        error: false
    });

    //need to access state in message received callback
    const stateRef: any = React.useRef();
    stateRef.current = state;

    const channelRef = React.useRef();

    const channelHandlers = {
        onChannelsAdded: (context: any, channels: any) => {
            const updatedChannels = [...channels, ...stateRef.current.channels];
            updateState({ ...stateRef.current, channels: updatedChannels, applicationUsers: [] });
        },
        onChannelsDeleted: (context: any, channels: any) => {
            const updatedChannels = _.filter(stateRef.current.channels, (channel: any) => {
                return !channels.includes(channel.url);
            });
            updateState({ ...stateRef.current, channels: updatedChannels });

        },
        onChannelsUpdated: (context: any, channels: any) => {
            const updatedChannels = _.map(stateRef.current.channels, (channel: any) => {
                const updatedChannel = _.find(channels, (incomingChannel: any) => incomingChannel.url === channel.url);
                if (updatedChannel) {
                    return updatedChannel;
                } else {
                    return channel;
                }
            });

            updateState({ ...stateRef.current, channels: updatedChannels });
        },
    }

    const messageHandlers = {
        onMessagesAdded: (context: any, channels: any, messages: any) => {
            const updatedMessages = [...stateRef.current.messages, ...messages];

            updateState({ ...stateRef.current, messages: updatedMessages });

        },
        onMessagesUpdated: (context: any, channels: any, messages: any) => {
            const updatedMessages = [...stateRef.current.messages];
            for (let i in messages) {
                const incomingMessage = messages[i];
                const indexOfExisting = _.findIndex(stateRef.current.messages, (message: any) => {
                    return incomingMessage.reqId === message.reqId;
                });

                if (indexOfExisting !== -1) {
                    updatedMessages[indexOfExisting] = incomingMessage;
                }
                if (!incomingMessage.reqId) {
                    updatedMessages.push(incomingMessage);
                }
            }


            updateState({ ...stateRef.current, messages: updatedMessages });
        },
        onMessagesDeleted: (context: any, channels: any, messageIds: any) => {
            const updateMessages = _.filter(stateRef.current.messages, (message: any) => {
                return !messageIds.includes(message.messageId);
            });
            updateState({ ...stateRef.current, messages: updateMessages });

        },
        onChannelUpdated: (context: any, channels: any) => {

        },
        onChannelDeleted: (context: any, channelUrl: any) => {
        },
        onHugeGapDetected: () => {
        }
    }

    // React.useEffect(() => {
    //     const sb: any = ;
    //     setSendbirdChat(sb);
    // }, []);

    const scrollToBottom = (item: any, smooth?: any) => {
        item?.scrollTo({
            top: item.scrollHeight,
            behavior: smooth
        })
    }

    React.useEffect(() => {
        scrollToBottom(channelRef.current)
    }, [state.currentlyJoinedChannel])

    React.useEffect(() => {
        scrollToBottom(channelRef.current, 'smooth')
    }, [state.messages])

    const onError = (error: any) => {
        updateState({ ...state, error: error.message });
        console.log(error);
    }

    const handleJoinChannel = async (channelUrl: any) => {
        const {messageCollection, currentlyJoinedChannel, channels}: any = state;
        if (messageCollection && messageCollection.dispose) {
            messageCollection?.dispose();
        }

        if (currentlyJoinedChannel?.url === channelUrl) {
            return null;
        }

        updateState({ ...state, loading: true });
        const channel = _.find(channels, (channel: any) => channel.url === channelUrl);
        const onCacheResult = (err: any, messages: any) => {
            updateState({ ...stateRef.current, currentlyJoinedChannel: channel, messages: messages.reverse(), loading: false })

        }

        const onApiResult = (err: any, messages: any) => {
            updateState({ ...stateRef.current, currentlyJoinedChannel: channel, messages: messages.reverse(), loading: false })
        }

        const collection = loadMessages(channel, messageHandlers, onCacheResult, onApiResult);

        updateState({ ...state, messageCollection: collection });
    }

    const handleLeaveChannel = async () => {
        const { currentlyJoinedChannel }: any = state;
        await currentlyJoinedChannel?.leave();

        updateState({ ...state, currentlyJoinedChannel: null })
    }

    const handleCreateChannel = async (channelName = "testChannel",) => {
        const [groupChannel, error] = await createChannel(sendbirdChat, channelName, state.groupChannelMembers);
        if (error) {
            return onError(error);
        }
    }

    const handleUpdateChannelMembersList = async () => {
        const { currentlyJoinedChannel, groupChannelMembers } = state;
        await inviteUsersToChannel(currentlyJoinedChannel, groupChannelMembers);
        updateState({ ...state, applicationUsers: [] });
    }

    const handleDeleteChannel = async (channelUrl: any) => {
        const [channel, error] = await deleteChannel(channelUrl, sendbirdChat);
        if (error) {
            return onError(error);
        }
    }

    const handleMemberInvite = async () => {
        const [users, error] = await getAllApplicationUsers(sendbirdChat);
        if (error) {
            return onError(error);
        }
        updateState({ ...state, applicationUsers: users });
    }

    const onUserNameInputChange = (e: any) => {
        const userNameInputValue = e.currentTarget.value;
        updateState({ ...state, userNameInputValue });
    }

    const onUserIdInputChange = (e: any) => {
        const userIdInputValue = e.currentTarget.value;
        updateState({ ...state, userIdInputValue });
    }

    const onMessageInputChange = (e: any) => {
        const messageInputValue = e.currentTarget.value;
        updateState({ ...state, messageInputValue });
    }

    const sendMessage = async () => {
        const { messageToUpdate, currentlyJoinedChannel, messages }: any = state;
        if (messageToUpdate) {
            const userMessageUpdateParams: any = {};
            userMessageUpdateParams.message = state.messageInputValue
            const updatedMessage = await currentlyJoinedChannel.updateUserMessage(messageToUpdate.messageId, userMessageUpdateParams)
            const messageIndex = _.findIndex(messages, ((item: any) => item.messageId == messageToUpdate.messageId));
            messages[messageIndex] = updatedMessage;
            updateState({ ...state, messages: messages, messageInputValue: "", messageToUpdate: null });
        } else {
            const userMessageParams: any = {};
            userMessageParams.message = state.messageInputValue
            currentlyJoinedChannel.sendUserMessage(userMessageParams)
                .onSucceeded((message: any) => updateState({ ...stateRef.current, messageInputValue: message.message }))
                .onFailed((error: any) => {
                    console.log(error)
                    console.log("failed")
                });
        }
    }

    const onFileInputChange = async (e: any) => {
        if (e.currentTarget.files && e.currentTarget.files.length > 0) {
            const { currentlyJoinedChannel, messages }: any = state;
            const fileMessageParams: any = {};
            fileMessageParams.file = e.currentTarget.files[0];
            currentlyJoinedChannel.sendFileMessage(fileMessageParams)
                .onSucceeded((message: any) => updateState({ ...stateRef.current, messageInputValue: message.message, file: null }))
                .onFailed((error: any) => {
                    console.log(error)
                    console.log("failed")
                });
        }
    }

    const handleDeleteMessage = async (messageToDelete: any) => {
        const { currentlyJoinedChannel } = state;
        await deleteMessage(currentlyJoinedChannel, messageToDelete); // Delete
    }

    const updateMessage = async (message: any) => {
        updateState({ ...state, messageToUpdate: message, messageInputValue: message.message });
    }

    const handleLoadMemberSelectionList = async () => {
        updateState({ ...state, currentlyJoinedChannel: null });
        const [users, error] = await getAllApplicationUsers(sendbirdChat);
        if (error) {
            return onError(error);
        }
        updateState({ ...state, currentlyJoinedChannel: null, applicationUsers: users, groupChannelMembers: [sendbirdChat.currentUser.userId] });
    }

    const addToChannelMembersList = (userId: any) => {
        const groupChannelMembers: any = [...state.groupChannelMembers, userId];
        updateState({ ...state, groupChannelMembers: groupChannelMembers });
    }

    const setupUser = async () => {
        const { userNameInputValue, userIdInputValue } = state;


        await sendbirdChat.connect(userIdInputValue);
        await sendbirdChat.setChannelInvitationPreference(true);

        const userUpdateParams: any = {};
        userUpdateParams.nickname = userNameInputValue;
        userUpdateParams.userId = userIdInputValue;
        await sendbirdChat.updateCurrentUserInfo(userUpdateParams);

        let sb = sendbirdChat;
        updateState({ ...state, loading: true });
        const [channels, error] = await loadChannels(sb, channelHandlers);
        if (error) {
            return onError(error);
        }

        updateState({ ...state, channels: channels, loading: false, settingUpUser: false });
    }

    if (state.loading) {
        return <div>Loading...</div>
    }

    if (state.error) {
        return <div className="error">{state.error} check console for more information.</div>
    }

    console.log('- - - - State object very useful for debugging - - - -');
    console.log(state);

    return (
        <>
            <CreateUserForm
                setupUser={setupUser}
                userNameInputValue={state.userNameInputValue}
                userIdInputValue={state.userIdInputValue}
                settingUpUser={state.settingUpUser}
                onUserIdInputChange={onUserIdInputChange}
                onUserNameInputChange={onUserNameInputChange}
            />
            <ChannelList
                channels={state.channels}
                handleJoinChannel={handleJoinChannel}
                handleCreateChannel={handleLoadMemberSelectionList}
                handleDeleteChannel={handleDeleteChannel}
                handleLoadMemberSelectionList={handleLoadMemberSelectionList}
            />
            <MembersSelect
                applicationUsers={state.applicationUsers}
                groupChannelMembers={state.groupChannelMembers}
                currentlyJoinedChannel={state.currentlyJoinedChannel}
                addToChannelMembersList={addToChannelMembersList}
                handleCreateChannel={handleCreateChannel}
                handleUpdateChannelMembersList={handleUpdateChannelMembersList}
            />
            <Channel
                currentlyJoinedChannel={state.currentlyJoinedChannel}
                handleLeaveChannel={handleLeaveChannel}
                channelRef={channelRef}
            >
                <MessagesList
                    messages={state.messages}
                    handleDeleteMessage={handleDeleteMessage}
                    updateMessage={updateMessage}
                />
                <MessageInput
                    value={state.messageInputValue}
                    onChange={onMessageInputChange}
                    sendMessage={sendMessage}
                    fileSelected={state.file}
                    onFileInputChange={onFileInputChange}
                />
            </Channel>
            <MembersList
                channel={state.currentlyJoinedChannel}
                handleMemberInvite={handleMemberInvite}
            />
        </>
    );
};

export default BasicGroupChannelSample;