/*
 * Derived from:
 * https://github.com/primer/css/blob/v21.1.1/script/build-css.js
 */

import compiler from './primer/script/primer-css-compiler.js'
import {basename, join} from 'path'

import fsExtra from 'fs-extra'
const {mkdirp, readFile, writeFile} = fsExtra

const inDir = 'src/primer'
const outDir = 'lit'
const bundleNames = {
  'index.scss': 'primer'
}

const wrapTemplate = (cssStr) => {
	return [
                "import {css} from 'lit';",
                'export default css`',
		cssStr,
                '`'
	].join('\n');
}

const files = [
	`${inDir}/container.scss`,
	`${inDir}/margin.scss`,
	`${inDir}/padding.scss`,
	`${inDir}/visibility-display.scss`,
];
await mkdirp(outDir)
const inPattern = new RegExp(`^${inDir}/`)
const tasks = files.map(async from => {
  const path = from.replace(inPattern, '')
  const name = bundleNames[path] || basename(path, '.scss').replace(/\//g, '-')

  const to = join(outDir, `${name}.js`)

  const result = await compiler(await readFile(from, 'utf8'), {from, to})

  await Promise.all([
    writeFile(to, wrapTemplate(result.css), 'utf8'),
  ])
})

await Promise.all(tasks)
