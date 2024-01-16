import * as sass from 'sass'
import {basename, join} from 'path'

import fsExtra from 'fs-extra'
const {mkdirp, readFile, writeFile} = fsExtra

const inDir = 'sass'
const outDir = 'lit'

const wrapTemplate = (cssStr) => {
	return [
                "import {css} from 'lit';",
                'export default css`',
		cssStr,
                '`'
	].join('\n');
}

const files = [
	`${inDir}/components/menu.scss`,
	`${inDir}/elements/box.scss`,
	`${inDir}/elements/button.scss`,
	`${inDir}/elements/icon.scss`,
	`${inDir}/elements/notification.scss`,
	`${inDir}/elements/title.scss`,
	`${inDir}/helpers/overflow.scss`,
	`${inDir}/layout/footer.scss`,
	`${inDir}/layout/hero.scss`,
	`${inDir}/layout/section.scss`,
];
await mkdirp(outDir)
const inPattern = new RegExp(`^${inDir}/`)
const tasks = files.map(async from => {
  const name = basename(from, '.scss').replace(/\//g, '-')

  const to = join(outDir, `${name}.js`)

  const result = await sass.compileAsync(from, {style: 'compressed'})

  await Promise.all([
    writeFile(to, wrapTemplate(result.css), 'utf8'),
  ])
})

await Promise.all(tasks)
