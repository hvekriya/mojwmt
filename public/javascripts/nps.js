function casesBarChart() {
    $('.casesBarChart').highcharts({
      chart: {
                  type: 'bar'
              },
              title: {
                  text: 'Cases Bar Chart'
              },
              xAxis: {
                title: {
                    text: 'Organisational Unit'
                },
                  categories: ['All NPS South East and Eastern', 'Bedfordshire Cluster', 'Brighton and East Sus Cluster', 'Cambridgeshire Cluster',
                  'Court', 'Essex Cluster', 'Hertfordshire Cluster', 'Inactive LDU(N06)', 'Kent Cluster', 'Norfolk & Suffolk Cluster', 'Northamptonshire Cluster',
                  'NPS SEE Kent', 'SSPT East Sussex LDU', 'Unallocated LDU9N06']
              },
              yAxis: {
                  min: 0,
                  title: {
                      text: 'Cases'
                  }
              },
              legend: {
                  reversed: true
              },
              plotOptions: {
                  series: {
                      stacking: 'normal'
                  }
              },
              series: [{
                  color: '#ff0000',
                  name: 'Overdue Terminations',
                  data: [100, 150, 200, 170, 120, 130, 90, 80, 100, 110, 115, 99, 95, 90]
              }, {
                  color: '#0057b8',
                  name: 'UPW',
                  data: [10, 12, 10, 5, 7, 6, 8, 10, 5, 6, 5, 3, 4, 7]
              }, {
                  color: '#ffa300',
                  name: 'Active Warrants',
                  data: [12, 10, 5, 10, 6, 7, 10, 8, 5, 6, 5, 3, 4, 7]
              }, {
                  color: '#4db6b9',
                  name: 'Total Active Cases',
                  data: [1140, 1150, 1200, 350, 2250, 1200, 100, 2750, 2100, 1250, 2, 2, 1750, 100]
              }, {
                  color: '#386C98',
                  name: 'Cases (Community) < 16wks',
                  data: [100, 150, 200, 170, 120, 130, 90, 80, 100, 110, 115, 99, 95, 90]
              }]
    });
}

// line chart

function casesLineChart() {
    $('.casesLineChart').highcharts({
      title: {
          text: 'BDS-Bedford OM1 Workload (Cases)',
          x: -20 //center
      },
      xAxis: {
        title: {
            text: 'Date'
        },
          categories: ['Jan 15', 'Feb 15', 'Mar 15', 'Apr 15', 'May 15', 'Jun 15',
              'Jul 15', 'Aug 15', 'Sep 15', 'Oct 15', 'Nov 15', 'Dec 15'
          ]

      },
      yAxis: {
        title: {
            text: 'Cases'
        },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      legend: {
          reversed: true
      },
      series: [{
          name: 'Total Cases',
          color: '#386C98',
          data: [350, 352, 354, 356, 355, 354, 353, 354, 356, 360, 370, 389]
      }, {
          name: 'Ative Cases',
          color: '#4db6b9',
          data: [349, 350, 351, 352, 353, 354, 352, 353, 354, 359, 369, 388]
      }, {
          name: 'Active Warrants',
          color: '#ff0000',
          data: [98, 97, 100, 101, 99, 102, 102, 101.5, 100, 98, 99.5, 99]
      }, {
          name: 'UPW',
          color: '#0057b8',
          data: [98, 97, 100, 101, 99, 102, 102, 101.5, 100, 98, 99.5, 99]
      }, {
          name: 'Overdue Terminations',
          color: '#ffa300',
          data: [98, 97, 100, 101, 99, 102, 102, 101.5, 100, 98, 99.5, 99]
      }]
    });
}

function capacityLineChart() {
    $('.capacityLineChart').highcharts({
        title: {
            text: 'Workload (Capacity)',
            x: -20 //center
        },
        xAxis: {
          title: {
              text: 'Date'
          },
            categories: ['Jan 15', 'Feb 15', 'Mar 15', 'Apr 15', 'May 15', 'Jun 15',
                'Jul 15', 'Aug 15', 'Sep 15', 'Oct 15', 'Nov 15', 'Dec 15'
            ]

        },
        yAxis: {
          title: {
              text: 'Percentage(%)'
          },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            reversed: true
        },
        series: [{
            name: 'Reduction',
            color: '#386C98',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 22, 21.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Under Capacity',
            color: '#4db6b9',
            data: [98, 97, 95, 100, 99, 100, 102, 99, 100, 98, 100, 99]
        }, {
            name: 'Over Capacity',
            color: '#ff0000',
            data: [98, 97, 100, 101, 99, 102, 102, 101.5, 100, 98, 99.5, 99]
        }]
    });
}

// calling all functions
casesBarChart();
casesLineChart();
capacityLineChart();

$(function() {
  $("#fromDate").datepicker();
  $("#toDate").datepicker();
});

// for responsiv chart
$(window).resize(function() {
    casesBarChart();
    casesLineChart();
    capacityLineChart();
});
