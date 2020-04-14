import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'src/components/constants/context';

export const Header: React.FC = React.memo(() => {
    const theme = useContext(ThemeContext);
    const isDark = window.localStorage.getItem('darkTheme') === 'true';

    const toggleTheme = () => {
        theme.toggle();
        console.log(123, isDark);
    };

    return (
        <div className="header" style={{ backgroundColor: theme.setting.background }}>
            <nav>
                <Link to="/">Trang chu</Link>
                <Link to="/tech">Cong nghe</Link>
                {isDark && (
                    <Link to="#" onClick={toggleTheme}>
                        Dark Theme
                    </Link>
                )}
                {!isDark && (
                    <Link to="#" onClick={toggleTheme}>
                        Light Theme
                    </Link>
                )}
            </nav>
        </div>
    );
});
