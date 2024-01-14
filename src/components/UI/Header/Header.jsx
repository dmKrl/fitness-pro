import UserLogo from '../UserLogo/UserLogo';
import Logo from '../Logo/Logo';

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
