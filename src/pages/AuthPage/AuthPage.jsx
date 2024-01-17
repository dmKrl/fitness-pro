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

    function setDisplayName({ user }) {
        updateProfile(auth.currentUser, {
            displayName: userName,
        }).then((data) => {
            console.log(data);
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

    const addTodo = async (userId) => {
        try {
            await setDoc(doc(db, 'userProgress', userId), {
                // yoga: {
                //     day: {
                //         exercises1: {
                //             quantity:
                //         }
                //         exercises2:
                //         exercises3:
                //         exercises4:
                //         exercises5:
                //     }

                // },
                stretching: {
                    userId: '222',
                    progressUser: '222',
                },
                bodyflex: {
                    userId: '222',
                    progressUser: '222',
                },
            });
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
                    console.log(userUid);
                    addTodo(userUid);
                })
                .catch((err) => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                })
                .finally(() => {
                    setOffButton(false);
                });
            setOffButton(true);
        } else if (!isLoginMode) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const { user } = userCredential;
                    localStorage.setItem('user', user.displayName);
                    console.log(user);
                    navigate('/profile');
                })
                .catch((err) => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                })
                .finally(() => {
                    setOffButton(false);
                });
            setOffButton(true);
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
                            <S.PrimaryButton
                                type="submit"
                                // onClick={fetchUsersLogin}
                                disabled={offButton}
                            >
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
