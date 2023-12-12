// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const chartData = (weatherData) => {
    const min = Math.min(Math.min.apply(Math, weatherData?.hourly?.temperature2m), Math.min.apply(Math, weatherData?.hourly?.apparentTemperature)) - 3;
    const max = Math.max(Math.max.apply(Math, weatherData?.hourly?.temperature2m), Math.max.apply(Math, weatherData?.hourly?.apparentTemperature)) + 3;

    return {
        height: 480,
        type: 'line',
        options: {
            chart: {
                id: 'bar-chart',
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
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }
            ],
            stroke: {
                dashArray: [0, 0, 2],
                width: [1.5, 1.5, 1]
            },
            xaxis: {
                type: 'category',
                categories: weatherData?.hourly?.time,
                tickAmount: weatherData?.hourly?.time.length / 4
            },
            legend: {
                show: true,
                fontSize: '14px',
                fontFamily: `'Roboto', sans-serif`,
                position: 'bottom',
                offsetX: 20,
                labels: {
                    useSeriesColors: false
                },
                markers: {
                    width: 16,
                    height: 16,
                    radius: 5
                },
                itemMargin: {
                    horizontal: 15,
                    vertical: 8
                }
            },
            fill: {
                type: 'solid'
            },
            dataLabels: {
                enabled: false
            },
            grid: {
                show: true
            },
            yaxis: [{
                seriesName: 'Temperature',
                min: min,
                max: max,
                title: {
                    text: '°C'
                }
            }, {
                seriesName: 'Apparent Temperature',
                show: false,
                min: min,
                max: max,
            }, {
                seriesName: 'Precipitation Probability',
                opposite: true,
                min: 0,
                max: 100,
                title: {
                    text: '%'
                }
            }, {
                seriesName: 'Precipitation',
                show: true,
                title: {
                    text: 'ml'
                },
                min: 0,
                max: 5
            }]
        },
        series: [{
            name: 'Temperature',
            type: 'line',
            data: weatherData?.hourly?.temperature2m
        }, {
            name: 'Apparent Temperature',
            type: 'line',
            data: weatherData?.hourly?.apparentTemperature
        }, {
            name: 'Precipitation Probability',
            type: 'line',
            data: weatherData?.hourly?.precipitationProbability
        }, {
            name: 'Precipitation',
            type: 'column',
            data: weatherData?.hourly?.precipitation
        }]
    };
}

export default chartData;
