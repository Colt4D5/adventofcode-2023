import { readFile } from "../utils/readFile.js"

function dayOnePartOne(file) {
  const lines = readFile(file)

  const arrs = lines
    .split('\n')
    .map(line => line.split('').filter(char => char.match(/^\d+$/)))

  const first = arrs.map(arr => arr[0])
  const last = arrs.map(arr => arr[arr.length - 1])

  const sum = first.reduce((sum, val, i) => {
    return sum + Number(val + last[i])
  }, 0)

  return sum
}

// console.log('Day one Part one: ', dayOnePartOne('example.txt'))
// console.log('Day one Part one: ', dayOnePartOne('input.txt'))

const numberMap = {
  one: "one1one",
  two: "two2two",
  three: "three3three",
  four: "four4four",
  five: "five5five",
  six: "six6six",
  seven: "seven7seven",
  eight: "eight8eight",
  nine: "nine9nine"
}

function dayOnePartTwo(file) {
  let lines = readFile(file)
  
  let newLines = lines
  
  for (const [key, value] of Object.entries(numberMap)) {
    if (newLines.includes(key)) {
      newLines = newLines.replaceAll(key, value)
    }
  }
  
  const arrs = newLines
    .split('\n')
    .map(line => line.split('').filter(char => char.match(/^\d+$/)))

    const first = arrs.map(arr => arr[0])
    const last = arrs.map(arr => arr[arr.length - 1])
  
    const sum = first.reduce((acc, val, i) => {
      return acc + Number(val + last[i])
    }, 0)

  return sum
}

// console.log('\n\nDay one Part two: \n', dayOnePartTwo('example2.txt'))
console.log('Day one Part two: ', dayOnePartTwo('input2.txt'))