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

