import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Stack, Typography } from '@mui/material';

// ==============================|| CARD TITLE - ICON + TITLE + SUBTITLE ||============================== //

const CardTitle = ({ icon: Icon, title, subtitle, color = 'primary' }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" spacing={1.5} sx={{ minWidth: 0 }}>
      <Avatar
        variant="rounded"
        sx={{
          ...theme.typography.mediumAvatar,
          borderRadius: '10px',
          background: theme.palette[color].light,
          color: theme.palette[color].dark
        }}
      >
        <Icon stroke={1.75} size="1.25rem" />
      </Avatar>
      <Stack sx={{ minWidth: 0 }}>
        <Typography variant="h4" noWrap>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="caption" noWrap>
            {subtitle}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

CardTitle.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary'])
};

export default CardTitle;
