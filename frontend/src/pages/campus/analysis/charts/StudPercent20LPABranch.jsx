import ReactApexChart from 'react-apexcharts';
import { ChartCard } from '../../../../components/ChartCard';
import PropTypes from 'prop-types';
export const StudPercent20LPABranch = ({ data }) => {
    return (
        <ChartCard
            headingTitle={
                'Percentage of Students with Salary > 20 LPA by Branch'
            }
        >
            <ReactApexChart
                options={{
                    chart: {
                        // width: 380,
                        type: 'pie',
                    },
                    labels: data.labels,
                    // responsive: [
                    //     {
                    //         breakpoint: 480,
                    //         options: {
                    //             chart: {
                    //                 width: 200,
                    //             },
                    //             legend: {
                    //                 position: 'bottom',
                    //             },
                    //         },
                    //     },
                    // ],
                }}
                series={data.values}
                type='pie'
                // width={380}
            />
        </ChartCard>
    );
};

StudPercent20LPABranch.propTypes = {
    data: PropTypes.object,
};
