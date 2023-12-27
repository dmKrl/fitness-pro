import ButtonForFetch from '../UI/ButtonForFetch/ButtonForFetch';

function BannerConnection() {
    return (
        <div>
            <p>
                Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем
                с выбором направления и тренера, с которым тренировки принесут
                здоровье и радость!
            </p>
            <ButtonForFetch>Записаться на тренировку</ButtonForFetch>
            <img src="/public/image/HandPhone.svg" alt="" />
        </div>
    );
}

export default BannerConnection;
