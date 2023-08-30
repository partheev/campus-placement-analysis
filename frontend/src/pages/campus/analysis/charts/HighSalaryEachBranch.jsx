import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../ChartCard';
import PropTypes from 'prop-types';
export const HighSalaryEachBranch = ({ branches, highest_salaries }) => {
    return (
        <ChartCard>
            <ReactApexChart
                options={{
                    title: {
                        text: 'Highest Salary in Each Branch',
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
                            borderRadius: 4,
                            horizontal: true,
                        },
                    },
                    dataLabels: {
                        enabled: true,
                    },
                    xaxis: {
                        categories: branches,
                    },
                }}
                series={[
                    {
                        data: highest_salaries,
                    },
                ]}
                type='bar'
                height={350}
            />
        </ChartCard>
    );
};

HighSalaryEachBranch.propTypes = {
    branches: PropTypes.array,
    highest_salaries: PropTypes.array,
};
