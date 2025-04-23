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
        if (value !== "number" || value < 0) {
            return "Invalid. Hull value must be a postive number."
        }
    }
}