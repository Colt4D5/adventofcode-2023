import { readFile } from "../utils/readFile.js"

const marbles = {
  red: 12,
  green: 13,
  blue: 14
}

function dayTwoPartOne(file) {
  const lines = readFile(file)

  const games = lines
    .split('\n')
    .map(line => line.split(': ')[1])

  let sum = 0

  games.map((game, i) => {
    const pairs = game.split('; ').map(v => v.split(', ')).flat().map(pair => pair.split(' '))
    const isPossible = pairs.every(tuple => tuple[0] <= marbles[tuple[1]])

    sum += isPossible ? i + 1 : 0
  })

  return sum
}

// console.log('Day two Part one: ', dayTwoPartOne('example.txt'))
// console.log('Day two Part one: ', dayTwoPartOne('input.txt'))


function dayTwoPartTwo(file) {
  const lines = readFile(file)

  const games = lines
    .split('\n')
    .map(line => line.split(': ')[1])

  let sum = 0

  const gameMap = games.map((game, i) => {
    const currGame = {
      red: 0,
      green: 0,
      blue: 0
    }
    const pairs = game.split('; ').map(v => v.split(', ')).flat().map(pair => pair.split(' '))

    pairs.map(pair => {
      currGame[pair[1]] = +pair[0] > +currGame[pair[1]] ? +pair[0] : currGame[pair[1]]
    })
    return currGame
  })
  
  const products = gameMap.map(g => Object.values(g).reduce((s, v) => s * v))
  return products.reduce((s, v) => s + v)
}

// console.log('Day two Part two: ', dayTwoPartTwo('example2.txt'))
console.log('Day two Part two: ', dayTwoPartTwo('input2.txt'))