import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './../../components/constants/context';

export const Header: React.FC = React.memo(() => {
    const theme = useContext(ThemeContext);
    const isDark = window.localStorage.getItem('darkTheme') === 'true';

    return (
        <div className="header" style={{ backgroundColor: theme.setting.background }}>
            <nav>
                <Link to="/">Trang chu</Link>
                <Link to="/tech">Cong nghe</Link>
                {isDark && <Link to="#" onClick={theme.toggle}>Dark Theme</Link>}
                {!isDark && <Link to="#" onClick={theme.toggle}>Light Theme</Link>}
            </nav>
        </div>
    );
});
