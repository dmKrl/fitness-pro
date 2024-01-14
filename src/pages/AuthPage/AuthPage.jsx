import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './AuthPage.styles';

function AuthPage() {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [offButton] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(false);
    const navigate = useNavigate();

    const handleIsLoginMode = () => {
        setIsLoginMode(true);
    };

    const auth = getAuth();
    function fetchUsersRegistration() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const { user } = userCredential;
                localStorage.setItem('user', user.email);
                console.log(localStorage.getItem('user'));
                console.log(user);
                navigate('/profile');
                // ...
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                // ..
                console.log(errorCode);
                console.log(errorMessage);
            });
    }

    function fetchUsersLogin() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                localStorage.setItem('user', user.email);
                console.log(user);
                navigate('/profile');
                // ...
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }

    useEffect(() => {
        setError(null);
    }, [isLoginMode, email, password, repeatPassword]);

    return (
        <S.PageContainer>
            <S.ModalForm>
                <Link to="/">
                    <S.ModalLogo>
                        <S.ModalLogoImage src="/image/logo.png" alt="logo" />
                    </S.ModalLogo>
                </Link>
                {isLoginMode ? (
                    <>
                        <S.Inputs>
                            <S.ModalInput
                                type="text"
                                name="login"
                                placeholder="Почта"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
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
                        {error && <S.Error>{error}</S.Error>}
                        <S.Buttons onClick={fetchUsersRegistration}>
                            <S.PrimaryButton>
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
                                type="text"
                                name="login"
                                placeholder="Почта"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </S.Inputs>
                        {error && <S.Error>{error}</S.Error>}
                        <S.Buttons>
                            <S.PrimaryButton onClick={fetchUsersLogin}>
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
