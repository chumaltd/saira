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
	`${inDir}/components/breadcrumb.scss`,
	`${inDir}/components/menu.scss`,
	`${inDir}/components/navbar.scss`,
	`${inDir}/components/pagination.scss`,
	`${inDir}/components/tabs.scss`,
	`${inDir}/elements/box.scss`,
	`${inDir}/elements/button.scss`,
	`${inDir}/elements/icon.scss`,
	`${inDir}/elements/image.scss`,
	`${inDir}/elements/notification.scss`,
	`${inDir}/elements/table.scss`,
	`${inDir}/elements/tag.scss`,
	`${inDir}/elements/title.scss`,
	`${inDir}/form/checkbox-radio.scss`,
	`${inDir}/form/file.scss`,
	`${inDir}/form/input-textarea.scss`,
	`${inDir}/form/select.scss`,
	`${inDir}/form/tools.scss`,
	`${inDir}/helpers/box-shadow.scss`,
	`${inDir}/helpers/color.scss`,
	`${inDir}/helpers/overflow.scss`,
	`${inDir}/helpers/typography.scss`,
	`${inDir}/layout/container.scss`,
	`${inDir}/layout/flexbox.scss`,
	`${inDir}/layout/footer.scss`,
	`${inDir}/layout/hero.scss`,
	`${inDir}/layout/margin.scss`,
	`${inDir}/layout/media.scss`,
	`${inDir}/layout/padding.scss`,
	`${inDir}/layout/section.scss`,
	`${inDir}/layout/visibility-display.scss`,
	`${inDir}/utilities/mwc-colors.scss`,
];
await mkdirp(outDir)
const inPattern = new RegExp(`^${inDir}/`)
const tasks = files.map(async from => {
  const name = basename(from, '.scss').replace(/\//g, '-')

  const to = join(outDir, `${name}.js`)

  const result = await sass.compileAsync(from, {style: 'compressed', charset: false})

  await Promise.all([
    writeFile(to, wrapTemplate(result.css), 'utf8'),
  ])
})

await Promise.all(tasks)
