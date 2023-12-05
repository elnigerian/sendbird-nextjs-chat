import * as React from 'react';
import {handleEnterPress} from '../../utils/messageUtils';


const CreateUserForm = ({
                            setupUser,
                            settingUpUser,
                            userNameInputValue,
                            userIdInputValue,
                            onUserNameInputChange,
                            onUserIdInputChange
                        }: any) => {
    if (settingUpUser) {
        return (
            <div className="overlay">
                <div className="overlay-content" onKeyDown={(event) => handleEnterPress(event, setupUser)}>
                    <div>User ID</div>
                    <input
                        onChange={onUserIdInputChange}
                        className="form-input"
                        type="text" value={userIdInputValue}
                    />
                    <div>User Nickname</div>
                    <input
                        onChange={onUserNameInputChange}
                        className="form-input"
                        type="text" value={userNameInputValue}
                    />
                    <button
                        className="user-submit-button"
                        onClick={setupUser}
                    >
                        Connect
                    </button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default CreateUserForm;