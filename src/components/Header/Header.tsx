import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, logout } from '../../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { removeUser } from '../../redux/reducers/userSlice';
import { setTheme, setCurrLang } from '../../redux/reducers/settingsSlice';
import Switch from '@mui/material/Switch';
import { Button, IconButton } from '@mui/material';
import { FormControlLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [checked, setChecked] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const lang = useAppSelector((state) => state.settings.lang);
  const themeMode = useAppSelector((state) => state.settings.theme);
  const dispatch = useAppDispatch();

  const label = themeMode === 'light' ? 'Light Mode' : 'Dark Mode';
  const headerClassName = isSticky ? 'header header_sticky' : 'header';
  const controlsClassName = isShown ? 'header__controls header__controls_show' : 'header__controls';
  const root = document.body;
  root.className = themeMode;

  const handleSelect = (event: SelectChangeEvent) => {
    dispatch(setCurrLang(event.target.value));
  };

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    root.className = themeMode;
    setChecked(event.target.checked);
    dispatch(setTheme());
  };

  const toggleSettings = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('Unexpected error', err);
      }
    }
  };
  const signOut = () => {
    logout();
    dispatch(removeUser());
  };

  useEffect(() => {
    root.className = 'light';
    const handleScroll = () => {
      window.pageYOffset > 0 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  }, [user, loading]);

  return (
    <header className={headerClassName}>
      <div className="container header__container">
        <h1 className="logo">
          <Link to="/" className="logo__link">
            Graphi
          </Link>
        </h1>
        <div className="header__btns">
          <IconButton color="secondary" onClick={toggleSettings}>
            <SettingsIcon fontSize="large" />
          </IconButton>
          {user && (
            <Button
              variant="outlined"
              endIcon={<LogoutIcon color="secondary" />}
              color="secondary"
              onClick={signOut}
            >
              {name}
            </Button>
          )}
          <div className={controlsClassName}>
            <FormControlLabel
              control={<Switch color="secondary" checked={checked} onChange={handleSwitch} />}
              label={label}
            />
            <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
              <Select value={lang} onChange={handleSelect} autoWidth>
                <MenuItem value={'en'}>EN</MenuItem>
                <MenuItem value={'by'}>BY</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
