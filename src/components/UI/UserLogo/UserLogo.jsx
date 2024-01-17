import { useState } from 'react';
import * as S from './UserLogo.style';

export default function UserLogo() {
    const changingUserInformation = () => {
        localStorage.removeItem('user');
        window.location.pathname = '/auth';
    };

    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);

    return (
        <S.Profile>
            <img src="../image/icon/Ellipse 376.svg" alt="" />
            <S.Name>{localStorage.getItem('user')}</S.Name>
            <S.SpanArrow onClick={toggleVisibility}>
                <img src="../image/icon/Arrow.svg" alt="" />
            </S.SpanArrow>
            {visible && (
                <S.NavMenu>
                    <S.MenuList>
                        <S.MenuItem>
                            <S.MenuLink to="/">Главная страница</S.MenuLink>
                        </S.MenuItem>
                        <S.MenuItem>
                            <S.MenuLink to="/profile">Мой профиль</S.MenuLink>
                        </S.MenuItem>
                        <S.MenuItem>
                            <S.MenuLink onClick={changingUserInformation}>
                                Выйти
                            </S.MenuLink>
                        </S.MenuItem>
                    </S.MenuList>
                </S.NavMenu>
            )}
        </S.Profile>
    );
}
