import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../../../components/ChartCard';
import PropTypes from 'prop-types';

export const ExpectedSalaryInternships = ({ data }) => {
    const labels = data.X;
    const values = data.Y;
    return (
        <ChartCard>
            <ReactApexChart
                options={{
                    chart: {
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
                        type: 'categories',
                        categories: labels,
                    },
                }}
                series={[
                    {
                        name: 'Salary',
                        type: 'column',
                        data: values,
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
