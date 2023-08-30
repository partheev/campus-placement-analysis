import ReactApexChart from 'react-apexcharts';
import { BoxCard } from '../../../../components/BoxCard';
import PropTypes from 'prop-types';
export const TotalStudents = ({ totalStudents }) => {
    return (
        <BoxCard
            borderColor={'rgb(249,94,128)'}
            backgroundColor='rgb(255,226,230)'
            title={'Total Students'}
            value={String(totalStudents)}
        />
    );
};
export const StudentsPlaced = ({ studentsPlaced }) => {
    return (
        <BoxCard
            backgroundColor='rgb(255,244,222)'
            borderColor={'rgb(254,157,133)'}
            title={'Students Placed'}
            value={String(studentsPlaced)}
        />
    );
};
export const StudentsNotPlaced = ({ studentsNotPlaced }) => {
    return (
        <BoxCard
            borderColor={'rgb(76,218,99)'}
            backgroundColor='rgb(220,252,231)'
            title={'Students Not Placed'}
            value={String(studentsNotPlaced)}
        />
    );
};
export const StudentsPlacedPercent = ({ studentsPlacedPercent }) => {
    return (
        <BoxCard
            borderColor={'rgb(191,130,254)'}
            title={'Placed Percentage'}
            backgroundColor='rgb(244,232,255)'
            value={String()}
        >
            <ReactApexChart
                options={{
                    chart: {
                        type: 'radialBar',
                        offsetY: -20,
                        sparkline: {
                            enabled: true,
                        },
                    },
                    plotOptions: {
                        radialBar: {
                            startAngle: -90,
                            endAngle: 90,
                            track: {
                                background: '#e7e7e7',
                                strokeWidth: '97%',
                                margin: 0, // margin is in pixels
                                dropShadow: {
                                    enabled: true,
                                    top: 2,
                                    left: 0,
                                    color: '#999',
                                    opacity: 1,
                                    blur: 2,
                                },
                            },
                            dataLabels: {
                                name: {
                                    show: false,
                                },
                                value: {
                                    color: 'rgb(47,79,79)',
                                    fontSize: '1.5rem',
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: '600',

                                    offsetY: -2,
                                },
                            },
                        },
                    },
                    grid: {
                        padding: {
                            top: -10,
                        },
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'light',
                            shadeIntensity: 0.4,
                            inverseColors: false,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 50, 53, 91],
                        },
                    },
                    labels: ['Placed Percentage'],
                }}
                series={[studentsPlacedPercent]}
                type='radialBar'
            />
        </BoxCard>
    );
};

TotalStudents.propTypes = {
    totalStudents: PropTypes.number,
};
StudentsPlaced.propTypes = {
    studentsPlaced: PropTypes.number,
};
StudentsNotPlaced.propTypes = {
    studentsNotPlaced: PropTypes.number,
};
StudentsPlacedPercent.propTypes = {
    studentsPlacedPercent: PropTypes.string,
};
