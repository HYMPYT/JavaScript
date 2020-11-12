let shopingList = [
    {
        name: "milk",
        count: 5,
        bought: false
    },
    {
        name: "bread",
        count: 2,
        bought: true
    },
    {
        name: "beef",
        count: 3,
        bought: false
    },
    {
        name: "eggs",
        count: 5,
        bought: false
    },
    {
        name: "Rum",
        count: 15,
        bought: true
    }
]


function ShowSorted(arr) {
    return arr.sort((f, s) => f.bought > s.bought)
}

function ShowSortedList(arr) {
    return function () {
        return arr.sort((f, s) => f.bought > s.bought)
    }
}
const sortedDescBought = ShowSortedList(shopingList)


function AddGoodToList(arr, good) {
    const index = arr.findIndex(i => i.name === good.name)
    index != -1 ? arr[index].count += good.count : arr.push(good)
    return arr
}

function AddDirectToList(arr) {
    return function (item) {
        const index = arr.findIndex(i => i.name === item.name)
        index != -1 ? arr[index].count += item.count : arr.push(item)
        return arr
    }
}
const AddToShopingList = AddDirectToList(shopingList)


function MarkGoodAsBought(arr, good) {
    const index = arr.findIndex(i => i.name === good.name)
    if (index != -1 && arr[index].bought === false) {
        arr[index].bought = true
        return arr
    }
}

function DirectMarkGoodAsBought(arr) {
    return function (item) {
        const index = arr.findIndex(i => i.name === item)
        if (index != -1 && arr[index].bought === false) {
            arr[index].bought = true
            return arr
        }
    }
}
const BoughtAGood = DirectMarkGoodAsBought(shopingList)


console.log('Default arr(but other methods done strange things) = ', shopingList)

console.log('Closure sort = ', sortedDescBought());
console.log('Closure add to list = ', AddToShopingList({ name: "milkiwey", count: 2, bought: false }));

console.log('Position bought = ', BoughtAGood("beef"));



class Purchase {
    constructor(name, count, value) {
        this.Name = name
        this.Count = count
        this.Value = value
    }
    get TotalValue() {
        return this.Count * this.Value
    }
    toString() {
        return `name: ${this.Name} - count: ${this.Count} - value: ${this.Value}`
    }
}

let storeReceipt = [
    new Purchase('banana', 10, 9),
    new Purchase('pork', 5, 25),
    new Purchase('jam', 2, 15),
    new Purchase('peneapple', 1, 30),
    new Purchase('coconut', 12, 90)
]


function ShowReceipt() {
    return this.reduce((out, i) => out += `${i.toString()}\n`, '')
}


function ReceiptTotalValue() {
    return this.reduce((out, i) => out += i.TotalValue, 0)
}


function GetMostExpensivePurchase() {
    return this.reduce((out, i) => out = out.TotalValue <= i.TotalValue ? i : out, this[0])
}


function GoodAvgValue() {
    return (this.reduce((out, i) => out += i.Value, 0) / this.length)
}


console.log('Receipt :\n' + ShowReceipt.apply(storeReceipt));
console.log('Receipt totel value = ' + ReceiptTotalValue.apply(storeReceipt));
console.log('Most expensive purchase = ' + GetMostExpensivePurchase.apply(storeReceipt));
console.log('Avarage good value in the Receipt', GoodAvgValue.apply(storeReceipt));


class CSSStyle {
    constructor(name, value) {
        this.Name = name
        this.Value = value
    }
    toString() {
        return `${this.Name}: ${this.Value};`
    }
}

let stylesArr = [
    new CSSStyle('color', 'red'),
    new CSSStyle('font-size', '4rem'),
    new CSSStyle('background-color', 'purple'),
    new CSSStyle('text-align', 'center'),
    new CSSStyle('margin', '5px')
]

function AddParagraphWithStyles(styles, text) {
    style = "width: 2px;"
    document.write(`<p style="${styles.reduce((out, i) => out += i.toString(), '')} ">${text}</p>`)
}


AddParagraphWithStyles(stylesArr, "Hello World")

class Auditory {
    constructor(name, seats, faculty) {
        this.Name = name
        if (seats < 10) {
            this.Seats = 10
        } else if (seats > 20) {
            this.Seats = 20
        } else {
            this.Seats = seats
        }
        this.Faculty = faculty
    }
    toString() {
        return `${this.Name} ${this.Seats} ${this.Faculty}`
    }
}

class Group {
    constructor(name, count, faculty) {
        this.Name = name
        this.Count = count
        this.Faculty = faculty
    }
    toString() {
        return `${this.Name} ${this.Count} ${this.Faculty}`
    }
}

let auditoriesArr = [
    new Auditory('Budi-200', 8, 'Dev'),
    new Auditory('Cab-201', 18, 'Eng'),
    new Auditory('Cab-202', 13, 'Deutch'),
    new Auditory('Aud-203', 18, 'Literature'),
    new Auditory('Cab-204', 17, 'Dev'),
    new Auditory('Cab-205', 25, 'Math')
]


function ShowAuditories(arr) {
    return arr.reduce((out, i) => out += i.toString() + '\n', '')
}


function ShowAuditoriesByFaculty(arr, faculty) {
    return arr.filter(i => i.Faculty === faculty).reduce((out, i) => out += i.toString() + '\n', '')
}

function CorrectAuditoriesForGroup(arr, group) {
    return ShowAuditories(arr.filter(i => i.Seats >= group.Count && i.Faculty == group.Faculty))
}


function SortAuditoriesBySeats(arr) {
    return arr.sort((f, s) => f.Seats < s.Seats)
}


function SortAuditoriesByName(arr) {
    return arr.sort((f, s) => f.Name > s.Name)
}



console.log('Auditories :\n' + ShowAuditories(auditoriesArr));
const fac = 'Dev'
console.log(`Auditories by faculty "${fac}" :\n` + ShowAuditoriesByFaculty(auditoriesArr, fac));
const gr = new Group('Devs', 10, 'Dev')
console.log(`Auditories for "${gr}" : \n` + CorrectAuditoriesForGroup(auditoriesArr, gr));
console.log('Auditories sorted by seats : \n' + ShowAuditories(SortAuditoriesBySeats(auditoriesArr)));
console.log('Auditories sorted by name : \n' + ShowAuditories(SortAuditoriesByName(auditoriesArr)));
