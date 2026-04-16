import { z } from 'zod';
import type { FeatureCollection } from 'geojson';
import type { MapConfig, LayerConfig, MapMetadata } from '../schemas/map-config.js';
/** Minimal label config — presence implies show: true */
export declare const MinimalLabelSchema: z.ZodObject<{
    field: z.ZodString;
    position: z.ZodOptional<z.ZodEnum<["center", "top", "bottom", "left", "right"]>>;
    className: z.ZodOptional<z.ZodString>;
    include_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    exclude_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    fontSize: z.ZodOptional<z.ZodNumber>;
    fontColor: z.ZodOptional<z.ZodString>;
    fontFamily: z.ZodOptional<z.ZodString>;
    fontWeight: z.ZodOptional<z.ZodEnum<["normal", "bold", "400", "500", "600", "700"]>>;
    collision: z.ZodOptional<z.ZodEnum<["none", "hide"]>>;
    priority_field: z.ZodOptional<z.ZodString>;
    filter: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        value: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>;
    }, "strip", z.ZodTypeAny, {
        value: string | number | boolean;
        field: string;
    }, {
        value: string | number | boolean;
        field: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    field: string;
    filter?: {
        value: string | number | boolean;
        field: string;
    } | undefined;
    className?: string | undefined;
    position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
    include_list?: string[] | undefined;
    exclude_list?: string[] | undefined;
    fontSize?: number | undefined;
    fontColor?: string | undefined;
    fontFamily?: string | undefined;
    fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
    collision?: "none" | "hide" | undefined;
    priority_field?: string | undefined;
}, {
    field: string;
    filter?: {
        value: string | number | boolean;
        field: string;
    } | undefined;
    className?: string | undefined;
    position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
    include_list?: string[] | undefined;
    exclude_list?: string[] | undefined;
    fontSize?: number | undefined;
    fontColor?: string | undefined;
    fontFamily?: string | undefined;
    fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
    collision?: "none" | "hide" | undefined;
    priority_field?: string | undefined;
}>;
/** Minimal popup config — presence implies show: true */
export declare const MinimalPopupSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<["list", "template"]>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    template: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type?: "list" | "template" | undefined;
    template?: string | undefined;
    fields?: string[] | undefined;
}, {
    type?: "list" | "template" | undefined;
    template?: string | undefined;
    fields?: string[] | undefined;
}>;
/** Minimal hover config — presence implies enable: true */
export declare const MinimalHoverSchema: z.ZodObject<{
    display: z.ZodOptional<z.ZodDefault<z.ZodEnum<["floating", "sidebar"]>>>;
    style: z.ZodOptional<z.ZodObject<{
        fillOpacity: z.ZodOptional<z.ZodNumber>;
        weight: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        weight?: number | undefined;
        fillOpacity?: number | undefined;
    }, {
        color?: string | undefined;
        weight?: number | undefined;
        fillOpacity?: number | undefined;
    }>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    template: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    template?: string | undefined;
    fields?: string[] | undefined;
    display?: "floating" | "sidebar" | undefined;
    style?: {
        color?: string | undefined;
        weight?: number | undefined;
        fillOpacity?: number | undefined;
    } | undefined;
}, {
    template?: string | undefined;
    fields?: string[] | undefined;
    display?: "floating" | "sidebar" | undefined;
    style?: {
        color?: string | undefined;
        weight?: number | undefined;
        fillOpacity?: number | undefined;
    } | undefined;
}>;
/** Minimal style — palette replaces color_dict, other fields optional with defaults */
export declare const MinimalStyleSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<["simple", "category", "graduated"]>>;
    field: z.ZodOptional<z.ZodString>;
    palette: z.ZodOptional<z.ZodString>;
    color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    stroke_color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    stroke_weight_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    graduated: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        method: z.ZodOptional<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
        classes: z.ZodOptional<z.ZodNumber>;
        colorRamp: z.ZodOptional<z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            start: string;
            end: string;
        }, {
            start: string;
            end: string;
        }>>;
        breaks: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        method?: "equal_interval" | "quantile" | "custom" | undefined;
        classes?: number | undefined;
        colorRamp?: {
            start: string;
            end: string;
        } | undefined;
        breaks?: number[] | undefined;
    }, {
        field: string;
        method?: "equal_interval" | "quantile" | "custom" | undefined;
        classes?: number | undefined;
        colorRamp?: {
            start: string;
            end: string;
        } | undefined;
        breaks?: number[] | undefined;
    }>>;
    graduated_radius: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        method: z.ZodOptional<z.ZodEnum<["sqrt", "log", "linear", "stepped"]>>;
        min_radius: z.ZodOptional<z.ZodNumber>;
        max_radius: z.ZodOptional<z.ZodNumber>;
        default_radius: z.ZodOptional<z.ZodNumber>;
        breaks: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        sizes: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        method?: "sqrt" | "log" | "linear" | "stepped" | undefined;
        breaks?: number[] | undefined;
        sizes?: number[] | undefined;
        min_radius?: number | undefined;
        max_radius?: number | undefined;
        default_radius?: number | undefined;
    }, {
        field: string;
        method?: "sqrt" | "log" | "linear" | "stepped" | undefined;
        breaks?: number[] | undefined;
        sizes?: number[] | undefined;
        min_radius?: number | undefined;
        max_radius?: number | undefined;
        default_radius?: number | undefined;
    }>>;
    highlight: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        value: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>;
        color: z.ZodOptional<z.ZodString>;
        weight: z.ZodOptional<z.ZodNumber>;
        radius_boost: z.ZodOptional<z.ZodNumber>;
        fill_opacity: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        value: string | number | boolean;
        field: string;
        color?: string | undefined;
        weight?: number | undefined;
        radius_boost?: number | undefined;
        fill_opacity?: number | undefined;
    }, {
        value: string | number | boolean;
        field: string;
        color?: string | undefined;
        weight?: number | undefined;
        radius_boost?: number | undefined;
        fill_opacity?: number | undefined;
    }>>;
    radius: z.ZodOptional<z.ZodNumber>;
    fillColor: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodNumber>;
    fillOpacity: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    default_color: z.ZodOptional<z.ZodString>;
    /** Alias for default_color — used in unified config.yaml */
    fallback_color: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type?: "simple" | "category" | "graduated" | undefined;
    graduated?: {
        field: string;
        method?: "equal_interval" | "quantile" | "custom" | undefined;
        classes?: number | undefined;
        colorRamp?: {
            start: string;
            end: string;
        } | undefined;
        breaks?: number[] | undefined;
    } | undefined;
    field?: string | undefined;
    color?: string | undefined;
    weight?: number | undefined;
    fillOpacity?: number | undefined;
    palette?: string | undefined;
    color_dict?: Record<string, string> | undefined;
    stroke_color_dict?: Record<string, string> | undefined;
    stroke_weight_dict?: Record<string, number> | undefined;
    default_color?: string | undefined;
    opacity?: number | undefined;
    highlight?: {
        value: string | number | boolean;
        field: string;
        color?: string | undefined;
        weight?: number | undefined;
        radius_boost?: number | undefined;
        fill_opacity?: number | undefined;
    } | undefined;
    radius?: number | undefined;
    fillColor?: string | undefined;
    graduated_radius?: {
        field: string;
        method?: "sqrt" | "log" | "linear" | "stepped" | undefined;
        breaks?: number[] | undefined;
        sizes?: number[] | undefined;
        min_radius?: number | undefined;
        max_radius?: number | undefined;
        default_radius?: number | undefined;
    } | undefined;
    fallback_color?: string | undefined;
}, {
    type?: "simple" | "category" | "graduated" | undefined;
    graduated?: {
        field: string;
        method?: "equal_interval" | "quantile" | "custom" | undefined;
        classes?: number | undefined;
        colorRamp?: {
            start: string;
            end: string;
        } | undefined;
        breaks?: number[] | undefined;
    } | undefined;
    field?: string | undefined;
    color?: string | undefined;
    weight?: number | undefined;
    fillOpacity?: number | undefined;
    palette?: string | undefined;
    color_dict?: Record<string, string> | undefined;
    stroke_color_dict?: Record<string, string> | undefined;
    stroke_weight_dict?: Record<string, number> | undefined;
    default_color?: string | undefined;
    opacity?: number | undefined;
    highlight?: {
        value: string | number | boolean;
        field: string;
        color?: string | undefined;
        weight?: number | undefined;
        radius_boost?: number | undefined;
        fill_opacity?: number | undefined;
    } | undefined;
    radius?: number | undefined;
    fillColor?: string | undefined;
    graduated_radius?: {
        field: string;
        method?: "sqrt" | "log" | "linear" | "stepped" | undefined;
        breaks?: number[] | undefined;
        sizes?: number[] | undefined;
        min_radius?: number | undefined;
        max_radius?: number | undefined;
        default_radius?: number | undefined;
    } | undefined;
    fallback_color?: string | undefined;
}>;
/** Minimal filter */
export declare const MinimalFilterSchema: z.ZodObject<{
    field: z.ZodString;
    exclude: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    include: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    field: string;
    exclude?: string[] | undefined;
    include?: string[] | undefined;
}, {
    field: string;
    exclude?: string[] | undefined;
    include?: string[] | undefined;
}>;
/** CSV source config — stored in layer YAML for persistent CSV tracking */
export declare const CsvSourceSchema: z.ZodObject<{
    csv: z.ZodString;
    lat: z.ZodString;
    lon: z.ZodString;
}, "strip", z.ZodTypeAny, {
    lat: string;
    csv: string;
    lon: string;
}, {
    lat: string;
    csv: string;
    lon: string;
}>;
export type CsvSource = z.infer<typeof CsvSourceSchema>;
/** Column config — controls which columns appear in GeoJSON properties vs data CSV */
export declare const ColumnsConfigSchema: z.ZodObject<{
    geojson: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    csv: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    csv?: string[] | undefined;
    geojson?: string[] | undefined;
}, {
    csv?: string[] | undefined;
    geojson?: string[] | undefined;
}>;
export type ColumnsConfig = z.infer<typeof ColumnsConfigSchema>;
/** What the user writes in layers/{slug}.yaml */
export declare const MinimalLayerYamlSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    visible: z.ZodOptional<z.ZodBoolean>;
    zIndex: z.ZodOptional<z.ZodNumber>;
    style: z.ZodOptional<z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<["simple", "category", "graduated"]>>;
        field: z.ZodOptional<z.ZodString>;
        palette: z.ZodOptional<z.ZodString>;
        color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        stroke_color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        stroke_weight_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        graduated: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            method: z.ZodOptional<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
            classes: z.ZodOptional<z.ZodNumber>;
            colorRamp: z.ZodOptional<z.ZodObject<{
                start: z.ZodString;
                end: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                start: string;
                end: string;
            }, {
                start: string;
                end: string;
            }>>;
            breaks: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            colorRamp?: {
                start: string;
                end: string;
            } | undefined;
            breaks?: number[] | undefined;
        }, {
            field: string;
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            colorRamp?: {
                start: string;
                end: string;
            } | undefined;
            breaks?: number[] | undefined;
        }>>;
        graduated_radius: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            method: z.ZodOptional<z.ZodEnum<["sqrt", "log", "linear", "stepped"]>>;
            min_radius: z.ZodOptional<z.ZodNumber>;
            max_radius: z.ZodOptional<z.ZodNumber>;
            default_radius: z.ZodOptional<z.ZodNumber>;
            breaks: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            sizes: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            method?: "sqrt" | "log" | "linear" | "stepped" | undefined;
            breaks?: number[] | undefined;
            sizes?: number[] | undefined;
            min_radius?: number | undefined;
            max_radius?: number | undefined;
            default_radius?: number | undefined;
        }, {
            field: string;
            method?: "sqrt" | "log" | "linear" | "stepped" | undefined;
            breaks?: number[] | undefined;
            sizes?: number[] | undefined;
            min_radius?: number | undefined;
            max_radius?: number | undefined;
            default_radius?: number | undefined;
        }>>;
        highlight: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>;
            color: z.ZodOptional<z.ZodString>;
            weight: z.ZodOptional<z.ZodNumber>;
            radius_boost: z.ZodOptional<z.ZodNumber>;
            fill_opacity: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            value: string | number | boolean;
            field: string;
            color?: string | undefined;
            weight?: number | undefined;
            radius_boost?: number | undefined;
            fill_opacity?: number | undefined;
        }, {
            value: string | number | boolean;
            field: string;
            color?: string | undefined;
            weight?: number | undefined;
            radius_boost?: number | undefined;
            fill_opacity?: number | undefined;
        }>>;
        radius: z.ZodOptional<z.ZodNumber>;
        fillColor: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        weight: z.ZodOptional<z.ZodNumber>;
        fillOpacity: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        default_color: z.ZodOptional<z.ZodString>;
        /** Alias for default_color — used in unified config.yaml */
        fallback_color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            colorRamp?: {
                start: string;
                end: string;
            } | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color?: string | undefined;
        weight?: number | undefined;
        fillOpacity?: number | undefined;
        palette?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        stroke_color_dict?: Record<string, string> | undefined;
        stroke_weight_dict?: Record<string, number> | undefined;
        default_color?: string | undefined;
        opacity?: number | undefined;
        highlight?: {
            value: string | number | boolean;
            field: string;
            color?: string | undefined;
            weight?: number | undefined;
            radius_boost?: number | undefined;
            fill_opacity?: number | undefined;
        } | undefined;
        radius?: number | undefined;
        fillColor?: string | undefined;
        graduated_radius?: {
            field: string;
            method?: "sqrt" | "log" | "linear" | "stepped" | undefined;
            breaks?: number[] | undefined;
            sizes?: number[] | undefined;
            min_radius?: number | undefined;
            max_radius?: number | undefined;
            default_radius?: number | undefined;
        } | undefined;
        fallback_color?: string | undefined;
    }, {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            colorRamp?: {
                start: string;
                end: string;
            } | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color?: string | undefined;
        weight?: number | undefined;
        fillOpacity?: number | undefined;
        palette?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        stroke_color_dict?: Record<string, string> | undefined;
        stroke_weight_dict?: Record<string, number> | undefined;
        default_color?: string | undefined;
        opacity?: number | undefined;
        highlight?: {
            value: string | number | boolean;
            field: string;
            color?: string | undefined;
            weight?: number | undefined;
            radius_boost?: number | undefined;
            fill_opacity?: number | undefined;
        } | undefined;
        radius?: number | undefined;
        fillColor?: string | undefined;
        graduated_radius?: {
            field: string;
            method?: "sqrt" | "log" | "linear" | "stepped" | undefined;
            breaks?: number[] | undefined;
            sizes?: number[] | undefined;
            min_radius?: number | undefined;
            max_radius?: number | undefined;
            default_radius?: number | undefined;
        } | undefined;
        fallback_color?: string | undefined;
    }>>;
    labels: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        position: z.ZodOptional<z.ZodEnum<["center", "top", "bottom", "left", "right"]>>;
        className: z.ZodOptional<z.ZodString>;
        include_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        exclude_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        fontSize: z.ZodOptional<z.ZodNumber>;
        fontColor: z.ZodOptional<z.ZodString>;
        fontFamily: z.ZodOptional<z.ZodString>;
        fontWeight: z.ZodOptional<z.ZodEnum<["normal", "bold", "400", "500", "600", "700"]>>;
        collision: z.ZodOptional<z.ZodEnum<["none", "hide"]>>;
        priority_field: z.ZodOptional<z.ZodString>;
        filter: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>;
        }, "strip", z.ZodTypeAny, {
            value: string | number | boolean;
            field: string;
        }, {
            value: string | number | boolean;
            field: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        filter?: {
            value: string | number | boolean;
            field: string;
        } | undefined;
        className?: string | undefined;
        position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
        include_list?: string[] | undefined;
        exclude_list?: string[] | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
        collision?: "none" | "hide" | undefined;
        priority_field?: string | undefined;
    }, {
        field: string;
        filter?: {
            value: string | number | boolean;
            field: string;
        } | undefined;
        className?: string | undefined;
        position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
        include_list?: string[] | undefined;
        exclude_list?: string[] | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
        collision?: "none" | "hide" | undefined;
        priority_field?: string | undefined;
    }>>;
    popup: z.ZodOptional<z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<["list", "template"]>>;
        fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        template: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "list" | "template" | undefined;
        template?: string | undefined;
        fields?: string[] | undefined;
    }, {
        type?: "list" | "template" | undefined;
        template?: string | undefined;
        fields?: string[] | undefined;
    }>>;
    hover: z.ZodOptional<z.ZodObject<{
        display: z.ZodOptional<z.ZodDefault<z.ZodEnum<["floating", "sidebar"]>>>;
        style: z.ZodOptional<z.ZodObject<{
            fillOpacity: z.ZodOptional<z.ZodNumber>;
            weight: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            color?: string | undefined;
            weight?: number | undefined;
            fillOpacity?: number | undefined;
        }, {
            color?: string | undefined;
            weight?: number | undefined;
            fillOpacity?: number | undefined;
        }>>;
        fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        template: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        template?: string | undefined;
        fields?: string[] | undefined;
        display?: "floating" | "sidebar" | undefined;
        style?: {
            color?: string | undefined;
            weight?: number | undefined;
            fillOpacity?: number | undefined;
        } | undefined;
    }, {
        template?: string | undefined;
        fields?: string[] | undefined;
        display?: "floating" | "sidebar" | undefined;
        style?: {
            color?: string | undefined;
            weight?: number | undefined;
            fillOpacity?: number | undefined;
        } | undefined;
    }>>;
    filter: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        exclude: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        include: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        exclude?: string[] | undefined;
        include?: string[] | undefined;
    }, {
        field: string;
        exclude?: string[] | undefined;
        include?: string[] | undefined;
    }>>;
    minZoom: z.ZodOptional<z.ZodNumber>;
    maxZoom: z.ZodOptional<z.ZodNumber>;
    feature_id: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodObject<{
        csv: z.ZodString;
        lat: z.ZodString;
        lon: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        lat: string;
        csv: string;
        lon: string;
    }, {
        lat: string;
        csv: string;
        lon: string;
    }>>;
    columns: z.ZodOptional<z.ZodObject<{
        geojson: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        csv: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        csv?: string[] | undefined;
        geojson?: string[] | undefined;
    }, {
        csv?: string[] | undefined;
        geojson?: string[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    filter?: {
        field: string;
        exclude?: string[] | undefined;
        include?: string[] | undefined;
    } | undefined;
    maxZoom?: number | undefined;
    style?: {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            colorRamp?: {
                start: string;
                end: string;
            } | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color?: string | undefined;
        weight?: number | undefined;
        fillOpacity?: number | undefined;
        palette?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        stroke_color_dict?: Record<string, string> | undefined;
        stroke_weight_dict?: Record<string, number> | undefined;
        default_color?: string | undefined;
        opacity?: number | undefined;
        highlight?: {
            value: string | number | boolean;
            field: string;
            color?: string | undefined;
            weight?: number | undefined;
            radius_boost?: number | undefined;
            fill_opacity?: number | undefined;
        } | undefined;
        radius?: number | undefined;
        fillColor?: string | undefined;
        graduated_radius?: {
            field: string;
            method?: "sqrt" | "log" | "linear" | "stepped" | undefined;
            breaks?: number[] | undefined;
            sizes?: number[] | undefined;
            min_radius?: number | undefined;
            max_radius?: number | undefined;
            default_radius?: number | undefined;
        } | undefined;
        fallback_color?: string | undefined;
    } | undefined;
    visible?: boolean | undefined;
    zIndex?: number | undefined;
    labels?: {
        field: string;
        filter?: {
            value: string | number | boolean;
            field: string;
        } | undefined;
        className?: string | undefined;
        position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
        include_list?: string[] | undefined;
        exclude_list?: string[] | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
        collision?: "none" | "hide" | undefined;
        priority_field?: string | undefined;
    } | undefined;
    popup?: {
        type?: "list" | "template" | undefined;
        template?: string | undefined;
        fields?: string[] | undefined;
    } | undefined;
    hover?: {
        template?: string | undefined;
        fields?: string[] | undefined;
        display?: "floating" | "sidebar" | undefined;
        style?: {
            color?: string | undefined;
            weight?: number | undefined;
            fillOpacity?: number | undefined;
        } | undefined;
    } | undefined;
    minZoom?: number | undefined;
    feature_id?: string | undefined;
    description?: string | undefined;
    source?: {
        lat: string;
        csv: string;
        lon: string;
    } | undefined;
    summary?: string | undefined;
    columns?: {
        csv?: string[] | undefined;
        geojson?: string[] | undefined;
    } | undefined;
}, {
    filter?: {
        field: string;
        exclude?: string[] | undefined;
        include?: string[] | undefined;
    } | undefined;
    maxZoom?: number | undefined;
    style?: {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            colorRamp?: {
                start: string;
                end: string;
            } | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color?: string | undefined;
        weight?: number | undefined;
        fillOpacity?: number | undefined;
        palette?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        stroke_color_dict?: Record<string, string> | undefined;
        stroke_weight_dict?: Record<string, number> | undefined;
        default_color?: string | undefined;
        opacity?: number | undefined;
        highlight?: {
            value: string | number | boolean;
            field: string;
            color?: string | undefined;
            weight?: number | undefined;
            radius_boost?: number | undefined;
            fill_opacity?: number | undefined;
        } | undefined;
        radius?: number | undefined;
        fillColor?: string | undefined;
        graduated_radius?: {
            field: string;
            method?: "sqrt" | "log" | "linear" | "stepped" | undefined;
            breaks?: number[] | undefined;
            sizes?: number[] | undefined;
            min_radius?: number | undefined;
            max_radius?: number | undefined;
            default_radius?: number | undefined;
        } | undefined;
        fallback_color?: string | undefined;
    } | undefined;
    visible?: boolean | undefined;
    zIndex?: number | undefined;
    labels?: {
        field: string;
        filter?: {
            value: string | number | boolean;
            field: string;
        } | undefined;
        className?: string | undefined;
        position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
        include_list?: string[] | undefined;
        exclude_list?: string[] | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
        collision?: "none" | "hide" | undefined;
        priority_field?: string | undefined;
    } | undefined;
    popup?: {
        type?: "list" | "template" | undefined;
        template?: string | undefined;
        fields?: string[] | undefined;
    } | undefined;
    hover?: {
        template?: string | undefined;
        fields?: string[] | undefined;
        display?: "floating" | "sidebar" | undefined;
        style?: {
            color?: string | undefined;
            weight?: number | undefined;
            fillOpacity?: number | undefined;
        } | undefined;
    } | undefined;
    minZoom?: number | undefined;
    feature_id?: string | undefined;
    description?: string | undefined;
    source?: {
        lat: string;
        csv: string;
        lon: string;
    } | undefined;
    summary?: string | undefined;
    columns?: {
        csv?: string[] | undefined;
        geojson?: string[] | undefined;
    } | undefined;
}>;
export type MinimalLayerYaml = z.infer<typeof MinimalLayerYamlSchema>;
/** What the user writes in map.yaml (root-level) — .passthrough() preserves i18n suffixed fields */
export declare const MinimalMapYamlSchema: z.ZodObject<{
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    basemap: z.ZodOptional<z.ZodEnum<["carto-light", "carto-dark", "carto-voyager", "osm", "satellite", "stamen-toner", "carto-positron", "carto-dark-matter", "carto-voyager-gl", "osm-liberty", "osm-bright", "osm-positron"]>>;
    center: z.ZodOptional<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
    zoom: z.ZodOptional<z.ZodNumber>;
    layers: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    year: z.ZodOptional<z.ZodNumber>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    regions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    behaviors: z.ZodOptional<z.ZodObject<{
        legend: z.ZodOptional<z.ZodObject<{
            position: z.ZodOptional<z.ZodEnum<["topright", "bottomright", "bottomleft", "topleft"]>>;
            layers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            collapsed: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        }, {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        }>>;
        controls: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["layer-toggle", "search"]>;
            layers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            layer: z.ZodOptional<z.ZodString>;
            field: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }, {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }>, "many">>;
        url_state: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        legend?: {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        } | undefined;
        controls?: {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }[] | undefined;
        url_state?: boolean | undefined;
    }, {
        legend?: {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        } | undefined;
        controls?: {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }[] | undefined;
        url_state?: boolean | undefined;
    }>>;
    apiUrl: z.ZodOptional<z.ZodString>;
    apiKey: z.ZodOptional<z.ZodString>;
    defaults: z.ZodOptional<z.ZodObject<{
        basemap: z.ZodOptional<z.ZodEnum<["carto-light", "carto-dark", "carto-voyager", "osm", "satellite", "stamen-toner", "carto-positron", "carto-dark-matter", "carto-voyager-gl", "osm-liberty", "osm-bright", "osm-positron"]>>;
        palette: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        palette?: string | undefined;
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron" | undefined;
    }, {
        palette?: string | undefined;
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron" | undefined;
    }>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    basemap: z.ZodOptional<z.ZodEnum<["carto-light", "carto-dark", "carto-voyager", "osm", "satellite", "stamen-toner", "carto-positron", "carto-dark-matter", "carto-voyager-gl", "osm-liberty", "osm-bright", "osm-positron"]>>;
    center: z.ZodOptional<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
    zoom: z.ZodOptional<z.ZodNumber>;
    layers: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    year: z.ZodOptional<z.ZodNumber>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    regions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    behaviors: z.ZodOptional<z.ZodObject<{
        legend: z.ZodOptional<z.ZodObject<{
            position: z.ZodOptional<z.ZodEnum<["topright", "bottomright", "bottomleft", "topleft"]>>;
            layers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            collapsed: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        }, {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        }>>;
        controls: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["layer-toggle", "search"]>;
            layers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            layer: z.ZodOptional<z.ZodString>;
            field: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }, {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }>, "many">>;
        url_state: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        legend?: {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        } | undefined;
        controls?: {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }[] | undefined;
        url_state?: boolean | undefined;
    }, {
        legend?: {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        } | undefined;
        controls?: {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }[] | undefined;
        url_state?: boolean | undefined;
    }>>;
    apiUrl: z.ZodOptional<z.ZodString>;
    apiKey: z.ZodOptional<z.ZodString>;
    defaults: z.ZodOptional<z.ZodObject<{
        basemap: z.ZodOptional<z.ZodEnum<["carto-light", "carto-dark", "carto-voyager", "osm", "satellite", "stamen-toner", "carto-positron", "carto-dark-matter", "carto-voyager-gl", "osm-liberty", "osm-bright", "osm-positron"]>>;
        palette: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        palette?: string | undefined;
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron" | undefined;
    }, {
        palette?: string | undefined;
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron" | undefined;
    }>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    basemap: z.ZodOptional<z.ZodEnum<["carto-light", "carto-dark", "carto-voyager", "osm", "satellite", "stamen-toner", "carto-positron", "carto-dark-matter", "carto-voyager-gl", "osm-liberty", "osm-bright", "osm-positron"]>>;
    center: z.ZodOptional<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
    zoom: z.ZodOptional<z.ZodNumber>;
    layers: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    year: z.ZodOptional<z.ZodNumber>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    regions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    behaviors: z.ZodOptional<z.ZodObject<{
        legend: z.ZodOptional<z.ZodObject<{
            position: z.ZodOptional<z.ZodEnum<["topright", "bottomright", "bottomleft", "topleft"]>>;
            layers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            collapsed: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        }, {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        }>>;
        controls: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["layer-toggle", "search"]>;
            layers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            layer: z.ZodOptional<z.ZodString>;
            field: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }, {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }>, "many">>;
        url_state: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        legend?: {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        } | undefined;
        controls?: {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }[] | undefined;
        url_state?: boolean | undefined;
    }, {
        legend?: {
            position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
            layers?: string[] | undefined;
            collapsed?: boolean | undefined;
        } | undefined;
        controls?: {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }[] | undefined;
        url_state?: boolean | undefined;
    }>>;
    apiUrl: z.ZodOptional<z.ZodString>;
    apiKey: z.ZodOptional<z.ZodString>;
    defaults: z.ZodOptional<z.ZodObject<{
        basemap: z.ZodOptional<z.ZodEnum<["carto-light", "carto-dark", "carto-voyager", "osm", "satellite", "stamen-toner", "carto-positron", "carto-dark-matter", "carto-voyager-gl", "osm-liberty", "osm-bright", "osm-positron"]>>;
        palette: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        palette?: string | undefined;
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron" | undefined;
    }, {
        palette?: string | undefined;
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron" | undefined;
    }>>;
}, z.ZodTypeAny, "passthrough">>;
export type MinimalMapYaml = z.infer<typeof MinimalMapYamlSchema>;
/**
 * Resolve a minimal layer YAML + its GeoJSON into a full LayerConfig.
 */
export declare function resolveLayerConfig(slug: string, minimal: MinimalLayerYaml, geojson: FeatureCollection, defaultPalette?: string): LayerConfig;
/**
 * Resolve a minimal map YAML + resolved layers into a full MapConfig.
 */
export declare function resolveMapConfig(mapYaml: MinimalMapYaml, resolvedLayers: LayerConfig[], layerGeoJsons: Record<string, FeatureCollection>): MapConfig;
/**
 * Build the full MapMetadata from minimal map YAML.
 * When rawYaml is provided, i18n suffixed fields (title_en, title_pl, etc.) are extracted.
 */
export declare function resolveMetadata(mapYaml: MinimalMapYaml, rawYaml?: Record<string, unknown>): MapMetadata;
/**
 * Infer fields from GeoJSON properties for the LayerYaml format.
 */
export declare function inferFields(geojson: FeatureCollection): Array<{
    name: string;
    type: 'string' | 'number' | 'boolean';
}>;
//# sourceMappingURL=resolve.d.ts.map