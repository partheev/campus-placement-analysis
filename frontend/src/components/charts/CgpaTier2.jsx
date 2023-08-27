import Chart from 'react-apexcharts'

export const CgpaTier2 = () => {
  const chart_data = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        // categories: [2, 3, 4, 5, 6, 7, 8, 9],
        tickAmount: 5,
        labels: {
          formatter: function (val) {
            return val.toFixed(0)
          },
          style: {
            fontSize: '16px',
          },
        },
        title: {
          text: 'CGPA',
          offsetY: -20,
          style: {
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '16px',
          },
        },
        title: {
          text: 'SALARY',
          offsetY: -20,
          style: {
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'top',
      },
    },
    series: [
      {
        name: 'CSE',
        data: [
          [9.22, 12.0],
          [8.2, 7.0],
          [8.135555555555555, 8.0],
          [8.24, 7.7],
          [9.3, 25.0],
          [9.27, 12.0],
          [8.6, 13.5],
          [9.2, 14.0],
          [9.0, 24.0],
          [9.54, 15.0],
          [9.63, 25.0],
          [8.99, 12.0],
          [9.55, 18.0],
          [8.97, 16.0],
          [9.38, 20.0],
          [7.96, 20.0],
          [8.12, 11.0],
          [9.21, 25.0],
          [9.2, 23.0],
          [7.2, 0.0],
          [7.5, 0.0],
          [6.4, 0.0],
        ],
      },
      {
        name: 'ECE',
        data: [
          [9.17, 15.0],
          [8.77, 7.0],
          [9.1, 15.0],
          [8.45, 8.0],
          [8.18, 13.0],
          [9.28, 13.0],
          [8.31, 15.0],
          [9.3, 17.0],
          [9.06, 15.0],
          [7.64, 14.0],
          [8.38, 11.0],
          [8.13, 15.0],
          [6.4, 0.0],
          [7.3, 0.0],
          [7.3, 0.0],
          [6.7, 0.0],
        ],
      },
      {
        name: 'MECH',
        data: [
          [9.6, 16.0],
          [8.27, 13.0],
          [8.3, 8.0],
          [8.8, 9.0],
          [5.5, 0.0],
          [6.7, 0.0],
          [6.1, 0.0],
          [5.4, 0.0],
        ],
      },
    ],
  }

  return (
    <div>
      <Chart
        options={chart_data.options}
        series={chart_data.series}
        type="scatter"
        width="100%"
      />
    </div>
  )
}
