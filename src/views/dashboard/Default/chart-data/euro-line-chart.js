// ===========================|| DASHBOARD - TOTAL ORDER MONTH CHART ||=========================== //

const chartData = (data) => {
    const min = Math.min.apply(Math, data) - 0.3;
    const max = Math.min.apply(Math, data) + 0.3;
    return {
        type: 'line',
        height: 90,
        options: {
            chart: {
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
    }
};

export default chartData;
