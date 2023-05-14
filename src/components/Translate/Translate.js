function Translate(RU, UZ, EN) {
    return localStorage.getItem('language') === 'RU' ? RU : localStorage.getItem('language') === 'UZ' ? UZ : localStorage.getItem('language') === 'EN' ? EN : EN
}

export default Translate