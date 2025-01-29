import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'; // material-ui
import { CardContent, Divider, Grid, Typography } from '@mui/material'; // project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

import { extract } from '@extractus/feed-extractor';
import moment from 'moment/moment';
import queryString from 'querystring';
import { useLocation } from 'react-router';

// ==============================|| DASHBOARD DEFAULT - WAZ RSS CARD ||============================== //

const WazRssCard = ({ isLoading }) => {
  const [rssEntries, setRssEntries] = useState([]);
  const { search } = useLocation();

  const getRssData = async () => {
    const query = queryString.parse(search.replace('?', ''));
    const domain = query.domain ? query.domain : 'pi-desktop';

    const CORS_PROXY = `http://${domain}:3005/`;

    const result = await extract(CORS_PROXY + 'https://www.waz-online.de/arc/outboundfeeds/rss/');
    setRssEntries(result.entries);
  };

  useEffect(() => {
    getRssData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing} sx={{ height: 400, overflowX: 'hidden' }}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">Waz Online</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: '16px !important' }}></Grid>
              {rssEntries.map((rss) => (
                <>
                  <Grid item xs={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          {rss.title}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          {rss.description} <a href={rss.link}>link</a>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">{moment(rss.published)?.format('DD/MM HH:mm')}</Typography>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: 1.5 }} />
                  </Grid>
                </>
              ))}
            </Grid>
          </CardContent>
        </MainCard>
      )}
    </>
  );
};

WazRssCard.propTypes = {
  isLoading: PropTypes.bool
};

export default WazRssCard;
