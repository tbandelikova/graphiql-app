import { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import { Button, IconButton } from '@mui/material';
import { FormControlLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  const [lang, setLang] = useState('EN');
  const [isSticky, setIsSticky] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [checked, setChecked] = useState(true);

  const root = document.body; //TODO

  const label = checked ? 'Light Mode' : 'Dark Mode';
  const userName = 'User';
  const headerClassName = isSticky ? 'header header_sticky' : 'header';
  const controlsClassName = isShown ? 'header__controls header__controls_show' : 'header__controls';

  const handleSelect = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    root.className = checked ? 'dark' : 'light';
  };

  const toggleSettings = () => {
    isShown ? setIsShown(false) : setIsShown(true);
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

  return (
    <header className={headerClassName}>
      <div className="container header__container">
        <h1 className="logo">LOGO</h1>
        <div className="header__btns">
          <Button variant="outlined" endIcon={<LogoutIcon color='secondary' />} color="secondary">
            {userName}
          </Button>
          <IconButton color="secondary" onClick={toggleSettings}>
            <SettingsIcon fontSize="large" />
          </IconButton>
          <div className={controlsClassName}>
            <FormControlLabel control={<Switch color="secondary" checked={checked}
              onChange={handleSwitch} />} label={label} />
            <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
              <Select
                value={lang}
                onChange={handleSelect}
                autoWidth
              >
                <MenuItem value={'EN'}>EN</MenuItem>
                <MenuItem value={'BY'}>BY</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;