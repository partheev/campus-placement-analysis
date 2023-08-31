import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../../../components/ChartCard';
import PropTypes from 'prop-types';

export const PlacedVsNotPlacedEachBranch = ({ data }) => {
    const branches = data.branch;
    const placed_percentages = data.is_placed_percent;
    const not_placed_percentages = data.is_not_placed_percent;
    return (
        <ChartCard
            headingTitle={'Placed and Not Placed in Each Branch'}
            subTitle={
                'Percentage of Students Placed and Not Placed in Each Branch'
            }
        >
            <ReactApexChart
                options={{
                    chart: {
                        toolbar: {
                            show: false,
                        },
                        type: 'bar',
                        // height: 350,
                        // height: '100%',
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
                        title: {
                            style: {
                                fontFamily: 'var(--font-secondary)',
                            },
                            text: 'Branch',
                        },
                        categories: branches,
                    },
                    yaxis: {
                        title: {
                            style: {
                                fontFamily: 'var(--font-secondary)',
                            },
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
                height={'90%'}
            />
        </ChartCard>
    );
};

PlacedVsNotPlacedEachBranch.propTypes = {
    data: PropTypes.object,
};
