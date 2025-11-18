//array di oggetti squadra di calcio 
const teams = [
    {
        name: "Mariettina",
        points: 0,
        faults: 0
    }, {
        name: "Norina",
        points: 0,
        faults: 0
    }, {
        name: "Frapappappo",
        points: 0,
        faults: 0
    }
]

function randomMinMax(min, max) {
    
    return Math.floor(Math.random() * (max - min) ) + min;
}

for (let i = 0; i < teams.length; i++) {
    teams[i].points = randomMinMax(0, 100);
    teams[i].faults = randomMinMax(0, 100);
}

const teamsNames = [];
for (let i = 0; i < teams.length; i++) {
    teamsNames.push(teams[i].name);
    console.log(`La squadra in posizione ${i} nell'array teamsNames è ${teamsNames[i]}`);
}

/**
 * funzione che aggiunge un nuovo team
 * @param {array} teams array a cui aggiungere il nuovo team
 * @param {string} name nome della squadra
 * @param {number} fault numero di falli della squadra
 */
function add(teams, name, fault) {
    teams.push({ name: name, points: 0, faults: fault });
}

add(teams, "Vincenzella", randomMinMax(0, 100));