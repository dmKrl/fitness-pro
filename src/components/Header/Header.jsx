import Logo from '../UI/Logo/LogoMyProfile';
import UserLogo from '../UI/UserLogo/UserLogo';

export default function Header() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Logo />
            <UserLogo />
        </div>
    );
}
