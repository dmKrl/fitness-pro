import { useState } from 'react';
import MyProfile from '../MyProfile/MyProfile';
import ItemMyCourse from '../ItemMyCourses/ItemMyCourses';
import * as S from './ProfilePage.style';
import Header from '../Header/Header';
import ChangeLoginPassword from '../PopUp/ProfilePopUp/ChangePassword';

function ProfilePage() {
    const [isActivePopUp, setActivePopUp] = useState(false);

    return (
        <S.ContainerProfilePage>
            <S.ContainerProfile>
                <Header />
                <MyProfile setActivePopUp={setActivePopUp} />
                <ItemMyCourse />
            </S.ContainerProfile>
            {isActivePopUp === 'changePassword' ? (
                <ChangeLoginPassword setActivePopUp={setActivePopUp} />
            ) : (
                ''
            )}
        </S.ContainerProfilePage>
    );
}

export default ProfilePage;
