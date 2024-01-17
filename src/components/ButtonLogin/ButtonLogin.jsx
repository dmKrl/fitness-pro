import { useEffect, useState } from 'react';

import * as S from './ButtonLogin.styled';

function ButtonLogin() {
    const [loginButton, setLoginButton] = useState(false);

    const changingUserInformation = () => {
        localStorage.removeItem('user');
        window.location.pathname = '/auth';
    };

    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);

    useEffect(() => {
        setLoginButton(localStorage.getItem('user'));
    }, []);

    return (
        <>
            {loginButton ? (
                <S.Profile>
                    <img src="../image/icon/Ellipse 376.svg" alt="" />
                    <S.Name>{localStorage.getItem('user')}</S.Name>
                    <S.SpanArrow onClick={toggleVisibility}>
                        <img src="../image/svg/ArrowMain.svg" alt="" />
                    </S.SpanArrow>
                    {visible && (
                        <S.NavMenu>
                            <S.MenuList>
                                <S.MenuItem>
                                    <S.MenuLink to="/">
                                        Главная страница
                                    </S.MenuLink>
                                </S.MenuItem>
                                <S.MenuItem>
                                    <S.MenuLink to="/profile">
                                        Мой профиль
                                    </S.MenuLink>
                                </S.MenuItem>
                                <S.MenuItem>
                                    <S.MenuLink
                                        onClick={changingUserInformation}
                                    >
                                        Выйти
                                    </S.MenuLink>
                                </S.MenuItem>
                            </S.MenuList>
                        </S.NavMenu>
                    )}
                </S.Profile>
            ) : (
                <S.ButtonLoginStyled to="/auth">Войти</S.ButtonLoginStyled>
            )}
        </>
    );
}

export default ButtonLogin;
