// material-ui
import { Grid } from '@mui/material';

// project imports
// import RaspberryCard from './RaspberryCard';
import RssCard from './RssCard';
import EuroLineChartCard from './EuroLineChartCard';
import WeatherForecastChart from './WeatherForecastChart';
import SensorChart from './SensorChart';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => (
  <Grid container spacing={gridSpacing}>
    <Grid item lg={4} md={6} xs={12}>
      <RssCard title="G1" url="https://g1.globo.com/rss/g1/" />
    </Grid>
    <Grid item lg={4} md={6} xs={12}>
      <RssCard title="Waz Online" url="https://www.waz-online.de/arc/outboundfeeds/rss/" />
    </Grid>
    <Grid item lg={4} xs={12}>
      <Grid container spacing={gridSpacing}>
        {/*<Grid item sm={6} xs={12} lg={12}>*/}
        {/*  <RaspberryCard />*/}
        {/*</Grid>*/}
        <Grid item sm={6} xs={12} lg={12}>
          <EuroLineChartCard />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <WeatherForecastChart />
    </Grid>
    <Grid item xs={12}>
      <SensorChart />
    </Grid>
  </Grid>
);

export default Dashboard;
