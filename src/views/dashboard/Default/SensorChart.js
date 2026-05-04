import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

// material-ui
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';
import moment from 'moment';

// project imports
import SkeletonWeatherForecastChart from 'ui-component/cards/Skeleton/WeatherForecastChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data
import templateChartData from './chart-data/sensor-chart';
import queryString from 'querystring';
import * as search from 'formik';

const status = [
  {
    value: 'jardim',
    label: 'Jardim'
  }
];

// ==============================|| DASHBOARD DEFAULT - WEATHER FORECAST CHART ||============================== //

const SensorChart = ({ isLoading }) => {
  const [value, setValue] = useState('jardim');
  const [chartData, setChartData] = useState(templateChartData(undefined));

  const getSensorData = useCallback(async (value) => {
    const query = queryString.parse(search.replace('?', ''));
    const domain = query.domain ? query.domain : 'pi-desktop';

    const api = `http://${domain}:1880`;

    const response = await fetch(`${api}/sensor/${value}`);
    const data = await response.json();

    const formatDate = (ts) => moment(ts).format('DD/MM HH:mm');

    const chartData = {
      hourly: {
        time: data.map((item) => formatDate(item.timestamp)),
        value: data.map((item) => Number(item.value))
      }
    };

    setChartData(templateChartData(chartData));
  }, []);

  useEffect(() => {
    getSensorData(value);
  }, []);

  useEffect(() => {
    getSensorData(value);
  }, [value]);

  return (
    <>
      {isLoading ? (
        <SkeletonWeatherForecastChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Weather</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField id="standard-select-currency" select value={value} onChange={(e) => setValue(e.target.value)}>
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ pl: 0 }}>
              <Chart {...chartData} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

SensorChart.propTypes = {
  isLoading: PropTypes.bool
};

export default SensorChart;
