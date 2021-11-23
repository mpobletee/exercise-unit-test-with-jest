const sum = (a, b) => {
    return a + b;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (usd) => {
    return usd * oneEuroIs.JPY;
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const fromYenToPound = (yen) => {
    return yen * oneEuroIs.GBP;
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };