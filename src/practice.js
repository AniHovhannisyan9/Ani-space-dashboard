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

const asteroids = [
    {name: "2024 AB1", diametr: 120, hazardous: false},
    {name: "2024 CD2", diametr:  45, hazardous: true},
    {name: "2024 EF3", diametr: 890, hazardous: false},
    {name: "2024 GH4", diametr: 23, hazardous: true}
]

const names = asteroids.map(asteroid => asteroid.name)
console.log("",names);

const hazardousOnes= asteroids.filter(asteroid => asteroid.hazardous)
console.log("",hazardousOnes);

const firstTwo = asteroids.slice(0,2);
console.log("", firstTwo);

const hazardousNames = asteroids
  .filter(asteroid => asteroid.hazardous)
  .map(asteroid => asteroid.name);

  console.log("hazardousNames");