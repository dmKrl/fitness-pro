import { useNavigate } from 'react-router-dom';
import ButtonForFetch from '../UI/ButtonForFetch/ButtonForFetch';
import * as S from './BannerConnection.style';

function BannerConnection() {
    const navigate = useNavigate();
    function navigateForMainPage() {
        navigate('/');
    }
    return (
        <S.BannerConnectionContainer>
            <S.BannerConnectionText>
                Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем
                с выбором направления и тренера, с которым тренировки принесут
                здоровье и радость!
            </S.BannerConnectionText>
            <ButtonForFetch onClick={navigateForMainPage}>
                Записаться на тренировку
            </ButtonForFetch>
            <S.BannerImagePhone src="/image/icon/HandPhone.svg" alt="" />
        </S.BannerConnectionContainer>
    );
}

export default BannerConnection;
