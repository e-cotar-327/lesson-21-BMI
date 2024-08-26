// Tema pentru acasă

//Varianta 1

const vadimsMass1 = 78
const vadimsHeight1 = 1.69
const alexMass1 = 92
const alexHeight1 = 1.95

const vadimsBmi1 = vadimsMass1 / (vadimsHeight1 ** 2)
const alexBmi1 = alexMass1 / (alexHeight1 ** 2)

const markHigherBMI1 = vadimsBmi1 > alexBmi1

if (vadimsBmi1 > alexBmi1) {
    console.log(`BMI lui Vadim este ${vadimsBmi1} care este mai mare decit a lui Alex - ${alexBmi1}`)
}
else {
    console.log(`BMI lui Alex este ${alexBmi1} care este mai mare decit a lui Vadim - ${vadimsBmi1}`)
}
console.log(vadimsBmi1)



// Varianta 2

const vadimsMass = 95
const vadimsHeight = 1.88
const alexMass = 85
const alexHeight = 1.76

const vadimsBmi = vadimsMass / (vadimsHeight ** 2)
const alexBmi = alexMass / (alexHeight ** 2)

const markHigherBMI = vadimsBmi > alexBmi

if (vadimsBmi > alexBmi) {
    console.log(` BMI lui Vadim este ${vadimsBmi} care este mai mare decit a lui Alex - ${alexBmi}`)
}
else {
    console.log(` BMI lui Alex este ${alexBmi} care este mai mare decit a lui Vadim - ${vadimsBmi}`)
}
