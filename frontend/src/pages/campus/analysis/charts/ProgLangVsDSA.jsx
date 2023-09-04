import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../../../components/ChartCard';
import PropTypes from 'prop-types';
import { ApexColourPalette } from '../../../../data/ApexChartsColourPalette';

export const ProgLangVsDSA = ({ data }) => {
    const labels = Object.keys(data);
    const values = Object.values(data);
    return (
        <ChartCard
            headingTitle={'DSA vs Programming Languages Impact'}
            subTitle={'Average Number of Programming Languagues impact on DSA'}
        >
            <ReactApexChart
                options={{
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
                            style: {
                                fontFamily: 'var(--font-secondary)',
                            },
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
                        color: ApexColourPalette[0],
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
