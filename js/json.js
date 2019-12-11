$(function() {


//  console.log('hej')
   

var fullName= getFullName('Patrik', 'Näsström')

function getFullName(firstName, lastName){
    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstName}&lastname=${lastName}`)
    .then(response=>response.text())
    .then(data=>{
        // console.log(data)
        document.getElementById("fullName").innerHTML = "Hej " + data + " ,Welcome back!";
        return data
    })
}
function getTotalSales(){
    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstName}&lastname=${lastName}`)
    .then(response=>response.text())
    .then(data=>{
        return data
    })

}
})