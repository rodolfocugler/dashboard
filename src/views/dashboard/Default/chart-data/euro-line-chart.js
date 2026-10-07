// ===========================|| DASHBOARD - TOTAL ORDER MONTH CHART ||=========================== //

const chartData = (data) => {
  const min = Math.min(...data) - 0.05;
  const max = Math.max(...data) + 0.05;
  return {
    type: 'line',
    height: 90,
    options: {
      chart: {
        background: 'transparent',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#fff'],
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      yaxis: {
        min: min,
        max: max,
        show: false
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: 'Value',
          show: false
        },
        marker: {
          show: false
        }
      }
    },
    series: [
      {
        name: 'Euro - Real',
        data: data
      }
    ]
  };
};

export default chartData;
