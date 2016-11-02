function casesBarChart() {
    $('.casesBarChart').highcharts({
      chart: {
                  type: 'bar'
              },
              title: {
                  text: 'Cases (Bar Chart)'
              },
              xAxis: {
                title: {
                    text: 'Cases'
                },
                  categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
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
                  name: 'John',
                  data: [5, 3, 4, 7, 2]
              }, {
                  name: 'Jane',
                  data: [2, 2, 3, 2, 1]
              }, {
                  name: 'Joe',
                  data: [3, 4, 4, 2, 5]
              }]
    });
}

// line chart

function casesLineChart() {
    $('.casesLineChart').highcharts({
        title: {
            text: 'Cases (Line Chart)',
            x: -20 //center
        },
        xAxis: {
          title: {
              text: 'Months'
          },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
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
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Auto Approved',
            color: '#386C98',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Manually Approved',
            color: '#424E5D',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
}

function capacityLineChart() {
    $('.capacityLineChart').highcharts({
        title: {
            text: 'Capacity (Line Chart)',
            x: -20 //center
        },
        xAxis: {
          title: {
              text: 'Months'
          },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
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
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Auto Approved',
            color: '#386C98',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Manually Approved',
            color: '#424E5D',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
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
