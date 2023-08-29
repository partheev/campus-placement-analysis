import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../../../components/ChartCard';
import PropTypes from 'prop-types';

export const AvgProjWithAndWithoutSkills = ({ data }) => {
    const labels = Object.keys(data);
    const values = Object.values(data);
    console.log(labels, values);
    return (
        <ChartCard>
            <ReactApexChart
                options={{
                    title: {
                        text: 'Average Number of Projects',
                        align: 'center',

                        style: {
                            fontFamily: 'var(--font-secondary)',
                        },
                    },
                    subtitle: {
                        text: 'Students with and without Web Development and Machine Learning skills',
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
                series={[{ name: 'Projects', data: values }]}
                type='bar'
                // height={350}
            />
        </ChartCard>
    );
};

AvgProjWithAndWithoutSkills.propTypes = {
    data: PropTypes.object,
};
