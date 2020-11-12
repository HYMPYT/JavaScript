let carExamle = {
    Manufacturer: "Manuf",
    Model: "Car Model",
    Year: new Date(2010, 5, 22),
    AvgSpeed: 45,
    Show: function () {
        alert(`${this.Manufacturer},\n${this.Model},\n${this.Year.toDateString()},\n${this.AvgSpeed}`)
    },
    TimeToRide: function (distance) {
        let timeWithoutRest = parseInt(distance / this.AvgSpeed)
        let allTime = timeWithoutRest + parseInt(timeWithoutRest / 4)
        alert(allTime)
    }
}


class Fraction {
    constructor(num, denom = 1) {
        this.Numerator = parseInt(num)
        this.Denominator = parseInt(denom)
    }
    toString() {
        return `${this.Numerator}/${this.Denominator}`
    }

    Add(second) {
        let fr2 = Fraction.parseFraction(second)
        let newDen = fr2.Denominator * this.Denominator
        let newNum = this.Numerator * fr2.Denominator + this.Denominator * fr2.Numerator
        return new Fraction(newNum, newDen).Normalize()
    }

    Sub(second) {
        let fr2 = Fraction.parseFraction(second)
        let newDen = fr2.Denominator * this.Denominator
        let newNum = this.Numerator * fr2.Denominator - this.Denominator * fr2.Numerator
        return new Fraction(newNum, newDen).Normalize()
    }

    Mul(second) {
        let fr2 = Fraction.parseFraction(second)
        let newDen = fr2.Denominator * this.Denominator
        let newNum = this.Numerator * fr2.Numerator
        return new Fraction(newNum, newDen).Normalize()
    }

    Div(second) {
        let fr2 = Fraction.parseFraction(second)
        let newDen = this.Denominator * fr2.Numerator
        let newNum = this.Numerator * fr2.Denominator
        return new Fraction(newNum, newDen).Normalize()
    }
    static parseFraction(str) {
        let arr = str.toString().split('/')
        return new Fraction(arr[0], arr[1])
    }

    Normalize() {
        if (this.Numerator % this.Denominator === 0) {
            return this.Numerator / this.Denominator
        }
        else {
            let min_gd = Fraction.MinGeneralDivider(this.Numerator, this.Denominator)
            return `${this.Numerator / min_gd}/${this.Denominator / min_gd}`
        }
    }
    static MinGeneralDivider(a, b) {
        if (b === 0) {
            return a
        }
        else {
            return this.MinGeneralDivider(b, (a % b))
        }
    }
}

let fr1 = new Fraction(15, 30)
let fr2 = new Fraction(15, 60)
console.log(`fact1 = ${fr1}\nfact2 = ${fr2}\nfact1 + fact2 = ${fr1.Add(fr2)}\nfact1 - fact2 = ${fr1.Sub(fr2)}\nfact1 * fact2 = ${fr1.Mul(fr2)}\nfact1 / fact2 = ${fr1.Div(fr2)}`)


class Time {
    constructor(hours, minutes, seconds) {
        this.H = parseInt(hours)
        this.M = parseInt(minutes)
        this.S = parseInt(seconds)
    }

    toString() {
        return `${this.H}:${this.M}:${this.S}`
    }

    set Seconds(secs) {
        if (parseInt(secs)) {
            this.S = parseInt(secs)
            this.Update()
        }
    }
    AddSeconds(secs) {
        if (parseInt(secs)) {
            this.S += parseInt(secs)
            this.Update()
        }
    }

    set Minutes(mins) {
        if (parseInt(mins)) {
            this.M = parseInt(mins)
            this.Update()
        }
    }
    AddMinutess(mins) {
        if (parseInt(mins)) {
            this.M += parseInt(mins)
            this.Update()
        }
    }

    set Hours(hours) {
        if (parseInt(hours)) {
            this.H = parseInt(hours)
            this.Update()
        }
    }
    AddHours(hours) {
        if (parseInt(hours)) {
            this.H += parseInt(hours)
            this.Update()
        }
    }
    Update() {
        if (this.S > 59) {
            this.M += parseInt(this.S / 60)
            this.S %= 60
        } else if (this.S < 0) {
            this.M -= parseInt(this.S * (-1) / 60)
            let secs = (this.S * (-1) % 60)
            this.S = secs > 0 ? 60 - secs : 0
        }

        if (this.M > 59) {
            this.H += parseInt(this.M / 60)
            this.M %= 60
        } else if (this.M < 0) {
            this.H -= parseInt(this.M * (-1) / 60)
            let mins = (this.M * (-1) % 60)
            this.M = mins > 0 ? 60 - mins : 0
        }

        if (this.H > 23) {
            this.H %= 24
        } else if (this.H < 0) {
            let hours = (this.H * (-1) % 24);
            this.H = hours > 0 ? 24 - hours : 0
        }
    }
}

let t1 = new Time(16, 30, 21)
console.log(`Start time = ${t1.toString()}`)
t1.AddHours(2)
console.log(`Add two hours = ${t1.toString()}`)
t1.AddSeconds("6620qwe")
console.log(`Add "6620qwe" seconds = ${t1.toString()}`)
