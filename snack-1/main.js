//array di oggetti bici 
const bikes = [
    {
        name: "Peppe",
        weight: 10
    }, {
        name: "Marinello",
        weight: 7
    }, {
        name: "Ginetta",
        weight: 6.4
    }
]

/**
 * funzione per visualizzare il nome della bici con minor peso
 * @param {Array} bikesArray array contenente oggetti di tipo bici
 * @return {Object} bici che pesa meno
 */
function lightBike(bikesArray) {
    let lightBike = bikesArray[0];
    for (let i = 1; i < bikesArray.length; i++) {
        if (bikesArray[i].weight < lightBike.weight)
            lightBike = bikesArray[i];
        
    }
    return lightBike;
}

const winner = lightBike(bikes);

console.log(`la bici che pesa meno è ${winner.name} con un peso di ${winner.weight} kg`);