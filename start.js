const fs = require('fs')

function readParts() {
  const str = fs.readFileSync('parts.md', 'utf8').replace(/\r\n/g, '\n')
  const rows = str.split('\n').filter(x => x).join('\n')
  const parts = rows.split('~').filter(x => x)
  const map = {}
  for (const part of parts) {
    const split = part.split('\n')
    const key = split.shift()
    const value = split.filter(x => x).join('\n') + '\n'
    map[key] = value
  }
  return map
}

function readInput() {
  const str = fs.readFileSync('input.md', 'utf8').replace(/\r\n/g, '\n')
  const stories = str.split('\n\n')
  const parsed = []
  for (const story of stories) {
    const split = story.split('\n').filter(x => x)
    parsed.push(split)
  }
  return parsed
}

function writeOutput(str) {
  return fs.writeFileSync('output.md', str)
}

const parts = readParts()
const input = readInput()
const partsKeys = Object.keys(parts)

const output = []
for (const story of input) {
  const title = story.join('|')
  let storyOut = '## ' + title + '\n'
  for (const part of story) {
    if (!partsKeys.includes(part)) return console.log('could not find part: ' + part)
    storyOut += parts[part]
  }
  if (output.includes(storyOut)) console.log('duplicated story detected: ' + title)
  output.push(storyOut)
}

writeOutput(output.join('\n'))
console.log('successfully generated output.md')
