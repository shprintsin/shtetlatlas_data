export function expandPreset(presetName, params, layerType) {
    switch (presetName) {
        case 'demographic':
            return {
                style: {
                    type: 'category',
                    field: params.category_field ?? 'type',
                    graduatedRadius: {
                        field: params.size_field ?? 'pop',
                        method: 'sqrt',
                        minRadius: 2,
                        maxRadius: 20,
                    },
                    fillOpacity: 0.8,
                    weight: 1,
                    color: '#ffffff',
                },
                labels: {
                    show: true,
                    field: params.label_field ?? 'name',
                    collision: 'hide',
                    priorityField: params.size_field ?? 'pop',
                    position: 'center',
                    className: 'layer-label',
                },
            };
        case 'choropleth':
            return {
                style: {
                    type: 'graduated',
                    graduated: {
                        field: params.color_field ?? params.category_field ?? 'value',
                        method: 'quantile',
                        classes: 5,
                        colorRamp: { start: '#ffffcc', end: '#800026' },
                        breaks: [],
                    },
                    opacity: 0.6,
                    weight: 1,
                    color: '#ffffff',
                    default_color: '#cccccc',
                },
                labels: {
                    show: true,
                    field: params.label_field ?? 'name',
                    position: 'center',
                    collision: 'hide',
                    className: 'layer-label',
                },
            };
        case 'simple-points':
            return {
                style: {
                    type: 'simple',
                    radius: 5,
                    fillColor: '#3388ff',
                    fillOpacity: 0.8,
                    weight: 1,
                    color: '#ffffff',
                },
            };
        case 'heatmap':
            return {
                style: {
                    type: 'simple',
                    radius: 3,
                    fillColor: '#ff4444',
                    fillOpacity: 0.6,
                    weight: 0.5,
                    color: '#ffffff',
                },
            };
        default:
            return { style: {} };
    }
}
//# sourceMappingURL=presets.js.map