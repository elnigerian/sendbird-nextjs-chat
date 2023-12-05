import * as React from 'react';

const ProfileImage = ({ user }: any) => {
    if (user.plainProfileUrl) {
        return (
            <img className="profile-image" src={user.plainProfileUrl} />
        );
    } else {
        return (
            <div className="profile-image-fallback">
                {user.nickname.charAt(0)}
            </div>
        );
    }
}

export default ProfileImage;