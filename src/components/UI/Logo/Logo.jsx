import { Link } from 'react-router-dom';
import * as S from './Logo.style';

function Logo() {
    return (
        <S.BlockLogo>
            <Link to="/">
                <S.LogoImage src="/image/logo.png" />
            </Link>
        </S.BlockLogo>
    );
}

export default Logo;
