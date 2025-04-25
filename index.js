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
        return this._talkWin
    }

    get fightWin() {
        return this._fightWin
    }

    get talkLoss(){
        return this._talkLoss
    }

    get fightLoss(){
        return this._fightLoss
    }

    get talkChance(){
        return this._talkChance
    }

    get fightChance(){
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
>You also recognize the mess of tech on the outside of the station as a makeshift automated defense system\n
\n
>Do you dock and investigate?`

const DerelictEvent = new Event()
DerelictEvent.talkWin = `>You hail the station and a weak voice answers.\n
>"I-I've disabled defenses, please we need help fixing our engines". You oblige.\n
>Survivors are grateful, and offer spare parts.\n
\n
>Your hull is repaired!`
DerelictEvent.talkLoss = `>You attempt contact, but the signal triggers an automated defense system.\n
>Make shift though it may be, it certainly is not short of firepower.\n
>Your ship is hit as you back away.\n
\n
>Your hull takes damage.`
DerelictEvent.talkChance = 0.6
DerelictEvent.fightWin = `>After analysing the shoddy craftmanship, you realise it is particularly vunerable to your ships EMP weaponry.\n
>You target the defense system and disable it.\n
>Inside you find the lifeforms aboard were space rats. You salavage some scrap and return to your ship.\n
\n
>Your hull is repaired!`
DerelictEvent.fightLoss = `>You fire, but the stations defense system retaliates fiercely.\n
>Make shift though it may be, it certainly is not short of firepower.\n
>You retreat under heavy fire.\n
\n
>Your hull takes damage.`
DerelictEvent.fightChance = 0.5

DerelictStation.event = DerelictEvent

const SmugglerBeacon = new Beacon("Smuggler's Deal")
SmugglerBeacon.description = `>A smuggler ship hails you, offering fuel in exchange for silence.\n
>"Listen friend, you and I both know what I'm up to here, but I'm sure you and your federation buddies have better things to do than bring in a small fry like me? In fact, how about I refuel your ship!"\n
\n
>Do you accept the offer or press them further?`

const SmugglerEvent = new Event()
SmugglerEvent.talkWin = `>You agree, your mission is crucial and a small time weapons dealers business is inconsequential to you\n
They toss over fuel and warp away.\n
\n
>You gain fuel.`
SmugglerEvent.talkLoss = `>You try negotiating a better deal, but they bolt without a word.\n
\n
>Nothing gained.`
SmugglerEvent.talkChance = 0.6
SmugglerEvent.fightWin = `>You are an officer of the great Galatic Federation, and you're not about to take a bribe from this scum.\n
>You disable their engines and seize the cargo.\n
>They were well-stocked.\n
\n
>You gain fuel and hull is repaired!`
SmugglerEvent.fightLoss = `>They fight back with surprising ferocity.\n
>"You should've taken the bribe fed!"\n
>You take damage before they escape.\n
\n
>Your hull takes damage.`
SmugglerEvent.fightChance = 0.4

SmugglerBeacon.event = SmugglerEvent

const ProbeBeacon = new Beacon("Ancient Probe")
ProbeBeacon.description = `>You find a strange probe drifting silently.\n
>You attempt to scan it from a distance but your ships computer can't understand its signal\n
>From what you can tell language on the probe appears to be old. Ancient, in fact.\n
\n
>Do you attempt to interface with it or destroy it from a distance?`

const ProbeEvent = new Event()
ProbeEvent.talkWin = `>You try and decipher the signal, using various translation and decryption systems on your ships computer\n
>...\n
>...\n
>Success!\n
>The probe transmits ancient lost star charts and reveal fuel-saving routes.\n
\n
>You gain fuel.`
ProbeEvent.talkLoss = `>Whatever was on that thing, someone didn't want it being read.\n
>The signal corrupts your navigation system temporarily.\n
>You fix it, but it burns extra fuel.\n
\n
>You lose fuel.`
ProbeEvent.talkChance = 0.6
ProbeEvent.fightWin = `>The probe explodes, its mysteries lost forever.\n
>Maybe you made a mistake....\n
>You recover salvage.\n
\n
>Your hull is repaired!`
ProbeEvent.fightLoss = `>You shoot it, it explodes and you feel your ship shudder.\n
>For brief moment you had the impression it was defending itself, but you soon realise you hadn't factored in the debris from the explosion striking your ship.\n
>You consider retaking your ballistics course when this is all over\n
\n
>Your hull takes damage.`
ProbeEvent.fightChance = 0.5

ProbeBeacon.event = ProbeEvent

const GhostSignal = new Beacon("Ghost Signal")
GhostSignal.description = `>A mysterious repeating signal lures you off-course.\n
>Your ship starts picking up strange electromagnetic echoes.\n
>The pattern almost sounds... like a voice.\n
\n
>Do you try to decrypt the message or destroy its source?`

const GhostEvent = new Event()
GhostEvent.talkWin = `>You isolate the signal’s core and decode a hidden subchannel.\n
>It’s an old distress call warning of a cloaked minefield ahead.\n
>You correct your course just in time.\n
\n
>Thanks to your caution, you save precious fuel.`
GhostEvent.talkLoss = `>You spend hours analyzing garbled data, chasing fragments of static.\n
>The source vanishes before you can learn anything useful.\n
\n
>Your detour burns fuel for nothing.`
GhostEvent.talkChance = 0.7
GhostEvent.fightWin = `>You trace the signal to a derelict satellite hidden behind a nearby moon.\n
>You destroy it, and buried logs transmit before shutdown: a cache of old star maps.\n
\n
>You gain intel and manage to patch minor hull damage.`
GhostEvent.fightLoss = `>You fire at the source — but a secondary cloaked drone retaliates.\n
>A piercing beam cuts into your ship before you can disable it.\n
\n
>Your hull suffers a sharp hit.`
GhostEvent.fightChance = 0.5

GhostSignal.event = GhostEvent

const FedBeacon = new Beacon("Rebel Patrol")
FedBeacon.description = `>A sleek rebel cruiser intercepts your trajectory.\n
>Its comms channel crackles: "Routine inspection. Prepare for scan."\n
\n
>Do you comply or resist their orders?`

const FedEvent = new Event()
FedEvent.talkWin = `>You shut down engines and allow the scan.\n
>They find nothing illegal and, impressed with your cooperation, refuel you slightly.\n
\n
>You gain fuel and goodwill.`
FedEvent.talkLoss = `>You argue your right to privacy. The officer responds flatly.\n
>"Unregistered vessel flagged. Fuel surcharge applied."\n
>If they knew why you were really here, you feel your punishment may have been more severe\n
\n
>You lose some fuel under protest.`
FedEvent.talkChance = 0.8
FedEvent.fightWin = `>You scramble sensors and jam their targeting.\n
>After a tense standoff, you jump away during a blind spot — taking minor hull grazes.\n
\n
>You escape with some hull damage.`
FedEvent.fightLoss = `>Your evasive maneuvers fail against their superior tech.\n
>You're boarded, fined, and released with a damaged ship.\n
>Luckily they believe your just a smuggler, and don't realise your true mission\n
\n
>Your hull is seriously dented.`
FedEvent.fightChance = 0.3

FedBeacon.event = FedEvent

const AsteroidBeacon = new Beacon("Asteroid Ambush")
AsteroidBeacon.description = `>You drift into a dense asteroid field, sensors jittering from rock and metal.\n
>But among the clutter... a faint power spike.\n
\n
>Do you investigate or open fire immediately?`

const AsteroidEvent = new Event()
AsteroidEvent.talkWin = `>You carefully approach and discover a pirate vessel disabled by the terrain.\n
>Outgunned, they offer fuel and parts in exchange for safe passage.\n
\n
>You gain resources without a fight.`
AsteroidEvent.talkLoss = `>Your ship slows to investigate — and hidden weapons activate.\n
>You dodge, but not before taking a hit from a hidden turret.\n
\n
>Your hull is scorched.`
AsteroidEvent.talkChance = 0.6
AsteroidEvent.fightWin = `>You fire into the field — direct hit!\n
>A camouflaged ship erupts in flame. You recover fuel cells from the wreckage.\n
\n
>Your hull is patched from salvaged plating.`
AsteroidEvent.fightLoss = `>Your first volley misses. Their return fire cracks through an asteroid and into your ship.\n
>You're forced to jump before more damage is done.\n
\n
>Your hull takes a hard blow.`
AsteroidEvent.fightChance = 0.5

AsteroidBeacon.event = AsteroidEvent

const MinefieldBeacon = new Beacon("Rebel Minefield")
MinefieldBeacon.description = `>You drop out of warp straight into a rebel-laid minefield.\n
>Debris floats nearby — a graveyard of ships less lucky than yours.\n
>A lone rebel vessel hails you: "I'll guide you... for a price."\n
\n
>Do you trust them or shoot your way out?`

const MinefieldEvent = new Event()
MinefieldEvent.talkWin = `>You accept the offer cautiously.\n
>The rebel pilot transmits a safe path and disappears before you can ask why.\n
\n
>You make it out, shaken but unharmed. Gain fuel.`
MinefieldEvent.talkLoss = `>You follow their coordinates — and hit a mine dead-on.\n
>They vanish from comms as your ship reels from the blast.\n
\n
>You've been betrayed. Hull damage sustained.`
MinefieldEvent.talkChance = 0.65
MinefieldEvent.fightWin = `>You open fire immediately.\n
>As the rebel ship explodes, its nav logs broadcast. You piece together a path through the mines.\n
\n
>You escape with minor scratches.`
MinefieldEvent.fightLoss = `>The minefield ignites around you as you fight.\n
>Your shots destabilize the area — and one stray mine detonates near your hull.\n
\n
>You're lucky to survive. Heavy hull damage.`
MinefieldEvent.fightChance = 0.4

MinefieldBeacon.event = MinefieldEvent

const TraderBeacon = new Beacon("Trader's Offer")
TraderBeacon.description = `>A ramshackle merchant ship broadcasts a friendly ping.\n
>"Hey stranger. I'll top off your tanks — just let my AI run a quick diagnostic scan of your systems."\n
\n
>Do you accept the deal or try to rob him?`

const TraderEvent = new Event()
TraderEvent.talkWin = `>You allow the scan — it's harmless.\n
>The merchant chuckles, "Just checking for that sweet engine mod. Thanks!"\n
>He tosses in extra fuel for your time.\n
\n
>You gain fuel and a bit of goodwill.`
TraderEvent.talkLoss = `>You stall and demand a better offer.\n
>The merchant frowns. "Too much hassle. I'm out."\n
\n
>He jumps away. Nothing gained.`
TraderEvent.talkChance = 0.9
TraderEvent.fightWin = `>You threaten him. He panics and dumps fuel to get you to leave.\n
>You scoop it up and fly off before anyone notices.\n
\n
>You gain fuel — but at what moral cost?`
TraderEvent.fightLoss = `>You fire a warning shot — and suddenly get blasted by concealed turrets.\n
>The merchant was more prepared than he looked.\n
\n
>Your hull is riddled before you warp out.`
TraderEvent.fightChance = 0.3

TraderBeacon.event = TraderEvent


const FinalBeacon = new Beacon("Final Beacon")
FinalBeacon.description = `>You Win\n
\n
>As your ship completes its final jump, Federation command receives the data you've risked everything to carry.\n
>Inside: the schematics and deployment plans of the Rebel flagship.\n
\n
>With this intelligence, the Federation launches a decisive strike—crippling the Rebel fleet and liberating vast regions of galactic space.\n
\n
>Your mission was a success. The war may not be over, but the tide has turned.\n
\n
>You have unlocked a new ship: Gila Monster. Armed to the teeth, but it's intimidating visage makes negotiation harder.\n
\n
>Type "start" to restart.`


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
    document.getElementById("errorBox").innerHTML = ""
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
            document.getElementById("errorBox").innerHTML = ""
            break;
        case "talk":
            currentEvent = currentBeacon.event
            talkOngoing = true
            eventResult = talk(currentEvent)
            document.getElementById("beaconDescription").innerHTML = eventResult
            document.getElementById("userCommand").value = ""
            document.getElementById("errorBox").innerHTML = ""
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
            document.getElementById("errorBox").innerHTML = ""
            if (PlayerShip.hull <= 0 || PlayerShip.fuel <= 0){
                gameOverScreen()
            }
            break;
        case "ship":
            displayShip()
            document.getElementById("userCommand").value = ""
            document.getElementById("errorBox").innerHTML = ""
            break;
        case "start":
            resetGame()
            currentBeacon = StartBeacon
            displayBeacon(currentBeacon)
            document.getElementById("userCommand").value = ""
            document.getElementById("errorBox").innerHTML = ""
            break;
        case "help":
            displayHelp()
            document.getElementById("userCommand").value = ""
            document.getElementById("errorBox").innerHTML = ""
            break;
        case "back":
            if (fightOngoing == true || talkOngoing == true){
                document.getElementById("beaconDescription").innerHTML = eventResult
            } else {
                displayBeacon(currentBeacon)
            }
            document.getElementById("userCommand").value = ""
            document.getElementById("errorBox").innerHTML = ""
            break;
        default:
            document.getElementById("userCommand").value = ""
            document.getElementById("errorBox").innerHTML = "Not a valid command"
            break;
    }
})