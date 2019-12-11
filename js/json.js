$(function() {


//  console.log('hej')
   

var fullName= getFullName('Patrik', 'Näsström')
getTotalSales()

function getFullName(firstName, lastName){
    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstName}&lastname=${lastName}`)
    .then(response=>response.text())
    .then(data=>{
        console.log(data)
        document.getElementById("fullName").innerHTML = "Hej " + data + " ,Welcome back!";
        return data
    })
}
function getTotalSales(){
    fetch(`https://inlupp-fa.azurewebsites.net/api/total-sales`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let key1=data.currency
        let key2=data.amount
        console.log(key1)
        console.log(key2)

        document.getElementById("totalSales").innerHTML = key1 + key2;
        return data
    })

}
})