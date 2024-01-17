import ButtonForFetch from '../UI/ButtonForChange/ButtonForChange';
import * as S from './MyProfile.style';

function MyProfile(props) {
    const { setActivePopUpPassword, setActivePopUpLogin } = props;

    return (
        <S.MyProfileBox>
            <S.MyProfileHeader>Мой профиль</S.MyProfileHeader>
            <S.MyProfileText>
                Логин: {localStorage.getItem('user')}
            </S.MyProfileText>
            <S.MyProfileButtons>
                <ButtonForFetch
                    onClick={() => {
                        setActivePopUpLogin('changeLogin');
                    }}
                >
                    Редактировать логин
                </ButtonForFetch>
                <ButtonForFetch
                    onClick={() => {
                        setActivePopUpPassword('changePassword');
                    }}
                >
                    Редактировать пароль
                </ButtonForFetch>
            </S.MyProfileButtons>
        </S.MyProfileBox>
    );
}

export default MyProfile;
