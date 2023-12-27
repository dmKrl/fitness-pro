import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div>
            <Link to="/">
                <img
                    src="/public/image/logo.png"
                    alt="logo"
                    style={{ width: '220px', height: '35px' }}
                />
            </Link>
        </div>
    );
}

export default Logo;
