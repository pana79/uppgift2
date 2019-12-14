// function updateChart() {
//    // chart.data.labels=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
//     chart.data.datasets[0].data=[160, 105, 225, 140, 180, 61, 120, 60, 90]
//     chart.update();
// }
// async function getUserDataset(salesChart) {
//     try {
//         // salesChart=salesChart
//         const response = await fetch(`https://inlupp-fa.azurewebsites.net/api/total-users`)
//         const data = await response.json()
//         console.log(data)
       
//         let datasetAPI = data.dataset
//         // let key=array
//         console.log('***Dataset*****')
//         //console.log(dataset)

//         var areaData = {
//             labels: ["J", "F", "M", "A", "M", "J", "J", "A"],
//             datasets: [{
//                 data: [80, 105, 20, 140, 80, 61, 120, 60, 90],
//                 backgroundColor: [
//                     '#e0fff4'
//                 ],
//                 borderWidth: 2,
//                 borderColor: "#00c689",
//                 fill: 'origin',
//                 label: "purchases"
//             }
//             ]
//         };
//         console.log(areaData)
//         //Uppdaterar areaData med API data för labels
//         for (i = 0; i < datasetAPI.labels.length; i++) {
//             areaData.labels[i] = datasetAPI.labels[i]
//         }
//         // Uppdaterar areaData med API data för datasets data array 
//         // areaData.datasets[0].data[i] 0 i dataset då det är en array och förtsa elementet
//         for (i = 0; i < datasetAPI.data.length; i++) {
//             areaData.datasets[0].data[i] = datasetAPI.data[i]
//         }

//         console.log("API data add in areaData")
//         console.log(areaData)
//         // localStorage.setItem('areaData',areaData); 
//         // sessionStorage.setItem('areaData',areaData);

//         // result = labelsArray.reduce((r, a) => r.concat(a, ""), []);
//         // salesChart.areaData=areaData
//         // salesChart.update()
    
//         salesChart.data.datasets[0].data=areaData.datasets[0].data
//         salesChart.update();

//         return areaData
//     } catch (error) { console.log(error) }

   
// }

async function getUserDataset(salesChart) {
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

async function getValueFromAPI(){
    try{
        const response = await fetch(`https://inlupp-fa.azurewebsites.net/api/downloads`)
        const data = await response.json()      
            console.log(data[0].circleValue)
            
        return data[0].circleValue
    }
    
  
}