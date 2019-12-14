//------------------------------- updateChart ---------------------------------------------------

async function updateChart(salesChart) {
    try {
        // salesChart=salesChart
        const response = await fetch(`https://inlupp-fa.azurewebsites.net/api/total-users`)
        const data = await response.json()
        // console.log(data)
    
        let datasetAPI = data.dataset
        // let key=array
        // console.log('***Dataset*****')
        // console.log(datasetAPI)

        salesChart.data.datasets[0].data=datasetAPI.data
        salesChart.data.labels=datasetAPI.labels
        salesChart.update();
        
    } catch (error) { console.log(error) }

   
}
 //------------------------------- getFullName ---------------------------------------------------
 function getFullName(firstName, lastName) {
    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstName}&lastname=${lastName}`)
        .then(response => response.text())
        .then(data => {
            // console.log(data)
            document.getElementById("fullName").innerHTML = "Hej " + data + " ,Welcome back!";
            // console.log("getFullName") //used for debugging
            return data
        })
}
//------------------------------- getTotalAmount ---------------------------------------------------
function getTotalAmount(url, id) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            let key1 = data.currency
            let key2 = data.amount
            // console.log(key1)
            // console.log(key2)

            document.getElementById(id).innerHTML = key1 + key2;
            // console.log("getAmount" + id)   //used for debugging
            return data
        })
}
//------------------------------- getTotalProjects ---------------------------------------------------

function getTotalUsers() {
    fetch(`https://inlupp-fa.azurewebsites.net/api/total-users`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            let key1 = "" + data.users
            let key2 = data.growth
            // let key3 = data.dataset
            // console.log(key1)
            let sliceOne = key1.slice(2, 5)
            let sliceTwo = key1.slice(0, 2)
            // console.log(sliceOne)
            // console.log(sliceTwo)
            // console.log(key3)

            // var labels=key3.labels
            // console.log(labels)

            // var labels=key3.labels
            // console.log(labels)

            document.getElementById("users").innerHTML = sliceTwo + "," + sliceOne;
            document.getElementById("growth").innerHTML = "+" + key2 + "%";

            // console.log("getTotalUsers") //used for debugging

            return data
        })
}

$(function () {

    getFullName('Patrik', 'Näsström')
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-sales`, "totalSales")
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-purchases`, "totalPurchases")
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-orders`, "totalOrders")
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-growth`, "totalGrowth")
    getTotalUsers()   
   
   
   
})