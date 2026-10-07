import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Stack, Tooltip, Typography } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import { SET_MODE } from 'store/actions';

// assets
import { IconMenu2, IconMoon, IconSettings, IconSun } from '@tabler/icons';

// ==============================|| HEADER - ICON BUTTON ||============================== //

const HeaderButton = ({ title, onClick, children }) => {
  const theme = useTheme();
  return (
    <Tooltip title={title}>
      <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }} onClick={onClick} aria-label={title}>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            transition: 'all .2s ease-in-out',
            background: theme.palette.secondary.light,
            color: theme.palette.secondary.dark,
            '&:hover': {
              background: theme.palette.secondary.dark,
              color: theme.palette.secondary.light
            }
          }}
        >
          {children}
        </Avatar>
      </ButtonBase>
    </Tooltip>
  );
};

HeaderButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

// ==============================|| HEADER - CLOCK ||============================== //

const Clock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000 * 15);
    return () => clearInterval(timer);
  }, []);

  return (
    <Stack alignItems="flex-end" sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}>
      <Typography variant="h3" sx={{ lineHeight: 1.1, fontVariantNumeric: 'tabular-nums' }}>
        {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Typography>
      <Typography variant="caption">{now.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' })}</Typography>
    </Stack>
  );
};

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle, handleSettingsToggle }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.customization.mode);
  const nextMode = mode === 'dark' ? 'light' : 'dark';

  return (
    <>
      {/* logo & toggler button */}
      <Box sx={{ width: { xs: 'auto', md: 228 }, display: 'flex' }}>
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <HeaderButton title="Toggle menu" onClick={handleLeftDrawerToggle}>
          <IconMenu2 stroke={1.5} size="1.3rem" />
        </HeaderButton>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Clock />
        <HeaderButton title={`Switch to ${nextMode} mode`} onClick={() => dispatch({ type: SET_MODE, mode: nextMode })}>
          {mode === 'dark' ? <IconSun stroke={1.5} size="1.3rem" /> : <IconMoon stroke={1.5} size="1.3rem" />}
        </HeaderButton>
        <HeaderButton title="Customize" onClick={handleSettingsToggle}>
          <IconSettings stroke={1.5} size="1.3rem" />
        </HeaderButton>
      </Stack>
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
  handleSettingsToggle: PropTypes.func
};

export default Header;
