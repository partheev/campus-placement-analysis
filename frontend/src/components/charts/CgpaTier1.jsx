import Chart from 'react-apexcharts'

export const CgpaTier1 = () => {
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
          [8.135555555555555, 30.0],
          [8.135555555555555, 15.0],
          [8.135555555555555, 22.0],
          [9.59, 14.0],
          [8.135555555555555, 11.0],
          [8.31, 18.0],
          [8.1, 14.0],
          [8.9, 37.0],
          [7.7, 13.0],
          [9.52, 25.0],
          [8.5, 19.5],
          [9.3, 21.0],
          [8.4, 17.0],
          [8.7, 29.0],
          [8.8, 20.0],
          [8.2, 30.0],
          [8.5, 14.0],
          [9.5, 30.0],
          [8.9, 40.0],
          [9.24, 12.0],
          [9.2, 30.0],
          [9.38, 18.0],
          [5.0, 0.0],
        ],
      },
      {
        name: 'ECE',
        data: [
          [9.66, 18.0],
          [8.99, 17.0],
          [7.56, 22.0],
          [9.02, 14.0],
          [9.15, 15.0],
          [7.9, 16.0],
          [8.41, 24.0],
          [8.12, 12.0],
          [9.25, 40.0],
          [8.27, 24.0],
          [8.5, 8.0],
          [6.5, 0.0],
        ],
      },
      {
        name: 'MECH',
        data: [
          [8.39, 7.0],
          [8.8, 18.0],
          [8.1, 19.0],
          [8.8, 7.0],
          [5.4, 0.0],
          [6.5, 0.0],
          [5.3, 0.0],
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
