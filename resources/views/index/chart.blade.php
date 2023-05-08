
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
      .chartMenu {
        width: 100vw;
        height: 40px;
        background: #1A1A1A;
        color: rgba(255, 26, 104, 1);
      }
      .chartMenu p {
        padding: 10px;
        font-size: 20px;
      }
      .chartCard {
        width: 100vw;
        height: calc(100vh - 40px);
        background: rgba(255, 26, 104, 0.2);
        display: flex;
        align-items: center;
        justify-content: left;
      }
      .chartBox {
        width: 700px;
        padding: 20px;
        border-radius: 20px;
        border: solid 3px rgba(255, 26, 104, 1);
        background: white;
      }
    </style>
  </head>
  <body>
      
    <div class="chartCard">
                        <div class="chartBox">
                          <canvas id="myChart"></canvas>
                          <input onchange="filterData()" type="date" id="startdate" value="2021-05-01">
                          <input onchange="filterData()" type="date" id="enddate" value="2021-12-01">
                        </div>
                      </div>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // const dates = ['2021-05-01', '2021-06-01', '2021-07-01', '2021-08-01', 
        // '2021-09-01', '2021-10-01'];
        const dates = ['2021-05-01', '2021-06-01', '2021-07-01', '2021-08-01', 
        '2021-09-01', '2021-10-01', '2021-11-01', '2021-12-01'];
        const datapoints = [2, 1, 1, 2, 0, 1, 0, 1];
        const data = {
        labels: dates,
        datasets: [{
            label: 'Montly Animal Adoption',
            data: datapoints,
            backgroundColor: [
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))',
            'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))',
            'rgba(135, 135, 105, 0.8))'
            ],
            borderWidth: 1
        }]
        };

        // config 
        const config = {
        type: 'bar',
        data,
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        };

        // render init block
        const myChart = new Chart(
        document.getElementById('myChart'),
        config
        );

        function filterData(){
            const dates2 = [...dates];
            console.log(dates2);

            const startdate = document.getElementById('startdate');
            const enddate = document.getElementById('enddate');
        
            const indexstartdate = dates2.indexOf(startdate.value);
            const indexenddate = dates2.indexOf(enddate.value);
            // console.log(indexstartdate);
            
            const filterDate = dates2.slice(indexstartdate, indexenddate + 1); 

            myChart.config.data.labels = filterDate;

            const datapoints2 =  [...datapoints];
            const filterDatapoints = datapoints2.slice(indexstartdate, indexenddate + 1);
            
            myChart.config.data.datasets[0].data = filterDatapoints;

            myChart.update();
        }
    </script>

  </body>
</html>