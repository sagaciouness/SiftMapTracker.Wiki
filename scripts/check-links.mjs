import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

const root = resolve('docs')
const markdownFiles = []

function walk(directory) {
  for (const name of readdirSync(directory)) {
    const fullPath = join(directory, name)
    if (statSync(fullPath).isDirectory()) {
      if (name !== '.vitepress') walk(fullPath)
    } else if (name.endsWith('.md')) {
      markdownFiles.push(fullPath)
    }
  }
}

walk(root)
const failures = []
const linkPattern = /!?(?:\[[^\]]*\])\(([^)\s]+)(?:\s+"[^"]*")?\)/g

for (const file of markdownFiles) {
  const source = readFileSync(file, 'utf8')
  for (const match of source.matchAll(linkPattern)) {
    const target = match[1]
    if (/^(https?:|mailto:|#)/.test(target)) continue
    const withoutAnchor = decodeURIComponent(target.split('#')[0])
    if (!withoutAnchor) continue
    const candidate = withoutAnchor.startsWith('/')
      ? resolve(root, `.${withoutAnchor}`)
      : resolve(dirname(file), withoutAnchor)
    const publicCandidate = withoutAnchor.startsWith('/')
      ? resolve(root, 'public', `.${withoutAnchor}`)
      : undefined
    const possibilities = [candidate, `${candidate}.md`, join(candidate, 'index.md')]
    if (publicCandidate) possibilities.push(publicCandidate)
    if (!possibilities.some(existsSync)) failures.push(`${file}: ${target}`)
  }
}

if (failures.length) {
  console.error(`发现 ${failures.length} 个无效本地链接：`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`已检查 ${markdownFiles.length} 个 Markdown 文件，本地链接有效。`)
