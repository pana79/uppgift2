
//------------------------------- updateChart ---------------------------------------------------

async function updateChart(salesChart,url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        let datasetAPI = data.dataset
        // console.log('***Dataset*****')
        // console.log(datasetAPI)
        salesChart.data.datasets[0].data=datasetAPI.data
        salesChart.data.labels=datasetAPI.labels
        salesChart.update();
        
    } catch (error) { console.log(error) }
}
//------------------------------- updateRevenueChart ---------------------------------------------------

async function updateRevenueChart(revenueChart,url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        let dataAPI= data
        console.log('***Dataset*****')
        console.log(data.datasets)
        revenueChart.data.datasets[0].data=dataAPI.datasets[0].data
        revenueChart.data.datasets[1].data=dataAPI.datasets[1].data
        revenueChart.data.labels=dataAPI.labels
        revenueChart.update();
        
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
//------------------------------- getTotalUsers ---------------------------------------------------

function getTotalUsers() {
    fetch(`https://inlupp-fa.azurewebsites.net/api/total-users`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
           
            let key2 = data.growth
   
        
            document.getElementById("users").innerHTML = addComma(data.users);
            document.getElementById("growth").innerHTML = "+" + key2 + "%";

        })
}
//------------------------------- getTotalProject ---------------------------------------------------

function getTotalProject() {
    fetch(`https://inlupp-fa.azurewebsites.net/api/total-projects`)
        .then(response => response.json())
        .then(data => {

        //  console.log("getTotalProject")
        //   console.log(data)

            document.getElementById("projects").innerHTML = data.projects + " %";
            document.getElementById("growth-projects").innerHTML = "+" + data.growth + "%";
          
        })
}
//------------------------------- getTotalProject ---------------------------------------------------

async function updateText(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log("updateText")
        // console.log(data)

        if(data[0].offlineAmount){
            document.getElementById("offline").innerHTML = addComma(data[0].offlineAmount);
            document.getElementById("online").innerHTML = addComma(data[1].onlineAmount);
        }
        else if(data[0].from ){
            for(let i=0;i<data.length;i++){
                document.getElementById("from"+i).innerHTML = data[i].from;
                document.getElementById("title"+i).innerHTML = data[i].title;
            }
        }
        else if(data[0].subtitle){
            for(let i=0;i<data.length;i++){
                console.log("*******")
                console.log(data[i].title)
                console.log(data[i].subtitle)
                document.getElementById("subtitle"+i).innerHTML = data[i].subtitle;
                document.getElementById("title1"+i).innerHTML = data[i].title;
            }
        }
        

    } catch (error) { console.log(error) }
}
//------------------------------- getDownloadValue---------------------------------------------------
async function getDownloadValue(bar,index){
    try{
         
        const response = await fetch(`https://inlupp-fa.azurewebsites.net/api/downloads`)
        const data = await response.json()   
        // console.log("getDownloadValue")
        //     console.log(data[index].circleValue)
            
            bar.animate(data[index].circleValue)
    }catch (error) { console.log(error) }

} 
//------------------------------- getDownloadValue---------------------------------------------------
async function updateTotalSales(){
    try{ const response= await fetch(`https://inlupp-fa.azurewebsites.net/api/total-sales-chart`)
         const data=await response.json()
        //  console.log("upateTotalSales")
        console.log(data.invoices)
         document.getElementById("revenue").innerHTML = addComma(data.revenue);
         document.getElementById("returns").innerHTML = addComma(data.returns);
         document.getElementById("queries").innerHTML = addComma(data.queries);
         document.getElementById("invoices").innerHTML = addComma(data.invoices);


    }catch (error) {console.log(error)}
}
//------------------------------- addComma---------------------------------------------------

function addComma(data){
    let dataStr = "" + data
  
    let sliceOne
    let sliceTwo 
    
    if(dataStr.length<5){
        sliceOne = dataStr.slice(1, 4)
        sliceTwo = dataStr.slice(0, 1)
    }
    else{
    sliceOne = dataStr.slice(2, 5)
    sliceTwo = dataStr.slice(0, 2)

    }

    return sliceTwo + "," + sliceOne;

}


$(function () {

    getFullName('Patrik', 'Näsström')
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-sales`, "totalSales")
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-purchases`, "totalPurchases")
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-orders`, "totalOrders")
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-growth`, "totalGrowth")
    getTotalUsers()   
    getTotalProject()
    updateText(`https://inlupp-fa.azurewebsites.net/api/downloads`)
    updateText(`https://inlupp-fa.azurewebsites.net/api/messages`)
    updateText(`https://inlupp-fa.azurewebsites.net/api/notifications`)
    getDownloadValue(`https://inlupp-fa.azurewebsites.net/api/messages`)
    updateTotalSales()
   
   
})