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

    set fightWin(value) {
        this._fightWin = value
    }

    set talkWin(value) {
        this._talkWin = value
    }    

    set fightLoss(value){
        this._fightLoss = value
    }

    set fightChance(value){
        this._fightChance = value
    }

    set talkLoss(value){
        this._talkLoss = value
    }

    set talkChance(value){
        this._talkChance = value
    }
    
    get talkWin() {
        return this._talkWinin
    }

    get fightWin() {
        return this._fightWinin
    }

    get talkLoss(){
        return this._talkLossoss
    }

    get fightLoss(){
        return this._fightLossoss
    }

    get talkChance(){
        return this._talkChancehance
    }

    get fightChance(){
        return this._fightChancehance
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

    get fightSkill() {
        return this._fightSkill
    }

    get talkSkill(){
        return this._talkSkill
    }

    set fuel(value) {
        if (typeof value !== "number" || value < 0) {
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

    set fightSkill(value){
        if (typeof value !== "number" || value < 0 || value > 1){
            return "Invalid. Fight Skill value must be a number between 0 and 1"
        }
        this._fightSkill = value
    }

    set talkSkill(value){
        if (typeof value !== "number" || value < 0 || value > 1){
            return "Invalid. Talk Skill value must be a number between 0 and 1"
        }
        this._talkSkill = value
    }
}

let PlayerShip = new Ship("Federation Courier");

const GilaMonster = new Ship("Gila Monster")
GilaMonster.fightSkill = 0.8
GilaMonster.talkSkill = 0.2

const StartBeacon = new Beacon("Welcome to Warp Drive");
StartBeacon.description = `>You are a courier for the galactic federation, currently embroiled civil war, and losing.\n
>You carry with you crucial data for the survival of the federation\n
>Use your warp drive to move across rebel controlled space, from one beacon to the next\n
>Be wary of your fuel reserves and damage to your ships hull\n
Type "Help" to see a list of commands`

const PirateBeacon = new Beacon("Pirates!")
PirateBeacon.description = `>As you appear at the next beacon, you see lasers chasing after a civilian ship\n
>They are followed by a small fighting ship, adorned with pirate colours\n
\n
>Do you come to the aid of the civilians?`

const PirateBeaconEvent = new Event()
PirateBeaconEvent.talkWin = `>You open a channel. After some tense negotiation, the pirates agree to leave.\n
>As thanks, the civilians give you some supplied!\n
\n
>You regain some fuel!`
PirateBeaconEvent.talkLoss = `>You try to reason with them, but they respond with threats and power up weapons.\n
>The pirates escape but not before taking a chunk out of your ship.\n
\n
>Your hull is damaged`
PirateBeaconEvent.talkChance = 0.7
PirateBeaconEvent.fightWin = `>You open fire and destroy the pirate ship. The civilians escape safely.\n
>You scavenge some scrap from the wreckage.\n
\n
>Your hull has been reparied!`
PirateBeaconEvent.fightLoss = `>These pirates are skilled, for every hit you land on them they land 2 more on you.\n 
>The pirates continue to chase the civilain after your forced to flee.\n
>Your hull takes damage`
PirateBeaconEvent.fightChance = 0.5

PirateBeacon.event = PirateBeaconEvent

const DistressCall = new Beacon("Distress Call")
DistressCall.description = `>As you finish your jump, your ship picks up a distress call.\n
>You set coordinates toward it and discover a stranded rebel ship!\n
>They hail you "Don't shoot! We're merely a courier vessel, we need help!\n
\n
>Do you help them?`

const DistressCallEvent = new Event()
DistressCallEvent.talkWin = `>You're familiar with the issues their ship is facing, and offer your expertise\n
>"You saved us, even though we're your enemy. Thank you, take some fuel.\n
\n
>You regain some fuel!`
DistressCallEvent.talkLoss = `>You go to offer your help, but suddenly this "courier ship" arms its weapons!.\n
>It was a trap!\n
>You flee, before the rebels can do anymore damage\n
\n
>Your hull is damaged`
DistressCallEvent.talkChance = 0.7
DistressCallEvent.fightWin = `>You're not interested in finding out if they're genuine or not\n
>You open fire and destroy the rebel ship.\n
>Some scrap floating around where the rebel ship was is all that remains. You make some use of it.
\n
>Your hull has been reparied!`
DistressCallEvent.fightLoss = `>You realise too late that its a trap!\n 
>The rebels launch a volley and disable your weapons system\n
>You make your escape, knowing this is a lost fight\n
\n
>Your hull takes damage`
DistressCallEvent.fightChance = 0.5

DistressCall.event = DistressCallEvent

const DerelictStation = new Beacon("Derelict Station")
DerelictStation.description = `>A derelict station drifts silently through the void.\n
>Your sensors detect life signs inside.\n
\n
>Do you dock and investigate?`

const DerelictEvent = new Event()
DerelictEvent.talkWin = `>You hail the station and a weak voice answers.\n
>Survivors are grateful, and offer spare parts.\n
\n
>Your hull is repaired!`
DerelictEvent.talkLoss = `>You attempt contact, but the signal triggers an automated defense system.\n
>Your ship is hit as you back away.\n
\n
>Your hull takes damage.`
DerelictEvent.talkChance = 0.6
DerelictEvent.fightWin = `>You target the defense grid and disable it.\n
>Inside you find useful salvage.\n
\n
>Your hull is repaired!`
DerelictEvent.fightLoss = `>You fire, but the station retaliates fiercely.\n
>You retreat under heavy fire.\n
\n
>Your hull takes damage.`
DerelictEvent.fightChance = 0.5

DerelictStation.event = DerelictEvent

const SmugglerBeacon = new Beacon("Smuggler's Deal")
SmugglerBeacon.description = `>A smuggler ship hails you, offering fuel in exchange for silence.\n
>Do you accept the offer or press them further?`

const SmugglerEvent = new Event()
SmugglerEvent.talkWin = `>You agree quietly. They toss over fuel and warp away.\n
\n
>You gain fuel.`
SmugglerEvent.talkLoss = `>You try negotiating a better deal, but they bolt without a word.\n
\n
>Nothing gained.`
SmugglerEvent.talkChance = 0.6
SmugglerEvent.fightWin = `>You disable their engines and seize the cargo.\n
>They were well-stocked.\n
\n
>You gain fuel and hull is repaired!`
SmugglerEvent.fightLoss = `>They fight back with surprising ferocity.\n
>You take damage before they escape.\n
\n
>Your hull takes damage.`
SmugglerEvent.fightChance = 0.4

SmugglerBeacon.event = SmugglerEvent

const ProbeBeacon = new Beacon("Ancient Probe")
ProbeBeacon.description = `>You find a strange ancient probe drifting silently.\n
>Do you attempt to interface with it or destroy it from a distance?`

const ProbeEvent = new Event()
ProbeEvent.talkWin = `>Your systems decipher the signal.\n
>The probe transmits star charts and fuel-saving routes.\n
\n
>You gain fuel.`
ProbeEvent.talkLoss = `>The signal corrupts your navigation system temporarily.\n
>You fix it, but it burns extra fuel.\n
\n
>You lose fuel.`
ProbeEvent.talkChance = 0.6
ProbeEvent.fightWin = `>The probe explodes, revealing hidden tech inside.\n
>You recover salvage.\n
\n
>Your hull is repaired!`
ProbeEvent.fightLoss = `>You shoot it, but the detonation sends debris slamming into your ship.\n
\n
>Your hull takes damage.`
ProbeEvent.fightChance = 0.5

ProbeBeacon.event = ProbeEvent

const GhostSignal = new Beacon("Ghost Signal")
GhostSignal.description = `>A mysterious repeating signal lures you off-course.\n
>Do you try to decrypt it or destroy the source?`

const GhostEvent = new Event()
GhostEvent.talkWin = `>The message was a warning.\n
>You course-correct just in time to avoid a minefield.\n
\n
>You save fuel.`
GhostEvent.talkLoss = `>The signal fades, and you waste precious time analyzing it.\n
\n
>You lose fuel.`
GhostEvent.talkChance = 0.7
GhostEvent.fightWin = `>You find a cloaked drone emitting the signal and destroy it.\n
>Data logs aboard provide intel.\n
\n
>Your hull is repaired!`
GhostEvent.fightLoss = `>A second drone ambushes you while you're distracted.\n
\n
>Your hull takes damage.`
GhostEvent.fightChance = 0.5
GhostSignal.event = GhostEvent

const FedBeacon = new Beacon("Federation Patrol")
FedBeacon.description = `>A federation patrol demands to scan your ship for contraband.\n
>Do you comply or fight back?`

const FedEvent = new Event()
FedEvent.talkWin = `>The scan clears you. They top off your fuel as thanks.\n
\n
>You gain fuel.`
FedEvent.talkLoss = `>You argue your case, but they fine you and take resources.\n
\n
>You lose fuel.`
FedEvent.talkChance = 0.8
FedEvent.fightWin = `>You disable their sensors and flee before backup arrives.\n
\n
>Your hull is damaged, but you escape.`
FedEvent.fightLoss = `>You engage, but they overpower you quickly.\n
\n
>Your hull takes damage.`
FedEvent.fightChance = 0.3

FedBeacon.event = FedEvent

const AsteroidBeacon = new Beacon("Asteroid Ambush")
AsteroidBeacon.description = `>An asteroid field appears on your course.\n
>You pick up a hidden energy signature nearby.\n
>Do you investigate or shoot first?`

const AsteroidEvent = new Event()
AsteroidEvent.talkWin = `>A ship disguised in the field surrenders without a fight.\n
>You collect fuel and parts.\n
\n
>You gain fuel and hull repair!`
AsteroidEvent.talkLoss = `>They pretend to surrender, then fire!\n
>You escape, but your ship is hit.\n
\n
>Your hull takes damage.`
AsteroidEvent.talkChance = 0.6
AsteroidEvent.fightWin = `>Your pre-emptive strike disables the enemy.\n
>You salvage parts from the wreck.\n
\n
>Your hull is repaired!`
AsteroidEvent.fightLoss = `>Your shots miss and draw attention. You're outgunned.\n
\n
>Your hull takes damage.`
AsteroidEvent.fightChance = 0.5

AsteroidBeacon.event = AsteroidEvent

const MinefieldBeacon = new Beacon("Rebel Minefield")
MinefieldBeacon.description = `>You warp into a rebel-laid minefield.\n
>A lone rebel ship hails you—suspiciously helpful.\n
>Do you accept their guidance?`

const MinefieldEvent = new Event()
MinefieldEvent.talkWin = `>The rebel leads you safely through.\n
>Perhaps not all rebels are alike.\n
\n
>You gain fuel.`
MinefieldEvent.talkLoss = `>You follow their directions, but it's a trap!\n
>You hit a mine.\n
\n
>Your hull takes damage.`
MinefieldEvent.talkChance = 0.65
MinefieldEvent.fightWin = `>You destroy the rebel ship, and carefully plot your own path.\n
\n
>You escape with minor scrapes.`
MinefieldEvent.fightLoss = `>Combat shakes your ship and a mine goes off near you.\n
\n
>Your hull takes damage.`
MinefieldEvent.fightChance = 0.4

MinefieldBeacon.event = MinefieldEvent

const TraderBeacon = new Beacon("Trader's Offer")
TraderBeacon.description = `>A travelling merchant offers to trade fuel for ship diagnostics.\n
>Do you engage in trade or threaten them for resources?`

const TraderEvent = new Event()
TraderEvent.talkWin = `>You trade peacefully.\n
>The merchant provides high-efficiency fuel.\n
\n
>You gain fuel.`
TraderEvent.talkLoss = `>You try to haggle too hard, and they warp away insulted.\n
\n
>Nothing gained.`
TraderEvent.talkChance = 0.9
TraderEvent.fightWin = `>You take their fuel by force.\n
>It works, but leaves you feeling dirty.\n
\n
>You gain fuel.`
TraderEvent.fightLoss = `>The merchant's ship fights back with surprising firepower.\n
\n
>Your hull takes damage.`
TraderEvent.fightChance = 0.3

TraderBeacon.event = TraderEvent

const FinalBeacon = new Beacon("Final Beacon")
FinalBeacon.description = `>You Win\n
\n
\nYou have unlocked a new ship: Gila Monster.
\n
>Type "start" to restart`

function displayBeacon(beacon){
    console.log(currentBeacon)
    document.getElementById("beaconName").innerHTML = beacon.name
    document.getElementById("beaconDescription").innerHTML = beacon.description
}

let beaconList = [PirateBeacon, DistressCall, DerelictStation, SmugglerBeacon, ProbeBeacon, GhostSignal, FedBeacon, AsteroidBeacon, MinefieldBeacon, TraderBeacon]

function beaconRandomiser(beaconArray) {
    let currentIndex = beaconArray.length

    while (currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [beaconArray[currentIndex], beaconArray[randomIndex]] = [beaconArray[randomIndex], beaconArray[currentIndex]]
    }

    return beaconArray
}

let randomBeaconList = beaconRandomiser(beaconList)
let shipUnlock = false

function jump(){
    if (randomBeaconList.length == 0 && gameOver != true){
        gameOver = true
        shipUnlock = true
        return FinalBeacon
    } else {
        newBeacon = randomBeaconList.pop()
        PlayerShip.fuel -= 1
        return newBeacon
    }
}

function talk(beaconEvent){
    if (PlayerShip.talkSkill >= beaconEvent.talkChance){
        PlayerShip.fuel += 1
        return beaconEvent.talkWin
    } else if (PlayerShip.talkSkill < beaconEvent.talkChance) {
        PlayerShip.hull -= 1
        return beaconEvent.talkLoss
    } else {
        return "Beacon Talk Error"
    }

}

function fight(beaconEvent) {
    if (PlayerShip.fightSkill >= beaconEvent.fightChance) {
        PlayerShip.hull += 1
        return beaconEvent.fightWin
    } else if (PlayerShip.fightSkill < beaconEvent.fightChance) {
        PlayerShip.hull -= 2
        return beaconEvent.fightLoss
    } else {
        return "Beacon Fight Error"
    }
}

function gameOverScreen(){
    if (PlayerShip.hull <= 0){
        document.getElementById("beaconName").innerHTML = "GAME OVER"
        document.getElementById("beaconDescription").innerHTML = `>You knew it was coming\n
>Your ships hull was sturdy, but its taken one hit too many.\n
>As your vessel tears in two, you are left at the mercy of the void and federation at the mercy of the rebels.\n
\n
>Type "start" to try again.`
    } else if (PlayerShip.fuel <= 0){
        document.getElementById("beaconName").innerHTML = "GAME OVER"
        document.getElementById("beaconDescription").innerHTML = `>Your ships engine ceases to run, and you begin to drift\n
>You'd prayed that this was the beacon that would have the fuel you needed. It did not.\n
>You have plenty of time to contemplate the fate of the federation as you drift into the void\n
\n
>Type "start" to try again.`
    }
}

function displayHelp(){
    document.getElementById("beaconName").innerHTML = "Help"
    document.getElementById("beaconDescription").innerHTML = `>Controls:\n
>Jump to new beacon type "jump"\n
>To engage an event aggressively type "fight"\n
>To engage an event diplomatically type "talk\n
>To see your ships status type "ship"\n
>Type "back" to return to the game`
}

function displayShip(){
    document.getElementById("beaconName").innerHTML = "Ship Console"
    document.getElementById("beaconDescription").innerHTML = `>Name: ${PlayerShip.name}\n
>Ship Status:\n
>Hull is at ${PlayerShip.hull}\n
>Fuel is at ${PlayerShip.fuel}\n
\n
>Type "back" to return`
}

let currentBeacon = StartBeacon
let fightOngoing = false
let talkOngoing = false
let gameOver = false

function resetGame(){
    beaconList = [PirateBeacon, DistressCall, DerelictStation, SmugglerBeacon, ProbeBeacon, GhostSignal, FedBeacon, AsteroidBeacon, MinefieldBeacon, TraderBeacon]
    randomBeaconList = beaconRandomiser(beaconList)
    if (shipUnlock == true){
        PlayerShip = GilaMonster
    } else{
        PlayerShip = new Ship("Federation Courier")
    }
    fightOngoing = false
    talkOngoing = false
    gameOver = false
}

displayBeacon(currentBeacon)

document.addEventListener("submit", function(e) {
    e.preventDefault()
    
    command = document.getElementById("userCommand").value.toLowerCase()

    switch (command) {
        case "jump":
            currentBeacon = jump()
            fightOngoing = false
            talkOngoing = false
            displayBeacon(currentBeacon)
            document.getElementById("userCommand").value = ""
            break;
        case "talk":
            currentEvent = currentBeacon.event
            talkOngoing = true
            eventResult = talk(currentEvent)
            document.getElementById("beaconDescription").innerHTML = eventResult
            document.getElementById("userCommand").value = ""
            if (PlayerShip.hull <= 0 || PlayerShip.fuel <= 0){
                gameOverScreen()
            }
            break;
        case "fight":
            currentEvent = currentBeacon.event
            fightOngoing = true
            eventResult = fight(currentEvent)
            document.getElementById("beaconDescription").innerHTML = eventResult
            document.getElementById("userCommand").value = ""
            if (PlayerShip.hull <= 0 || PlayerShip.fuel <= 0){
                gameOverScreen()
            }
            break;
        case "ship":
            displayShip()
            document.getElementById("userCommand").value = ""
            break;
        case "start":
            resetGame()
            currentBeacon = StartBeacon
            displayBeacon(currentBeacon)
            document.getElementById("userCommand").value = ""
            break;
        case "help":
            displayHelp()
            document.getElementById("userCommand").value = ""
            break;
        case "back":
            if (fightOngoing == true || talkOngoing == true){
                document.getElementById("beaconDescription").innerHTML = eventResult
            } else {
                displayBeacon(currentBeacon)
            }
            document.getElementById("userCommand").value = ""
            break;
        default:
            document.getElementById("userCommand").value = ""
            document.getElementById("errorBox").innerHTML = "Not a valid command"
            break;
    }
})