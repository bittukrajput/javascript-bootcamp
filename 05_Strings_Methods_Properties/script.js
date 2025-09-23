const string="Hello World"

const string2="My Name is bittu "

const result=string.concat(" ", string2,"!")

const capitalMessages=string.toUpperCase()

const exteraSpace='        hii, my name is Bittu Kumar'

const removeExtraSpace=exteraSpace.trim()

const finalMessagesUpperCase=exteraSpace.trim().toUpperCase()
//const replaceMessages=string.replace('Hello', 'hii')

const lastFourDigits='7856'
const accountBalance='9873'

const maskedAccountNumber=lastFourDigits.padStart(16,'*')

const concatinatedString=`my last four digit of account number is`.concat(" ,",lastFourDigits)
const templateString=`my last four digit of account number is ${lastFourDigits.padStart(16,'*')}`
const templateString2=`my account balance is $${accountBalance}`