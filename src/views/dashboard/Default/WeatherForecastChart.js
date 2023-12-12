import PropTypes from 'prop-types';
import {useCallback, useEffect, useState} from "react";

// material-ui
import {Grid, MenuItem, TextField, Typography} from '@mui/material';

// third-party
import Chart from 'react-apexcharts';
import {fetchWeatherApi} from 'openmeteo';
import moment from "moment";

// project imports
import SkeletonWeatherForecastChart from 'ui-component/cards/Skeleton/WeatherForecastChart';
import MainCard from 'ui-component/cards/MainCard';
import {gridSpacing} from 'store/constant';

// chart data
import templateChartData from './chart-data/weather-forecast-chart';

const status = [
    {
        value: 'wolfsburg',
        options: {
            "latitude": 52.4245,
            "longitude": 10.7815,
            "timezone": "Europe/Berlin",
        },
        label: 'Wolfsburg'
    },
    {
        value: 'sorocaba',
        options: {
            "latitude": -23.5017,
            "longitude": -47.4581,
            "timezone": "America/Sao_Paulo",
        },
        label: 'Sorocaba'
    }
];

// ==============================|| DASHBOARD DEFAULT - WEATHER FORECAST CHART ||============================== //

const WeatherForecastChart = ({isLoading}) => {
    const [value, setValue] = useState('wolfsburg');
    const [chartData, setChartData] = useState(templateChartData(undefined));

    const getWeatherData = useCallback(async (value) => {
        const params = {
            ...status.filter((d) => d.value === value)[0].options,
            "hourly": ["temperature_2m", "apparent_temperature", "precipitation_probability", "precipitation"],
            "forecast_days": 3
        };
        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);
        const range = (start, stop, step) => Array.from({length: (stop - start) / step}, (_, i) => start + i * step);
        const formatDate = (ts) => {
            return moment.unix(ts + utcOffsetSeconds).format("DD/MM HH:mm");
        }

        const response = responses[0];
        const utcOffsetSeconds = response.utcOffsetSeconds();
        const hourly = response.hourly();
        const weatherData = {
            hourly: {
                time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval())
                    .map((ts) => formatDate(ts)),
                temperature2m: hourly.variables(0).valuesArray().map(Math.round),
                apparentTemperature: hourly.variables(1).valuesArray().map(Math.round),
                precipitationProbability: hourly.variables(2).valuesArray(),
                precipitation: hourly.variables(3).valuesArray().map(Math.round),
            }
        };

        setChartData(templateChartData(weatherData));
    }, []);

    useEffect(() => {
        getWeatherData(value);
    }, []);

    useEffect(() => {
        getWeatherData(value);
    }, [value]);

    return (
        <>
            {isLoading ? (
                <SkeletonWeatherForecastChart/>
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
                                    <TextField id="standard-select-currency" select value={value}
                                               onChange={(e) => setValue(e.target.value)}>
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Chart {...chartData} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

WeatherForecastChart.propTypes = {
    isLoading: PropTypes.bool
};

export default WeatherForecastChart;
