import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../ChartCard';
import PropTypes from 'prop-types';

export const PlacedVsNotPlacedEachBranch = ({ data }) => {
    const branches = data.branch;
    const placed_percentages = data.is_placed_percent;
    const not_placed_percentages = data.is_not_placed_percent;
    console.log(branches, placed_percentages, not_placed_percentages);
    return (
        <ChartCard>
            <ReactApexChart
                options={{
                    title: {
                        text: 'Placed and Not Placed in Each Branch',
                        align: 'center',

                        style: {
                            fontFamily: 'var(--font-secondary)',
                        },
                    },
                    subtitle: {
                        text: 'Percentage of Students Placed and Not Placed in Each Branch ',
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
                        enabled: true,
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent'],
                    },
                    xaxis: {
                        categories: branches,
                    },
                    yaxis: {
                        title: {
                            text: 'Percentage',
                        },
                    },
                    fill: {
                        opacity: 1,
                    },
                }}
                series={[
                    { name: 'Placed', data: placed_percentages },
                    { name: 'Not Placed', data: not_placed_percentages },
                ]}
                type='bar'
                // height={350}
            />
        </ChartCard>
    );
};

PlacedVsNotPlacedEachBranch.propTypes = {
    data: PropTypes.object,
};
