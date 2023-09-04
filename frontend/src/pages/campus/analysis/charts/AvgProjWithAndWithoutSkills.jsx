import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../../../components/ChartCard';
import PropTypes from 'prop-types';
import { ApexColourPalette } from '../../../../data/ApexChartsColourPalette';

export const AvgProjWithAndWithoutSkills = ({ data }) => {
    const labels = Object.keys(data);
    const values = Object.values(data);
    console.log(labels);
    console.log(values);
    return (
        <ChartCard
            subTitle={
                'Students with and without Web Development and Machine Learning skills'
            }
            headingTitle={'Average Number of Projects'}
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
                    colors: [],
                }}
                series={[
                    {
                        name: 'Projects',
                        data: values,
                        color: ApexColourPalette[2],
                    },
                ]}
                type='bar'

                // height={350}
            />
        </ChartCard>
    );
};

AvgProjWithAndWithoutSkills.propTypes = {
    data: PropTypes.object,
};
