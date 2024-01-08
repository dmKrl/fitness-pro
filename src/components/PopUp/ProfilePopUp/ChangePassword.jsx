import { useEffect, useState } from 'react';
import * as S from './ChangePassword.styles';
import Logo from '../../UI/Logo/Logo';

export default function ChangeLoginPassword(props) {
    const { setActivePopUp } = props;
    const [isActiveButton, setActiveButton] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleRegister = async () => {
        if (!password) {
            setErrorMessage('Введите пароль');
            return;
        }
        if (password !== repeatPassword) {
            setErrorMessage('Пароли не совпадают');
            return;
        }
        setActiveButton(false);
        setActivePopUp(false);
    };

    useEffect(() => {
        setErrorMessage(null);
    }, [password, repeatPassword]);

    return (
        <S.PageContainer>
            <S.ModalForm>
                <S.ModalLogo>
                    <Logo />
                </S.ModalLogo>
                <S.Inputs>
                    <S.ModalHeader>Новый пароль:</S.ModalHeader>
                    <S.ModalInput
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <S.ModalInput
                        type="password"
                        name="repeat-password"
                        placeholder="Повторите пароль"
                        value={repeatPassword}
                        onChange={(event) => {
                            setRepeatPassword(event.target.value);
                        }}
                    />
                </S.Inputs>
                {errorMessage && <S.Error>{errorMessage}</S.Error>}
                <S.Buttons>
                    {isActiveButton ? (
                        <S.PrimaryButton onClick={() => handleRegister()}>
                            Сохранить
                        </S.PrimaryButton>
                    ) : (
                        <S.PrimaryButton disabled>Сохраняем...</S.PrimaryButton>
                    )}
                </S.Buttons>
            </S.ModalForm>
        </S.PageContainer>
    );
}
