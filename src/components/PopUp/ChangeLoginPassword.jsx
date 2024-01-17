import { useEffect, useState } from 'react';
import { getAuth, updatePassword, updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import * as S from './ChangeLoginPassword.styled';
import Logo from '../UI/Logo/LogoMyProfile';

export default function ChangeLoginPassword(props) {
    const { isActivePopUpPassword, isActivePopUpLogin } = props;
    const [offButton, setOffButton] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const auth = getAuth();
    const user = auth.currentUser;

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = () => {
        setOffButton(true);
        if (isActivePopUpPassword && password !== repeatPassword) {
            setErrorMessage('Пароли не совпадают');
            setOffButton(false);
        } else if (isActivePopUpPassword && password === repeatPassword) {
            updatePassword(user, password)
                .then(() => {
                    window.location.reload();
                })
                .catch((err) => {
                    if (
                        err.message ===
                        'Firebase: Password should be at least 6 characters (auth/weak-password).'
                    ) {
                        setErrorMessage(
                            'Пароль должен содержать не менее 6 символов',
                        );
                        return;
                    }
                    if (
                        err.message ===
                        'Firebase: Error (auth/requires-recent-login).'
                    ) {
                        setErrorMessage(
                            'Выполните повторную авторизацию на сайте',
                        );
                        return;
                    }
                    setErrorMessage(err.message);
                })
                .finally(() => {
                    setOffButton(false);
                });
        } else if (isActivePopUpLogin) {
            updateProfile(auth.currentUser, {
                displayName: login,
            })
                .then((data) => {
                    console.log(data);
                    localStorage.setItem('user', login);
                    window.location.reload();
                })
                .finally(() => {
                    setOffButton(false);
                });
        }
    };

    useEffect(() => {
        setErrorMessage(null);
    }, [password, repeatPassword]);

    return (
        <S.PageContainer>
            <S.ModalForm onSubmit={handleSubmit(onSubmit)}>
                <S.ModalLogo>
                    <Logo />
                </S.ModalLogo>
                {isActivePopUpPassword ? (
                    <S.Inputs>
                        <S.ModalHeader>Новый пароль:</S.ModalHeader>
                        <S.ModalInput
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            {...register('password', {
                                required: '* Поле обязательно к заполнению',
                                onChange: (event) => {
                                    setPassword(event.target.value);
                                },
                            })}
                        />
                        <S.FillInTheField>
                            {errors.password && (
                                <p>{errors.password.message || 'Error!'}</p>
                            )}
                        </S.FillInTheField>
                        <S.ModalInput
                            type="password"
                            placeholder="Повторите пароль"
                            value={repeatPassword}
                            {...register('repeatPassword', {
                                required: '* Поле обязательно к заполнению',
                                onChange: (event) => {
                                    setRepeatPassword(event.target.value);
                                },
                            })}
                        />
                        <S.FillInTheField>
                            {errors.repeatPassword && (
                                <p>
                                    {errors.repeatPassword.message || 'Error!'}
                                </p>
                            )}
                        </S.FillInTheField>
                    </S.Inputs>
                ) : (
                    ''
                )}
                {isActivePopUpLogin ? (
                    <S.Inputs>
                        <S.ModalHeader>Новый логин:</S.ModalHeader>
                        <S.ModalInput
                            type="text"
                            placeholder="Логин"
                            value={login}
                            {...register('login', {
                                required: '* Поле обязательно к заполнению',
                                onChange: (event) => {
                                    setLogin(event.target.value);
                                },
                            })}
                        />
                        <S.FillInTheField>
                            {errors.login && (
                                <p>{errors.login.message || 'Error!'}</p>
                            )}
                        </S.FillInTheField>
                    </S.Inputs>
                ) : (
                    ''
                )}

                {errorMessage && <S.Error>{errorMessage}</S.Error>}
                <S.Buttons>
                    {!offButton ? (
                        <S.PrimaryButton type="submit" disabled={offButton}>
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
