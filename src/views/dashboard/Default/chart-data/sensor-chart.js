import chartTheme from './chart-theme';

const chartData = (sensorData, label, theme) => {
  const values = sensorData?.hourly?.value || [];

  const min = Math.min(...values) - 1;
  const max = Math.max(...values) + 1;
  const base = chartTheme(theme);

  return {
    height: 380,
    type: 'area',
    options: {
      ...base,
      chart: {
        ...base.chart,
        id: 'sensor-chart',
        toolbar: { show: true }
      },
      colors: [theme.palette.success.dark],
      fill: {
        type: 'gradient',
        gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 100] }
      },
      xaxis: {
        type: 'category',
        categories: sensorData?.hourly?.time,
        tickAmount: 12,
        labels: { rotate: -45, hideOverlappingLabels: true }
      },
      yaxis: {
        min,
        max,
        decimalsInFloat: 1,
        title: {
          text: 'Valor do sensor'
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      dataLabels: {
        enabled: false
      }
    },
    series: [
      {
        name: label,
        data: values
      }
    ]
  };
};

export default chartData;
