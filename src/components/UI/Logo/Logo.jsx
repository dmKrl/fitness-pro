import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div>
            <Link to="/">
                <svg style={{ width: '135px', height: '20px' }}>
                    <use xlinkHref="/image/icon/sprite.svg#icon-logo" />
                </svg>
            </Link>
        </div>
    );
}

export default Logo;
