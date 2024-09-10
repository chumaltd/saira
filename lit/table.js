import {css} from 'lit';
export default css`
.table{background-color:rgba(0,0,0,0)}.table:not(:last-child){margin-bottom:1.5rem}.table td,.table th{border:1px solid var(--borderColor-default);border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:var(--bgColor-primary, hsl(171, 100%, 41%));color:var(--fgColor-onInverse)}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table td.is-vcentered,.table th.is-vcentered{vertical-align:middle}.table th{color:var(--fgColor-default)}.table th:not([align]){text-align:left}.table tr.is-selected{background-color:var(--bgColor-primary, hsl(171, 100%, 41%));color:var(--fgColor-onInverse)}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:var(--fgColor-onInverse);color:currentColor}.table thead{background-color:rgba(0,0,0,0)}.table thead td,.table thead th{border-width:0 0 2px;color:var(--fgColor-default)}.table tfoot{background-color:rgba(0,0,0,0)}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:var(--fgColor-default)}.table tbody{background-color:rgba(0,0,0,0)}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:rgba(128,128,128,.05)}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover{background-color:rgba(128,128,128,.05)}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even){background-color:rgba(128,128,128,.1)}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(even){background-color:rgba(128,128,128,.05)}.table-container{overflow:auto;overflow-y:hidden;max-width:100%}.table-container:not(:last-child){margin-bottom:1.5rem}
`