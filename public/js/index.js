function getCoinDeskInfo(startDate, endDate, currency) {
  axios
    .get(
      `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${currency}`
    )
    .then(response => console.log(response))
    .catch(error => console.log(error));

  /* $.ajax({
    url: `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${currency}`,
    method: "GET",
    success(response) {
      // console.log(response);
      const dataobj = JSON.parse(response);
      // console.log(dataobj);
      // console.log(dataobj.bpi);

      const data1 = [];
      const data2 = [];

      for (var property in dataobj.bpi) {
        if (!dataobj.bpi.hasOwnProperty(property)) {
          continue;
        }
        data1.push(property);
        data2.push(dataobj.bpi[property]);
      }
      // console.log(data1);
      // console.log(data2);

      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: data1,
          datasets: [
            {
              label: "# of Votes",
              data: data2,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    },
    error(err) {
      console.log(err);
    }
  }); */
}

const getData = document.getElementById("getdata");
getData.addEventListener("click", () => {
  const sDate = document.getElementById("startDate").value;
  const eDate = document.getElementById("endDate").value;
  const currId = document.getElementById("curr");
  const currency = currId.options[currId.selectedIndex].text;
  console.log("currency: ", currency);
  console.log("sDate: ", sDate);
  console.log("eDate: ", eDate);
  getCoinDeskInfo(sDate, eDate, currency);
});
