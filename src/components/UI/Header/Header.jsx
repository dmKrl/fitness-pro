import UserLogo from '../UserLogo/UserLogo';
import Logo from '../Logo/Logo';
import * as S from './Header.styled'

export default function Header() {
    return (
        <S.Header >
            <Logo />
            <UserLogo />
        </S.Header>
    );
}
