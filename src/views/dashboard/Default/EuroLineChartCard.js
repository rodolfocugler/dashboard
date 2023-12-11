import PropTypes from 'prop-types';

// material-ui
import {useTheme, styled} from '@mui/material/styles';
import {Box, Grid, Typography} from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonCard from 'ui-component/cards/Skeleton/SkeletonCard';

import templateChartData from './chart-data/euro-line-chart';

// assets
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const CardWrapper = styled(MainCard)(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
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
        background: theme.palette.primary[800],
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
        background: theme.palette.primary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ==============================|| DASHBOARD - EURO LINE CHART CARD ||============================== //

const EuroLineChartCard = ({isLoading}) => {
    const theme = useTheme();
    const [euroValue, setEuroValue] = useState("");
    const [chartData, setChartData] = useState(templateChartData([]));

    const getChartData = useCallback(async () => {
        try {
            const dailyResponse = await axios.get(`https://economia.awesomeapi.com.br/json/daily/EUR-BRL/10`);
            const lastResponse = await axios.get(`https://economia.awesomeapi.com.br/last/EUR-BRL`);
            const response = dailyResponse.data.reverse();
            response.push(lastResponse.data.EURBRL);
            let lastValue = -1;
            const data = [];
            for (let i = 0; i < response.length; i++) {
                const value = Math.round((parseFloat(response[i].bid) + Number.EPSILON) * 100) / 100;
                if (lastValue !== value) {
                    data.push(value);
                    lastValue = value;
                }
            }
            setChartData(templateChartData(data));
            setEuroValue(parseFloat(lastResponse.data.EURBRL.bid).toFixed(2));
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getChartData();
    }, []);

    return (
        <>
            {isLoading ? (
                <SkeletonCard/>
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{p: 2.25}}>
                        <Grid container direction="column">
                            <Grid item sx={{mb: 0.75}}>
                                <Grid container alignItems="center" sx={{height: "124px"}}>
                                    <Grid item xs={6} display="flex" justifyContent="space-between" sx={{height: "100%"}}>
                                        <Grid container alignItems="center">
                                            <Grid item>
                                                <Typography sx={{
                                                    fontSize: '2.125rem',
                                                    fontWeight: 500,
                                                    mr: 1,
                                                    mt: 1.75,
                                                    mb: 0.75
                                                }}>R$ {euroValue}</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography
                                                    sx={{
                                                        fontSize: '1rem',
                                                        fontWeight: 500,
                                                        color: theme.palette.primary[200]
                                                    }}
                                                >
                                                    Euro Real
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} sx={{height: "100%"}} alignItems="center" display="flex">
                                        <Chart {...chartData} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

EuroLineChartCard.propTypes = {
    isLoading: PropTypes.bool
};

export default EuroLineChartCard;
