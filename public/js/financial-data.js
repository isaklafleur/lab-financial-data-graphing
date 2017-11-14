function getCoinDeskInfo(startDate, endDate, currency) {
  axios
    .get(
      `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${currency}`
    )
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

const getData = document.getElementById("getdata");
getData.addEventListener("click", () => {
  const sDate = document.getElementById("startDate").value;
  const eDate = document.getElementById("endDate").value;
  const currId = document.getElementById("curr");
  const currency = currId.options[currId.selectedIndex].text;
  getCoinDeskInfo(sDate, eDate, currency);
});
