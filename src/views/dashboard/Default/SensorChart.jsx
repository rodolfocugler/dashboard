import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { MenuItem, TextField, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';
import moment from 'moment';

// project imports
import SkeletonWeatherForecastChart from 'ui-component/cards/Skeleton/WeatherForecastChart';
import MainCard from 'ui-component/cards/MainCard';
import CardTitle from 'ui-component/cards/CardTitle';
import useDomain, { localFetch } from 'hooks/useDomain';

// chart data
import templateChartData from './chart-data/sensor-chart';

// assets
import { IconPlant } from '@tabler/icons';

const sensors = [
  {
    value: 'jardim',
    label: 'Jardim'
  }
];

// ==============================|| DASHBOARD DEFAULT - SENSOR CHART ||============================== //

const SensorChart = () => {
  const theme = useTheme();
  const domain = useDomain();
  const [sensor, setSensor] = useState('jardim');
  const [sensorData, setSensorData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await localFetch(`http://${domain}:1880/sensor/${sensor}`);
      const data = await response.json();
      setSensorData({
        hourly: {
          time: data.map((item) => moment(item.timestamp).format('DD/MM HH:mm')),
          value: data.map((item) => Number(item.value))
        }
      });
    })().catch((err) => {
      console.log(err);
      setError(true);
    });
  }, [domain, sensor]);

  if (!sensorData && !error) return <SkeletonWeatherForecastChart />;

  const label = sensors.find((s) => s.value === sensor).label;
  const values = sensorData?.hourly.value ?? [];

  return (
    <MainCard
      title={
        <CardTitle
          icon={IconPlant}
          title="Sensor"
          subtitle={values.length ? `Latest reading: ${values[values.length - 1]}` : 'No readings'}
          color="secondary"
        />
      }
      secondary={
        <TextField select size="small" value={sensor} onChange={(e) => setSensor(e.target.value)} inputProps={{ 'aria-label': 'Sensor' }}>
          {sensors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      }
    >
      {error ? (
        <Typography variant="body2">Couldn&apos;t reach the sensor API on {domain}.</Typography>
      ) : (
        <Chart {...templateChartData(sensorData, label, theme)} />
      )}
    </MainCard>
  );
};

export default SensorChart;
