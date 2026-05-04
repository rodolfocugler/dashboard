const chartData = (sensorData) => {
  const values = sensorData?.hourly?.value || [];

  const min = Math.min(...values) - 1;
  const max = Math.max(...values) + 1;

  return {
    height: 480,
    type: 'line',
    options: {
      chart: {
        id: 'sensor-chart',
        toolbar: { show: true }
      },
      xaxis: {
        type: 'category',
        categories: sensorData?.hourly?.time
      },
      yaxis: {
        min,
        max,
        title: {
          text: 'Valor do sensor'
        }
      },
      stroke: {
        width: 2
      },
      dataLabels: {
        enabled: false
      }
    },
    series: [
      {
        name: 'Jardim',
        type: 'line',
        data: values
      }
    ]
  };
};

export default chartData;
