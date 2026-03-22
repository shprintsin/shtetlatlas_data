export const BASEMAPS = {
    'carto-light': {
        name: 'CARTO Light',
        url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://carto.com">CARTO</a>',
    },
    'carto-dark': {
        name: 'CARTO Dark',
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://carto.com">CARTO</a>',
        dark: true,
    },
    'carto-voyager': {
        name: 'CARTO Voyager',
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://carto.com">CARTO</a>',
    },
    osm: {
        name: 'OpenStreetMap',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    },
    satellite: {
        name: 'Satellite',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: '&copy; Esri',
    },
    'stamen-toner': {
        name: 'Toner',
        url: 'https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png',
        attribution: '&copy; Stadia Maps &copy; Stamen Design',
    },
};
export const COLOR_PALETTES = [
    { name: 'Vintage', colors: ['#8B4513', '#CD853F', '#DEB887', '#D2691E', '#A0522D', '#F4A460', '#DAA520', '#BC8F8F'] },
    { name: 'Ocean', colors: ['#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600'] },
    { name: 'Jewel', colors: ['#6A0572', '#AB83A1', '#1B998B', '#2D3047', '#E55934', '#F0C808', '#086375', '#B80C09'] },
    { name: 'Earth', colors: ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', '#606C38', '#283618', '#DDA15E'] },
    { name: 'Pastel', colors: ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#E8BAFF', '#FFB3DE', '#B3FFE0'] },
    { name: 'Bold', colors: ['#E63946', '#457B9D', '#1D3557', '#F1FAEE', '#A8DADC', '#2A9D8F', '#E9C46A', '#264653'] },
    { name: 'Warm Sunset', colors: ['#FF6B6B', '#FFA07A', '#FFD93D', '#6BCB77', '#4D96FF', '#9B59B6', '#E74C3C', '#F39C12'] },
    { name: 'Cool Forest', colors: ['#1B4332', '#2D6A4F', '#40916C', '#52B788', '#74C69D', '#95D5B2', '#B7E4C7', '#D8F3DC'] },
    { name: 'Monochrome', colors: ['#111111', '#333333', '#555555', '#777777', '#999999', '#BBBBBB', '#DDDDDD', '#F5F5F5'] },
    { name: 'Hebrew Blue', colors: ['#003366', '#004488', '#0055AA', '#0066CC', '#3388DD', '#5599EE', '#88BBFF', '#BBDDFF'] },
];
/**
 * Get a palette by name (case-insensitive).
 */
export function getPalette(name) {
    return COLOR_PALETTES.find((p) => p.name.toLowerCase() === name.toLowerCase());
}
//# sourceMappingURL=palettes.js.map