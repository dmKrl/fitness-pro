import { useState } from 'react';
import MyProfile from '../../components/MyProfile/MyProfile';
import ItemMyCourse from '../../components/ItemMyCourses/ItemMyCourses';
import * as S from './ProfilePage.style';
import Header from '../../components/UI/Header/Header';
import ChangeLoginPassword from '../../components/PopUp/ChangePassword';

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
