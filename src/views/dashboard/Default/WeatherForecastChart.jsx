import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, MenuItem, Stack, TextField, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';
import { fetchWeatherApi } from 'openmeteo';
import moment from 'moment';

// project imports
import SkeletonWeatherForecastChart from 'ui-component/cards/Skeleton/WeatherForecastChart';
import MainCard from 'ui-component/cards/MainCard';
import CardTitle from 'ui-component/cards/CardTitle';

// chart data
import templateChartData from './chart-data/weather-forecast-chart';

// assets
import { IconCloud, IconDroplet, IconTemperature, IconUmbrella } from '@tabler/icons';

const cities = [
  {
    value: 'wolfsburg',
    options: {
      latitude: 52.4245,
      longitude: 10.7815,
      timezone: 'Europe/Berlin'
    },
    label: 'Wolfsburg'
  },
  {
    value: 'sorocaba',
    options: {
      latitude: -23.5017,
      longitude: -47.4581,
      timezone: 'America/Sao_Paulo'
    },
    label: 'Sorocaba'
  }
];

const Stat = ({ icon: Icon, label, value }) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <Box sx={{ color: 'primary.main', display: 'flex' }}>
      <Icon stroke={1.75} size="1.4rem" />
    </Box>
    <Box>
      <Typography variant="h4" sx={{ fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </Typography>
      <Typography variant="caption">{label}</Typography>
    </Box>
  </Stack>
);

Stat.propTypes = {
  icon: PropTypes.elementType,
  label: PropTypes.string,
  value: PropTypes.node
};

// ==============================|| DASHBOARD DEFAULT - WEATHER FORECAST CHART ||============================== //

const WeatherForecastChart = () => {
  const theme = useTheme();
  const [city, setCity] = useState('wolfsburg');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      const params = {
        ...cities.find((d) => d.value === city).options,
        hourly: ['temperature_2m', 'apparent_temperature', 'precipitation_probability', 'precipitation'],
        forecast_days: 3
      };
      const [response] = await fetchWeatherApi('https://api.open-meteo.com/v1/forecast', params);
      const utcOffsetSeconds = response.utcOffsetSeconds();
      const hourly = response.hourly();
      const start = Number(hourly.time());
      const times = Array.from({ length: (Number(hourly.timeEnd()) - start) / hourly.interval() }, (_, i) => start + i * hourly.interval());

      setWeather({
        // index of the current hour, used for the "now" summary
        now: Math.max(
          0,
          times.findLastIndex((ts) => ts <= Date.now() / 1000)
        ),
        hourly: {
          time: times.map((ts) =>
            moment
              .unix(ts + utcOffsetSeconds)
              .utc()
              .format('DD/MM HH:mm')
          ),
          temperature2m: Array.from(hourly.variables(0).valuesArray(), Math.round),
          apparentTemperature: Array.from(hourly.variables(1).valuesArray(), Math.round),
          precipitationProbability: Array.from(hourly.variables(2).valuesArray()),
          precipitation: Array.from(hourly.variables(3).valuesArray(), (v) => Math.round(v * 10) / 10)
        }
      });
    })().catch((error) => console.log(error));
  }, [city]);

  if (!weather) return <SkeletonWeatherForecastChart />;

  const { hourly, now } = weather;

  return (
    <MainCard
      title={<CardTitle icon={IconCloud} title="Weather forecast" subtitle="Next 3 days, hourly" />}
      secondary={
        <TextField select size="small" value={city} onChange={(e) => setCity(e.target.value)} inputProps={{ 'aria-label': 'City' }}>
          {cities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      }
    >
      <Stack direction="row" flexWrap="wrap" useFlexGap spacing={4} sx={{ mb: 2 }}>
        <Stat icon={IconTemperature} label="Now" value={`${hourly.temperature2m[now]}°C`} />
        <Stat icon={IconTemperature} label="Feels like" value={`${hourly.apparentTemperature[now]}°C`} />
        <Stat icon={IconUmbrella} label="Rain chance" value={`${hourly.precipitationProbability[now]}%`} />
        <Stat icon={IconDroplet} label="Precipitation" value={`${hourly.precipitation[now]} mm`} />
      </Stack>
      <Chart {...templateChartData(weather, theme)} />
    </MainCard>
  );
};

export default WeatherForecastChart;
