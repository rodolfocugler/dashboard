import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { Box, Chip, Divider, Link, Skeleton, Typography } from '@mui/material';

// third-party
import { extract } from '@extractus/feed-extractor';
import moment from 'moment';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import CardTitle from 'ui-component/cards/CardTitle';
import useDomain, { localFetch } from 'hooks/useDomain';

// assets
import { IconRss } from '@tabler/icons';

const LIST_HEIGHT = 420;

// ==============================|| DASHBOARD DEFAULT - RSS CARD ||============================== //

const RssCard = ({ title, url }) => {
  const domain = useDomain();
  const [entries, setEntries] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // the feeds don't send CORS headers, so they go through the proxy on the home server
    extract(`http://${domain}:3005/${url}`, {}, localFetch)
      .then((result) => setEntries(result.entries))
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [domain, url]);

  return (
    <MainCard
      content={false}
      title={<CardTitle icon={IconRss} title={title} subtitle="Latest news" color="secondary" />}
      secondary={entries && <Chip label={entries.length} size="small" color="secondary" variant="outlined" />}
      sx={{ height: '100%' }}
    >
      <Box sx={{ height: LIST_HEIGHT, overflowY: 'auto', px: 1 }}>
        {error && (
          <Typography variant="body2" sx={{ p: 2 }}>
            Couldn&apos;t load the feed.
          </Typography>
        )}

        {!entries &&
          !error &&
          [0, 1, 2, 3].map((i) => (
            <Box key={i} sx={{ p: 1.5 }}>
              <Skeleton width="85%" />
              <Skeleton width="60%" />
              <Skeleton width="25%" height={14} />
            </Box>
          ))}

        {entries?.map((entry, i) => (
          <Box key={entry.id || entry.link || i}>
            {i > 0 && <Divider sx={{ mx: 1.5 }} />}
            <Link
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
              sx={{
                display: 'block',
                p: 1.5,
                my: 0.5,
                borderRadius: 2,
                transition: 'background-color .15s ease-in-out',
                '&:hover': { bgcolor: 'action.hover' },
                '&:hover .rss-title': { color: 'secondary.main' }
              }}
            >
              <Typography className="rss-title" variant="subtitle1" sx={{ mb: 0.5, transition: 'color .15s ease-in-out' }}>
                {entry.title}
              </Typography>
              {entry.description && (
                <Typography
                  variant="body2"
                  sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', mb: 0.75 }}
                >
                  {entry.description}
                </Typography>
              )}
              <Typography variant="caption" title={moment(entry.published).format('DD/MM/YYYY HH:mm')}>
                {moment(entry.published).fromNow()}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </MainCard>
  );
};

RssCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default RssCard;
