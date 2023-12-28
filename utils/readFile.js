import fs from 'fs'

export const readFile = (file) => fs.readFileSync(file, 'utf-8');