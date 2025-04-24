class Beacon {
    constructor(name){
        this._name = name
        this._description = ""
        this._event = ""
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

    get event() {
        return this._event
    }
    
    set name(value) {
        this._name = value
    }
    
    set description(value) {
        this._description = value
    }
    
    set event (value) {
        this._event = value
    }

}

class Event {
    constructor(){
        this._fightWin = ""
        this._fightLoss = ""
        this._fightChance = 0
        this._talkWin = ""
        this._talkLoss = ""
        this._talkChance = 0
    }

    set fightw(value) {
        this._fightWin = value
    }

    set talkw(value) {
        this._talkWin = value
    }    

    set fightl(value){
        this._fightLoss = value
    }

    set fightc(value){
        this._fightChance = value
    }

    set talkl(value){
        this._talkLoss = value
    }

    set talkc(value){
        this._talkChance = value
    }
    
    get talkw() {
        return this._talkWin
    }

    get winf() {
        return this._fightWin
    }

    get talkl(){
        return this._talkLoss
    }

    get fightl(){
        return this._fightLoss
    }

    get talkc(){
        return this._talkChance
    }

    get fightc(){
        return this._fightChance
    }
}

class Ship {
    constructor(name){
        this._name = name
        this._hull = 10
        this._fuel = 10
        this._talkSkill = 0.5
        this._fightSkill = 0.5
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

    get fskill() {
        return this._fightSkill
    }

    get tskill(){
        return this._talkSkill
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
        this._hull = value
    }

    set fskill(value){
        if (typeof value !== "number" || value < 0 || value > 1){
            return "Invalid. Fight Skill value must be a number between 0 and 1"
        }
        this._fightSkill = value
    }

    set tskill(value){
        if (typeof value !== "number" || value < 0 || value > 1){
            return "Invalid. Talk Skill value must be a number between 0 and 1"
        }
        this._talkSkill = value
    }
}

let PlayerShip = new Ship("Federation Courier");

const StartBeacon = new Beacon("Welcome to Warp Drive");
StartBeacon.description = `>You carry with you crucial data for the survival of the federation\n
>Use your warp drive to move across the galaxy, from one beacon to the next\n
>Be wary of your fuel reserves and damage to your ships hull\n
\n
>Type 'Help' to see a list of commands`

const PirateBeacon = new Beacon("Pirates!")
PirateBeacon.description = `>As you appear at the next beacon, you see lasers chasing after a civilian ship\n
>They are followed by a small fighting ship, adorned with pirate colours\n
\n
>Do you come to the aid of the civilians?`

const PirateBeaconEvent = new Event()
PirateBeaconEvent.talkw = `>You open a channel. After some tense negotiation, the pirates agree to leave.\n
>As thanks, the civilians give you some supplied!\n
\n
>You regain some fuel!`
PirateBeaconEvent.talkl = `>You try to reason with them, but they respond with threats and power up weapons.\n
>The pirates escape but not before taking a chunk out of your ship.\n
\n
>Your hull is damaged`
PirateBeaconEvent.talkc = 0.7
PirateBeaconEvent.fightw = `>You open fire and destroy the pirate ship. The civilians escape safely.\n
>You scavenge some scrap from the wreckage.\n
\n
>Your hull has been reparied!`
PirateBeaconEvent.fightl = `>These pirates are skilled, for every hit you land on them they land 2 more on you.\n 
>The pirates continue to chase the civilain after your forced to flee.\n
>Your hull takes damage`
PirateBeaconEvent.fightc = 0.5

PirateBeacon.event = PirateBeaconEvent

function displayBeacon(beacon){
    document.getElementById("beaconName").innerHTML = beacon.name
    document.getElementById("beaconDescription").innerHTML = beacon.description
}

let beaconList = [PirateBeacon]

function jump(){
    let newBeacon = Math.floor(Math.random() * beaconList.length)
    PlayerShip.fuel -= 1
    return beaconList[newBeacon]
}

function talk(beaconEvent){
    if (PlayerShip.tskill >= beaconEvent.talkc){
        document.getElementById("beaconDescription").innerHTML = beaconEvent.talkw
        PlayerShip.fuel += 1
    } else if (PlayerShip.tskill < beaconEvent.talkc) {
        document.getElementById("beaconDescription").innerHTML = beaconEvent.talkl
        PlayerShip.hull -= 1
    } else {
        return "Beacon Talk Error"
    }

}

function fight(beaconEvent) {
    if (PlayerShip.fskill >= beaconEvent.fightc) {
        document.getElementById("beaconDescription").innerHTML = beaconEvent.winf
        PlayerShip.hull += 1
    } else if (PlayerShip.fskill < beaconEvent.fightc) {
        document.getElementById("beaconDescription").innerHTML = beaconEvent.fightl
        PlayerShip.hull -= 2
    } else {
        return "Beacon Fight Error"
    }
}

let currentBeacon = StartBeacon

displayBeacon(currentBeacon)


document.addEventListener("submit", function(e) {
    e.preventDefault()
    
    command = document.getElementById("userCommand").value.toLowerCase()
    
    switch (command) {
        case "jump":
            currentBeacon = jump()
            displayBeacon(currentBeacon)
            document.getElementById("userCommand").value = ""
            break;
        case "talk":
            currentEvent = currentBeacon.event
            talk(currentEvent)
            document.getElementById("userCommand").value = ""
            break;
        case "fight":
            currentEvent = currentBeacon.event
            fight(currentEvent)
            document.getElementById("userCommand").value = ""
            break;
        default:
            document.getElementById("userCommand").value = ""
            document.getElementById("errorBox").innerHTML = "Not a valid command"
            break;
    }
    
})