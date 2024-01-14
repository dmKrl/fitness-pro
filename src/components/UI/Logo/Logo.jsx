import { Link } from 'react-router-dom';
import LogoImage from './Logo.style';

function Logo() {
    return (
        <Link to="/">
            <LogoImage src="/image/logo.png" />
        </Link>
    );
}

export default Logo;
