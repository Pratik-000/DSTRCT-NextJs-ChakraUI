// variables/charts.js

export const lineChartDataTotalSpent = [
  {
    name: "Total Patients",
    data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
  },
];

export const lineChartOptionsTotalSpent = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  markers: {
    size: 4,
  },
  tooltip: {
    y: {
      formatter: (val) => `${val} Patients`,
    },
  },
};
