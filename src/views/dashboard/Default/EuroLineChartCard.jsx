import { useEffect, useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';
import axios from 'axios';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonCard from 'ui-component/cards/Skeleton/SkeletonCard';

import templateChartData from './chart-data/euro-line-chart';

// assets
import { IconCurrencyEuro, IconTrendingDown, IconTrendingUp } from '@tabler/icons';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary[800]} 100%)`,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: 'rgba(255, 255, 255, 0.06)',
    borderRadius: '50%',
    top: -125,
    right: -15,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ==============================|| DASHBOARD - EURO LINE CHART CARD ||============================== //

const EuroLineChartCard = () => {
  const theme = useTheme();
  const [euro, setEuro] = useState(null);
  const [chartData, setChartData] = useState(templateChartData([]));

  useEffect(() => {
    (async () => {
      try {
        const dailyResponse = await axios.get(`https://economia.awesomeapi.com.br/json/daily/EUR-BRL/10`);
        const lastResponse = await axios.get(`https://economia.awesomeapi.com.br/last/EUR-BRL`);
        const bids = [...dailyResponse.data.reverse(), lastResponse.data.EURBRL].map((d) => parseFloat(d.bid));
        // drop consecutive duplicates so the sparkline doesn't flatline
        const data = bids.map((b) => Math.round(b * 100) / 100).filter((v, i, arr) => v !== arr[i - 1]);
        const value = bids[bids.length - 1];
        const previous = bids[bids.length - 2];
        setChartData(templateChartData(data));
        setEuro({ value, change: ((value - previous) / previous) * 100 });
      } catch (error) {
        console.log(error);
        setEuro({ value: NaN, change: 0 });
      }
    })();
  }, []);

  if (!euro) return <SkeletonCard />;

  const failed = Number.isNaN(euro.value);
  const up = euro.change >= 0;

  return (
    <CardWrapper border={false} content={false}>
      <Box sx={{ p: 2.5 }}>
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
          <Avatar
            variant="rounded"
            sx={{ ...theme.typography.mediumAvatar, bgcolor: 'rgba(255,255,255,0.18)', color: '#fff', borderRadius: '10px' }}
          >
            <IconCurrencyEuro stroke={1.75} size="1.25rem" />
          </Avatar>
          <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: theme.palette.primary[200] }}>Euro &rarr; Real</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
          <Box>
            <Typography sx={{ fontSize: '2.125rem', fontWeight: 600, lineHeight: 1.3, fontVariantNumeric: 'tabular-nums' }}>
              {failed ? 'n/a' : `R$ ${euro.value.toFixed(2)}`}
            </Typography>
            {!failed && (
              <Chip
                size="small"
                icon={up ? <IconTrendingUp size="1rem" /> : <IconTrendingDown size="1rem" />}
                label={`${up ? '+' : ''}${euro.change.toFixed(2)}% today`}
                sx={{ mt: 0.5, bgcolor: 'rgba(255,255,255,0.18)', color: '#fff', fontWeight: 500, '& .MuiChip-icon': { color: '#fff' } }}
              />
            )}
          </Box>
          <Box sx={{ width: '50%' }}>
            <Chart {...chartData} />
          </Box>
        </Stack>
      </Box>
    </CardWrapper>
  );
};

export default EuroLineChartCard;
