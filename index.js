class Beacon {
    constructor(name){
        this._name = name
        this._description = ""
    }

    get name() {
        return this._name;
    }
    
    get description() {
        return this._description;
    }
    
    get character() {
        return this._character
    }
    
    set name(value) {
        this._name = value;
    }
    
    set description(value) {
        this._description = value;
    }

}

class Ship {
    constructor(name){
        this._name = name
        this._hull = 10
        this._fuel = 10
    }

    get name() {
        return this._name
    }
    
    get fuel() {
        return this._fuel
    }

    get hull() {
        return this._hull
    }

    set fuel(value) {
        if (value !== "number" || value < 0) {
            return "Invalid. Fuel value must be a postive number."
        }
        this._fuel = value
    }

    set hull(value) {
        if (typeof value !== "number" || value < 0) {
            return "Invalid. Hull value must be a postive number."
        }
    }
}

const StartBeacon = new Beacon("Welcome to Warp Drive");
StartBeacon.description = `>You carry with you crucial data for the survival of the federation\n
>Use your warp drive to move across the galaxy, from one beacon to the next\n
>Be wary of your fuel reserves and damage to your ships hull\n
\n
>Type 'Help' to see a list of commands`

const PirateBeacon = new Beacon("Pirates!")
PirateBeacon.description = `>As you appear at the next beacon, you see lasers chasing after a civilian ship
>They are followed by a small fighting ship, adorned with pirate colours

>Do you come to the aid of the civilians?`

function displayBeacon(beacon){
    let becaonName = beacon.name
    let beaconDescribe = beacon.description

    document.getElementById("beaconName").innerHTML = becaonName
    document.getElementById("beaconDescription").innerHTML = beaconDescribe
}

let beaconList = [PirateBeacon]

function jump(){
    let newBeacon = Math.floor(Math.random() * beaconList.length)
    return beaconList[newBeacon]
}

let currentBeacon = StartBeacon

displayBeacon(currentBeacon)


document.addEventListener("submit", function(e) {
    e.preventDefault()
    
    command = document.getElementById("userCommand").value
    
    if (command.toLowerCase() === "jump"){
        currentBeacon = jump()
        displayBeacon(currentBeacon)
    } else {
        document.getElementById("userCommand").value = ""
        document.getElementById("errorBox").innerHTML = "Not a valid command"
    }
})