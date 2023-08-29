import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../ChartCard';
import PropTypes from 'prop-types';

export const ProgLangVsDSA = ({ data }) => {
    const labels = Object.keys(data);
    const values = Object.values(data);
    console.log(labels, values);
    return (
        <ChartCard>
            <ReactApexChart
                options={{
                    subtitle: {
                        text: 'Average Number of Programming Languagues impact on DSA',
                        align: 'center',

                        style: {
                            fontFamily: 'var(--font-secondary)',
                        },
                    },
                    title: {
                        text: 'DSA vs Programming Languages Impact',
                        align: 'center',

                        style: {
                            fontFamily: 'var(--font-secondary)',
                        },
                    },

                    chart: {
                        toolbar: {
                            show: false,
                        },
                        type: 'bar',
                        height: 350,
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '55%',
                            endingShape: 'rounded',
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent'],
                    },
                    xaxis: {
                        categories: labels,
                    },
                    yaxis: {
                        title: {
                            text: 'Projects',
                        },
                    },
                    fill: {
                        opacity: 1,
                    },
                }}
                series={[
                    {
                        name: 'Avg. Number of Programming Languages',
                        data: values,
                    },
                ]}
                type='bar'
                // height={350}
            />
        </ChartCard>
    );
};

ProgLangVsDSA.propTypes = {
    data: PropTypes.object,
};
