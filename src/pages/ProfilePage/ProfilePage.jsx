import { useState } from 'react';
import MyProfile from '../../components/MyProfile/MyProfile';
import ItemMyCourse from '../../components/ItemMyCourses/ItemMyCourses';
import * as S from './ProfilePage.style';
import Header from '../../components/UI/Header/Header';
import ChangeLoginPassword from '../../components/PopUp/ChangeLoginPassword';

function ProfilePage() {
    const [isActivePopUpPassword, setActivePopUpPassword] = useState(false);
    const [isActivePopUpLogin, setActivePopUpLogin] = useState(false);

    return (
        <S.ContainerProfilePage>
            <S.ContainerProfile>
                <Header />
                <MyProfile
                    setActivePopUpPassword={setActivePopUpPassword}
                    setActivePopUpLogin={setActivePopUpLogin}
                />
                <ItemMyCourse />
            </S.ContainerProfile>
            {isActivePopUpPassword === 'changePassword' ? (
                <ChangeLoginPassword
                    isActivePopUpPassword={isActivePopUpPassword}
                    setActivePopUpPassword={setActivePopUpPassword}
                />
            ) : (
                ''
            )}
            {isActivePopUpLogin === 'changeLogin' ? (
                <ChangeLoginPassword
                    isActivePopUpLogin={isActivePopUpLogin}
                    setActivePopUpLogin={setActivePopUpLogin}
                />
            ) : (
                ''
            )}
        </S.ContainerProfilePage>
    );
}

export default ProfilePage;
