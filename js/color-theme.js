
export const load = (d, k = 'theme') => {
    let m;
    const t = localStorage.getItem(k);
    switch(t) {
    case '1': m = 'auto';
        break;
    case '2': m = 'dark';
        break;
    case '3': m = 'light';
        break;
    default: m = d;
    }
    document.querySelector('html').dataset.colorMode = m;
}

export const save = (m, k = 'theme') => {
    let c;
    switch(m) {
    case 'auto': c = '1';
        break;
    case 'dark': c = '2';
        break;
    case 'light': c = '3';
        break;
    default:
        throw new Error("No such colorMode");
    }
    localStorage.setItem(k, c);
}
