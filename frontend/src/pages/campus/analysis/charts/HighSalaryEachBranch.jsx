import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../../../components/ChartCard';
import PropTypes from 'prop-types';
import { ApexColourPalette } from '../../../../data/ApexChartsColourPalette';
export const HighSalaryEachBranch = ({ branches, highest_salaries }) => {
    return (
        <ChartCard>
            <ReactApexChart
                options={{
                    yaxis: {
                        title: {
                            text: 'Branch',
                            style: {
                                fontFamily: 'var(--font-secondary)',
                            },
                        },
                    },
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
                        title: {
                            style: {
                                fontFamily: 'var(--font-secondary)',
                            },
                            text: 'Salary',
                        },
                        categories: branches,
                    },
                }}
                series={[
                    {
                        name: 'Salary',
                        data: highest_salaries,
                        color: ApexColourPalette[5],
                    },
                ]}
                type='bar'
                height={'100%'}
            />
        </ChartCard>
    );
};

HighSalaryEachBranch.propTypes = {
    branches: PropTypes.array,
    highest_salaries: PropTypes.array,
};
