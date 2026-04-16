export const GL_BASEMAPS = {
    'carto-positron': {
        name: 'CARTO Positron',
        url: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        attribution: '© <a href="https://carto.com">CARTO</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
    'carto-dark-matter': {
        name: 'CARTO Dark Matter',
        url: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
        attribution: '© <a href="https://carto.com">CARTO</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        dark: true,
    },
    'carto-voyager-gl': {
        name: 'CARTO Voyager',
        url: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
        attribution: '© <a href="https://carto.com">CARTO</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
    'osm-liberty': {
        name: 'OSM Liberty',
        url: 'https://tiles.openfreemap.org/styles/liberty',
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
    'osm-bright': {
        name: 'OSM Bright',
        url: 'https://tiles.openfreemap.org/styles/bright',
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
    'osm-positron': {
        name: 'OSM Positron',
        url: 'https://tiles.openfreemap.org/styles/positron',
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
};
const LEGACY_MAP = {
    'carto-light': 'carto-positron',
    'carto-dark': 'carto-dark-matter',
    'carto-voyager': 'carto-voyager-gl',
    'osm': 'osm-liberty',
    'satellite': 'carto-positron',
    'stamen-toner': 'carto-positron',
};
export function resolveGLBasemap(key) {
    if (key in GL_BASEMAPS)
        return GL_BASEMAPS[key];
    const mapped = LEGACY_MAP[key];
    return mapped ? GL_BASEMAPS[mapped] : GL_BASEMAPS['carto-positron'];
}
//# sourceMappingURL=basemaps-gl.js.map