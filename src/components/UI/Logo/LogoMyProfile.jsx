import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div>
            <Link to="/">
                <svg
                    style={{
                        width: '184px',
                        height: '30px',
                    }}
                >
                    <use xlinkHref="/image/icon/sprite.svg#icon-logo" />
                </svg>
            </Link>
        </div>
    );
}

export default Logo;
