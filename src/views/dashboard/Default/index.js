import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import RaspberryCard from './RaspberryCard';
import WazRssCard from './WazRssCard';
import EuroLineChartCard from './EuroLineChartCard';
import WeatherForecastChart from './WeatherForecastChart';
import G1RssCard from './G1RssCard';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <G1RssCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <WazRssCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              {/*<Grid item sm={6} xs={12} md={6} lg={12}>*/}
              {/*  <RaspberryCard isLoading={isLoading} />*/}
              {/*</Grid>*/}
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <EuroLineChartCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <WeatherForecastChart isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
