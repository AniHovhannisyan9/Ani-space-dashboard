const name = "Ani" 
let count = 0

console.log(name)
console.log(count)

count = count + 1
console.log(count)

//Traditional
function formatCoord(coord) {
    return parseFloat(coord).toFixed(2) * 0.621
}


console.log(formatCoord("408"))

function dascribeAstronaut(name,craft){
    return `${name} is currently aboard the ${craft}`
}
console.log(dascribeAstronaut("Alice","ISS"))





const issPosition = {
   latitude: "51.5074 N",
   longitude: "0.1278 W"
}

console.log(issPosition.latitude)
console.log(issPosition.longitude)



