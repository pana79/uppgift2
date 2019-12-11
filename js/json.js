$(function() {


    //  console.log('hej')
    

    var fullName= getFullName('Patrik', 'Näsström')
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-sales`, "totalSales")
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-purchases`, "totalPurchases")
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-orders`, "totalOrders")
    getTotalAmount(`https://inlupp-fa.azurewebsites.net/api/total-growth`, "totalGrowth")
    // getTotalPurchases()
//------------------------------- getFullName ---------------------------------------------------
    function getFullName(firstName, lastName){
        fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstName}&lastname=${lastName}`)
        .then(response=>response.text())
        .then(data=>{
            console.log(data)
            document.getElementById("fullName").innerHTML = "Hej " + data + " ,Welcome back!";
            return data
        })
    }
//------------------------------- getTotalAmount ---------------------------------------------------
    function getTotalAmount(url, id){
        // fetch(`https://inlupp-fa.azurewebsites.net/api/total-sales`)
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            // console.log(data)
            let key1=data.currency
            let key2=data.amount
            // console.log(key1)
            // console.log(key2)

            document.getElementById(id).innerHTML = key1 + key2;
            return data
        })
    }
//------------------------------- getTotalProjects ---------------------------------------------------

    // function getTotalPurchases(){
    //     fetch(`hhttps://inlupp-fa.azurewebsites.net/api/total-purchases`)
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         let key1=data.currency
    //         let key2=data.amount

    //         console.log(key1)
    //         console.log(key2)
    
    //         document.getElementById("totalProjects").innerHTML = key1 + key2;
    //         return data
    //     })
    // }
})