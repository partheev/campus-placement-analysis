import Chart from 'react-apexcharts'

export const CgpaTier3 = () => {
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
      tooltip: {
        x: {
          show: true,
          format: function (value) {
            return value.toFixed(2)
          },
        },
      },
    },
    series: [
      {
        name: 'CSE',
        data: [
          [9.41, 7.0],
          [9.0, 6.0],
          [8.1, 8.0],
          [8.135555555555555, 0.0],
          [8.135555555555555, 0.0],
          [8.135555555555555, 0.0],
          [8.52, 6.0],
          [8.3, 4.0],
          [8.7, 5.5],
          [6.5, 0.0],
          [6.3, 0.0],
          [7.0, 0.0],
          [6.8, 0.0],
          [9.7, 4.5],
          [8.0, 4.5],
          [8.2, 7.0],
          [8.7, 15.0],
          [8.0, 6.0],
          [8.0, 4.5],
          [8.4, 7.0],
          [7.5, 6.0],
          [9.5, 12.0],
          [8.0, 5.0],
          [9.0, 8.0],
        ],
      },
      {
        name: 'ECE',
        data: [
          [8.66, 0.0],
          [8.69, 0.0],
          [8.135555555555555, 0.0],
          [8.0, 0.0],
          [8.1, 0.0],
          [5.0, 0.0],
          [6.5, 0.0],
          [6.4, 0.0],
          [7.9, 0.0],
          [6.5, 0.0],
          [8.5, 7.0],
        ],
      },
      {
        name: 'MECH',
        data: [
          [8.0, 0.0],
          [6.91, 4.0],
          [7.3, 0.0],
          [7.0, 0.0],
          [6.5, 0.0],
          [8.2, 0.0],
          [7.0, 0.0],
          [6.5, 0.0],
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
