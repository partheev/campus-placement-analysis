import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../../../components/ChartCard';
import PropTypes from 'prop-types';
export const HighAvgLeastEachBranch = ({ data }) => {
    const categories = Object.keys(data);
    const highestSalaries = [];
    const avgSalaries = [];
    const leastSalaries = [];

    for (let i = 0; i < categories.length; i++) {
        highestSalaries.push(data[categories[i]].highest_sal);
        avgSalaries.push(data[categories[i]].average_sal);
        leastSalaries.push(data[categories[i]].least_sal);
    }
    return (
        <ChartCard>
            <ReactApexChart
                options={{
                    // xaxis: {
                    //     type: 'numeric',
                    //     title: {
                    //         text: 'Salary',
                    //         style: {
                    //             color: 'red',
                    //         },
                    //     },
                    //     position: 'bottom',
                    // },
                    yaxis: {
                        title: {
                            text: 'Branch',
                            style: {
                                fontFamily: 'var(--font-secondary)',
                            },
                        },
                    },

                    title: {
                        align: 'center',
                        text: 'Highest, Average and Least Salary for Each Branch',
                        style: {
                            fontFamily: 'var(--font-secondary)',
                        },
                    },
                    labels: ['Highest', 'Highest', 'Highest'],
                    chart: {
                        toolbar: {
                            show: false,
                        },
                        type: 'bar',
                        height: 430,
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                            dataLabels: {
                                position: 'top',
                            },
                        },
                    },
                    dataLabels: {
                        enabled: true,
                        offsetX: -6,
                        style: {
                            fontSize: '12px',
                            colors: ['#fff'],
                        },
                    },
                    stroke: {
                        show: true,
                        width: 1,
                        colors: ['#fff'],
                    },
                    tooltip: {
                        shared: true,
                        intersect: false,
                    },
                    xaxis: {
                        categories: categories,
                    },
                }}
                series={[
                    {
                        name: 'Highest',
                        data: highestSalaries,
                    },
                    {
                        name: 'Average',
                        data: avgSalaries,
                    },
                    {
                        name: 'Least',
                        data: leastSalaries,
                    },
                ]}
                type='bar'
                height={430}
            />
        </ChartCard>
    );
};

HighAvgLeastEachBranch.propTypes = {
    data: PropTypes.object,
};
