import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../../../components/ChartCard';
import PropTypes from 'prop-types';
import { ApexColourPalette } from '../../../../data/ApexChartsColourPalette';

export const ExpectedSalaryInternships = ({ data }) => {
    const labels = data.No_of_internships;
    const values = data.Salary;
    return (
        <ChartCard
            headingTitle={'Expected Salary based on Number of Internships'}
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
                            borderRadius: 4,
                            horizontal: false,
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    xaxis: {
                        title: {
                            style: {
                                fontFamily: 'var(--font-secondary)',
                            },
                            text: 'Number of Projects',
                        },
                        type: 'categories',
                        categories: labels,
                    },
                    yaxis: {
                        title: {
                            style: {
                                fontFamily: 'var(--font-secondary)',
                            },
                            text: 'Avg. Salary in INR LPA',
                        },
                    },
                }}
                series={[
                    {
                        name: 'Salary',
                        type: 'column',
                        data: values,
                        color: ApexColourPalette[1],
                    },
                    // {
                    //     name: 'Social Media',
                    //     type: 'line',
                    //     data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
                    // },
                ]}
                type='bar'
                // height={350}
            />
        </ChartCard>
    );
};

ExpectedSalaryInternships.propTypes = {
    data: PropTypes.object,
};
