import { useEffect, useState } from 'react';
import { getAuth, updatePassword, updateProfile } from 'firebase/auth';
import * as S from './ChangeLoginPassword.styled';
import Logo from '../UI/Logo/LogoMyProfile';

export default function ChangeLoginPassword(props) {
    const { isActivePopUpPassword, isActivePopUpLogin } = props;
    const [isActiveButton, setActiveButton] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const auth = getAuth();
    const user = auth.currentUser;

    // const handleRegister = async () => {
    //     if (!password) {
    //         setErrorMessage('Введите пароль');
    //         return;
    //     }
    //     if (password !== repeatPassword) {
    //         setErrorMessage('Пароли не совпадают');
    //         return;
    //     }
    //     setActiveButton(false);
    //     setActivePopUp(false);
    // };

    function updateUserPassword() {
        updatePassword(user, password)
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                setActiveButton(true);
                if (
                    error.message ===
                    'Firebase: Password should be at least 6 characters (auth/weak-password).'
                ) {
                    setErrorMessage(
                        'Пароль должен содержать не менее 6 символов',
                    );
                    return;
                }
                if (
                    error.message ===
                    'Firebase: Error (auth/requires-recent-login).'
                ) {
                    setErrorMessage('Выполните повторную авторизацию на сайте');
                    return;
                }
                setErrorMessage(error.message);
            });
    }
    function setDisplayName() {
        updateProfile(auth.currentUser, {
            displayName: login,
        }).then((data) => {
            console.log(data);
            localStorage.setItem('user', login);
            window.location.reload();
        });
    }

    useEffect(() => {
        setErrorMessage(null);
    }, [password, repeatPassword]);

    return (
        <S.PageContainer>
            <S.ModalForm>
                <S.ModalLogo>
                    <Logo />
                </S.ModalLogo>
                {isActivePopUpPassword ? (
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
                ) : (
                    ''
                )}
                {isActivePopUpLogin ? (
                    <S.Inputs>
                        <S.ModalHeader>Новый логин:</S.ModalHeader>
                        <S.ModalInput
                            type="text"
                            name="login"
                            placeholder="Логин"
                            value={login}
                            onChange={(event) => {
                                setLogin(event.target.value);
                            }}
                        />
                    </S.Inputs>
                ) : (
                    ''
                )}

                {errorMessage && <S.Error>{errorMessage}</S.Error>}
                <S.Buttons>
                    {isActiveButton ? (
                        <>
                            {isActivePopUpPassword ? (
                                <S.PrimaryButton
                                    onClick={() => updateUserPassword()}
                                >
                                    Сохранить
                                </S.PrimaryButton>
                            ) : (
                                ''
                            )}
                            {isActivePopUpLogin ? (
                                <S.PrimaryButton
                                    onClick={() => setDisplayName()}
                                >
                                    Сохранить
                                </S.PrimaryButton>
                            ) : (
                                ''
                            )}
                        </>
                    ) : (
                        <S.PrimaryButton disabled>Сохраняем...</S.PrimaryButton>
                    )}
                </S.Buttons>
            </S.ModalForm>
        </S.PageContainer>
    );
}
