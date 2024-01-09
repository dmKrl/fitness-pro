import UserLogo from '../UI/UserLogo/UserLogo';
import Logo from '../UI/Logo/Logo';

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
