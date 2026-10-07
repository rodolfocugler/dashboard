import chartTheme from './chart-theme';

// ===========================|| DASHBOARD - WEATHER FORECAST CHART ||=========================== //

const chartData = (weatherData, theme) => {
  const { hourly } = weatherData;
  const temps = [...hourly.temperature2m, ...hourly.apparentTemperature];
  const min = Math.min(...temps) - 3;
  const max = Math.max(...temps) + 3;
  const base = chartTheme(theme);

  return {
    height: 420,
    type: 'line',
    options: {
      ...base,
      chart: {
        ...base.chart,
        id: 'weather-chart',
        stacked: false,
        toolbar: {
          show: true,
          tools: {
            reset: false,
            pan: false,
            download: false
          }
        },
        zoom: {
          enabled: true
        }
      },
      colors: [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.orange.dark, theme.palette.primary[200]],
      stroke: {
        curve: 'smooth',
        dashArray: [0, 4, 0, 0],
        width: [3, 2, 1.5, 0]
      },
      xaxis: {
        type: 'category',
        categories: hourly.time,
        tickAmount: Math.ceil(hourly.time.length / 4),
        labels: { rotate: -45, hideOverlappingLabels: true }
      },
      legend: {
        show: true,
        fontSize: '13px',
        position: 'bottom',
        markers: { size: 6 },
        itemMargin: {
          horizontal: 12,
          vertical: 8
        }
      },
      fill: {
        type: 'solid',
        opacity: [1, 1, 1, 0.6]
      },
      plotOptions: {
        bar: { columnWidth: '60%', borderRadius: 2 }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: [
        {
          seriesName: 'Temperature',
          min,
          max,
          decimalsInFloat: 0,
          title: { text: '°C' }
        },
        {
          seriesName: 'Temperature',
          show: false
        },
        {
          seriesName: 'Rain probability',
          opposite: true,
          min: 0,
          max: 100,
          decimalsInFloat: 0,
          title: { text: '%' }
        },
        {
          seriesName: 'Precipitation',
          opposite: true,
          min: 0,
          max: 5,
          title: { text: 'mm' }
        }
      ]
    },
    series: [
      {
        name: 'Temperature',
        type: 'line',
        data: hourly.temperature2m
      },
      {
        name: 'Feels like',
        type: 'line',
        data: hourly.apparentTemperature
      },
      {
        name: 'Rain probability',
        type: 'line',
        data: hourly.precipitationProbability
      },
      {
        name: 'Precipitation',
        type: 'column',
        data: hourly.precipitation
      }
    ]
  };
};

export default chartData;
