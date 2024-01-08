import ButtonForFetch from '../UI/ButtonForChange/ButtonForChange';
import * as S from './MyProfile.style';

function MyProfile(props) {
    const { setActivePopUp } = props;

    return (
        <S.MyProfileBox>
            <S.MyProfileHeader>Мой профиль</S.MyProfileHeader>
            <S.MyProfileText>Логин: XXXXX</S.MyProfileText>
            <S.MyProfileText>Пароль: XXXXX</S.MyProfileText>
            <S.MyProfileButtons
                onClick={() => {
                    setActivePopUp('changePassword');
                }}
            >
                <ButtonForFetch>Редактировать пароль</ButtonForFetch>
            </S.MyProfileButtons>
        </S.MyProfileBox>
    );
}

export default MyProfile;
