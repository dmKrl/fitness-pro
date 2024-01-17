import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './AuthPage.styles';
import { db } from '../../firebase-config';
import data from '../../data.json';

function AuthPage() {
    const [error, setError] = useState(null);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [offButton, setOffButton] = useState(false);
    const navigate = useNavigate();
    const [isLoginMode, setIsLoginMode] = useState(false);
    const auth = getAuth();

    const { myWorkouts } = data;
    function setDisplayName({ user }) {
        updateProfile(auth.currentUser, {
            displayName: userName,
        }).then(() => {
            localStorage.setItem('user', user.displayName);
            navigate('/profile');
        });
    }

    useEffect(() => {
        setError(null);
    }, [isLoginMode, email, password, repeatPassword, userName]);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const addProgressForUser = async (userId) => {
        try {
            await setDoc(doc(db, 'userProgress', userId), { myWorkouts });
            // console.log('Document written with ID: ', docRef.id);
        } catch (err) {
            console.error('Error adding document: ', error);
        }
    };

    // const addTodo = async (userId) => {
    //     try {
    //         const docRef = await addDoc(
    //             collection(db, 'userProgress'),
    //             {
    //                 yoga: 'йога',
    //                 stretching: 'дичь',
    //                 bodyflex: 'ерунда',
    //             },
    //         );
    //         console.log('Document written with ID: ', docRef.id);
    //     } catch (error) {
    //         console.error('Error adding document: ', error);
    //     }
    // };

    const onSubmit = () => {
        setOffButton(true);
        if (isLoginMode && password !== repeatPassword) {
            setError('Пароли не совпадают');
            setOffButton(false);
        } else if (isLoginMode && password === repeatPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    const { user } = userCredential;
                    setDisplayName({ user });
                    const userUid = user.uid;
                    addProgressForUser(userUid);
                })
                .catch((err) => {
                    if (
                        err.message ===
                        'Firebase: Error (auth/email-already-in-use).'
                    ) {
                        return setError('Такое email уже зарегестрирован');
                    }
                    if (
                        err.message ===
                        'Firebase: Password should be at least 6 characters (auth/weak-password).'
                    ) {
                        return setError(
                            'Пароль должен содержать не менее 6 символов',
                        );
                    }
                    return err;
                    // const errorCode = err.code;
                    // const errorMessage = err.message;
                    // console.log(errorCode);
                    // console.log(errorMessage);
                })
                .finally(() => {
                    setOffButton(false);
                });
        } else if (!isLoginMode) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const { user } = userCredential;
                    localStorage.setItem('user', user.displayName);
                    console.log(user);
                    navigate('/profile');
                })
                .catch((err) => {
                    if (
                        err.message ===
                        'Firebase: Error (auth/invalid-login-credentials).'
                    ) {
                        setError('Неверные учетные данные для входа');
                    }
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                })
                .finally(() => {
                    setOffButton(false);
                });
        }
    };

    const handleIsLoginMode = () => {
        setIsLoginMode(true);
    };

    return (
        <S.PageContainer>
            <S.ModalForm onSubmit={handleSubmit(onSubmit)}>
                <Link to="/">
                    <S.ModalLogo>
                        <S.ModalLogoImage src="/image/logo.png" alt="logo" />
                    </S.ModalLogo>
                </Link>
                {isLoginMode ? (
                    <>
                        <S.Inputs>
                            <S.ModalInput
                                type="email"
                                placeholder="Почта"
                                value={email}
                                {...register('login', {
                                    required: '* Поле обязательно к заполнению',
                                    onChange: (event) => {
                                        setEmail(event.target.value);
                                    },
                                })}
                            />
                            <S.FillInTheField>
                                {errors.login && (
                                    <p>{errors.login.message || 'Error!'}</p>
                                )}
                            </S.FillInTheField>
                            <S.ModalInput
                                type="text"
                                placeholder="Имя"
                                value={userName}
                                {...register('name', {
                                    required: '* Поле обязательно к заполнению',
                                    onChange: (event) => {
                                        setUserName(event.target.value);
                                    },
                                })}
                            />
                            <S.FillInTheField>
                                {errors.name && (
                                    <p>{errors.name.message || 'Error!'}</p>
                                )}
                            </S.FillInTheField>
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
                                        {errors.repeatPassword.message ||
                                            'Error!'}
                                    </p>
                                )}
                            </S.FillInTheField>
                        </S.Inputs>
                        {error && <S.Error>{error}</S.Error>}
                        <S.Buttons
                        // onClick={fetchUsersRegistration}
                        >
                            <S.PrimaryButton type="submit" disabled={offButton}>
                                {offButton
                                    ? 'Загружаем информацию...'
                                    : 'Зарегистрироваться'}
                            </S.PrimaryButton>
                        </S.Buttons>
                    </>
                ) : (
                    <>
                        <S.Inputs>
                            <S.ModalInput
                                type="email"
                                placeholder="Почта"
                                value={email}
                                {...register('login', {
                                    required: '* Поле обязательно к заполнению',
                                    onChange: (event) => {
                                        setEmail(event.target.value);
                                    },
                                })}
                            />
                            <S.FillInTheField>
                                {errors.login && (
                                    <p>{errors.login.message || 'Error!'}</p>
                                )}
                            </S.FillInTheField>
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
                        </S.Inputs>
                        {error && <S.Error>{error}</S.Error>}
                        <S.Buttons>
                            <S.PrimaryButton type="submit" disabled={offButton}>
                                {offButton
                                    ? 'Загружаем информацию...'
                                    : 'Войти'}
                            </S.PrimaryButton>
                            <S.ButtonTwo onClick={handleIsLoginMode}>
                                Зарегистрироваться
                            </S.ButtonTwo>
                        </S.Buttons>
                    </>
                )}
            </S.ModalForm>
        </S.PageContainer>
    );
}
export default AuthPage;
