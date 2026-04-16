import { z } from 'zod';
/** A map of language code → translated string, e.g. { he: '...', en: '...' } */
export declare const I18nStringSchema: z.ZodRecord<z.ZodString, z.ZodString>;
export type I18nString = z.infer<typeof I18nStringSchema>;
export declare const InlineLayerSchema: z.ZodObject<{
    slug: z.ZodString;
    /** i18n display name; falls back to slug if omitted */
    name: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    /** GeoJSON file path; defaults to {slug}.geojson */
    file: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    visible: z.ZodOptional<z.ZodBoolean>;
    zIndex: z.ZodOptional<z.ZodNumber>;
    minZoom: z.ZodOptional<z.ZodNumber>;
    maxZoom: z.ZodOptional<z.ZodNumber>;
    feature_id: z.ZodOptional<z.ZodString>;
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
}, "strip", z.ZodTypeAny, {
    slug: string;
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
    name?: Record<string, string> | undefined;
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
    description?: Record<string, string> | undefined;
    file?: string | undefined;
}, {
    slug: string;
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
    name?: Record<string, string> | undefined;
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
    description?: Record<string, string> | undefined;
    file?: string | undefined;
}>;
export type InlineLayer = z.infer<typeof InlineLayerSchema>;
export declare const UnifiedResourceSchema: z.ZodObject<{
    file: z.ZodString;
    /** Display name — plain string or i18n object */
    name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>>;
    /** 'GeoJSON' is accepted as a user-friendly alias and normalized to 'JSON' */
    format: z.ZodEffects<z.ZodOptional<z.ZodEnum<["XLSX", "CSV", "JSON", "PDF", "HTML", "DOCX", "ZIP", "TXT", "XLS", "PNG", "JPG", "TIFF", "URL", "UNKNOWN"]>>, "XLSX" | "CSV" | "JSON" | "PDF" | "HTML" | "DOCX" | "ZIP" | "TXT" | "XLS" | "PNG" | "JPG" | "TIFF" | "URL" | "UNKNOWN" | undefined, unknown>;
    is_main_file: z.ZodDefault<z.ZodBoolean>;
    excerpt: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    file: string;
    is_main_file: boolean;
    name?: string | Record<string, string> | undefined;
    format?: "XLSX" | "CSV" | "JSON" | "PDF" | "HTML" | "DOCX" | "ZIP" | "TXT" | "XLS" | "PNG" | "JPG" | "TIFF" | "URL" | "UNKNOWN" | undefined;
    excerpt?: Record<string, string> | undefined;
}, {
    file: string;
    name?: string | Record<string, string> | undefined;
    format?: unknown;
    excerpt?: Record<string, string> | undefined;
    is_main_file?: boolean | undefined;
}>;
export type UnifiedResource = z.infer<typeof UnifiedResourceSchema>;
export declare const DatasetSectionSchema: z.ZodObject<{
    maturity: z.ZodDefault<z.ZodEnum<["Raw", "Preliminary", "Provisional", "Validated"]>>;
    license: z.ZodOptional<z.ZodString>;
    min_year: z.ZodOptional<z.ZodNumber>;
    max_year: z.ZodOptional<z.ZodNumber>;
    citation: z.ZodOptional<z.ZodString>;
    resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
        file: z.ZodString;
        /** Display name — plain string or i18n object */
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>>;
        /** 'GeoJSON' is accepted as a user-friendly alias and normalized to 'JSON' */
        format: z.ZodEffects<z.ZodOptional<z.ZodEnum<["XLSX", "CSV", "JSON", "PDF", "HTML", "DOCX", "ZIP", "TXT", "XLS", "PNG", "JPG", "TIFF", "URL", "UNKNOWN"]>>, "XLSX" | "CSV" | "JSON" | "PDF" | "HTML" | "DOCX" | "ZIP" | "TXT" | "XLS" | "PNG" | "JPG" | "TIFF" | "URL" | "UNKNOWN" | undefined, unknown>;
        is_main_file: z.ZodDefault<z.ZodBoolean>;
        excerpt: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        file: string;
        is_main_file: boolean;
        name?: string | Record<string, string> | undefined;
        format?: "XLSX" | "CSV" | "JSON" | "PDF" | "HTML" | "DOCX" | "ZIP" | "TXT" | "XLS" | "PNG" | "JPG" | "TIFF" | "URL" | "UNKNOWN" | undefined;
        excerpt?: Record<string, string> | undefined;
    }, {
        file: string;
        name?: string | Record<string, string> | undefined;
        format?: unknown;
        excerpt?: Record<string, string> | undefined;
        is_main_file?: boolean | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    maturity: "Provisional" | "Raw" | "Preliminary" | "Validated";
    resources: {
        file: string;
        is_main_file: boolean;
        name?: string | Record<string, string> | undefined;
        format?: "XLSX" | "CSV" | "JSON" | "PDF" | "HTML" | "DOCX" | "ZIP" | "TXT" | "XLS" | "PNG" | "JPG" | "TIFF" | "URL" | "UNKNOWN" | undefined;
        excerpt?: Record<string, string> | undefined;
    }[];
    license?: string | undefined;
    min_year?: number | undefined;
    max_year?: number | undefined;
    citation?: string | undefined;
}, {
    maturity?: "Provisional" | "Raw" | "Preliminary" | "Validated" | undefined;
    license?: string | undefined;
    resources?: {
        file: string;
        name?: string | Record<string, string> | undefined;
        format?: unknown;
        excerpt?: Record<string, string> | undefined;
        is_main_file?: boolean | undefined;
    }[] | undefined;
    min_year?: number | undefined;
    max_year?: number | undefined;
    citation?: string | undefined;
}>;
export type DatasetSection = z.infer<typeof DatasetSectionSchema>;
export declare const MapSectionSchema: z.ZodObject<{
    basemap: z.ZodDefault<z.ZodEnum<["carto-light", "carto-dark", "carto-voyager", "osm", "satellite", "stamen-toner", "carto-positron", "carto-dark-matter", "carto-voyager-gl", "osm-liberty", "osm-bright", "osm-positron"]>>;
    zoom: z.ZodOptional<z.ZodNumber>;
    center: z.ZodOptional<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
    layers: z.ZodDefault<z.ZodArray<z.ZodObject<{
        slug: z.ZodString;
        /** i18n display name; falls back to slug if omitted */
        name: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        /** GeoJSON file path; defaults to {slug}.geojson */
        file: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        visible: z.ZodOptional<z.ZodBoolean>;
        zIndex: z.ZodOptional<z.ZodNumber>;
        minZoom: z.ZodOptional<z.ZodNumber>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        feature_id: z.ZodOptional<z.ZodString>;
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
    }, "strip", z.ZodTypeAny, {
        slug: string;
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
        name?: Record<string, string> | undefined;
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
        description?: Record<string, string> | undefined;
        file?: string | undefined;
    }, {
        slug: string;
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
        name?: Record<string, string> | undefined;
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
        description?: Record<string, string> | undefined;
        file?: string | undefined;
    }>, "many">>;
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
}, "strip", z.ZodTypeAny, {
    layers: {
        slug: string;
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
        name?: Record<string, string> | undefined;
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
        description?: Record<string, string> | undefined;
        file?: string | undefined;
    }[];
    basemap: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron";
    center?: [number, number] | undefined;
    zoom?: number | undefined;
    behaviors?: {
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
    } | undefined;
}, {
    center?: [number, number] | undefined;
    layers?: {
        slug: string;
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
        name?: Record<string, string> | undefined;
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
        description?: Record<string, string> | undefined;
        file?: string | undefined;
    }[] | undefined;
    basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron" | undefined;
    zoom?: number | undefined;
    behaviors?: {
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
    } | undefined;
}>;
export type MapSection = z.infer<typeof MapSectionSchema>;
export declare const UnifiedConfigSchema: z.ZodEffects<z.ZodObject<{
    slug: z.ZodString;
    version: z.ZodDefault<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<["draft", "published", "archived"]>>;
    /** i18n title — applies to both map and dataset unless map_title is set */
    title: z.ZodRecord<z.ZodString, z.ZodString>;
    /** Short summary / tagline (maps to summaryI18n) */
    excerpt: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    /** If set, overrides title for the map entity */
    map_title: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    regions: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    category: z.ZodOptional<z.ZodString>;
    dataset: z.ZodOptional<z.ZodObject<{
        maturity: z.ZodDefault<z.ZodEnum<["Raw", "Preliminary", "Provisional", "Validated"]>>;
        license: z.ZodOptional<z.ZodString>;
        min_year: z.ZodOptional<z.ZodNumber>;
        max_year: z.ZodOptional<z.ZodNumber>;
        citation: z.ZodOptional<z.ZodString>;
        resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
            file: z.ZodString;
            /** Display name — plain string or i18n object */
            name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>>;
            /** 'GeoJSON' is accepted as a user-friendly alias and normalized to 'JSON' */
            format: z.ZodEffects<z.ZodOptional<z.ZodEnum<["XLSX", "CSV", "JSON", "PDF", "HTML", "DOCX", "ZIP", "TXT", "XLS", "PNG", "JPG", "TIFF", "URL", "UNKNOWN"]>>, "XLSX" | "CSV" | "JSON" | "PDF" | "HTML" | "DOCX" | "ZIP" | "TXT" | "XLS" | "PNG" | "JPG" | "TIFF" | "URL" | "UNKNOWN" | undefined, unknown>;
            is_main_file: z.ZodDefault<z.ZodBoolean>;
            excerpt: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            file: string;
            is_main_file: boolean;
            name?: string | Record<string, string> | undefined;
            format?: "XLSX" | "CSV" | "JSON" | "PDF" | "HTML" | "DOCX" | "ZIP" | "TXT" | "XLS" | "PNG" | "JPG" | "TIFF" | "URL" | "UNKNOWN" | undefined;
            excerpt?: Record<string, string> | undefined;
        }, {
            file: string;
            name?: string | Record<string, string> | undefined;
            format?: unknown;
            excerpt?: Record<string, string> | undefined;
            is_main_file?: boolean | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        maturity: "Provisional" | "Raw" | "Preliminary" | "Validated";
        resources: {
            file: string;
            is_main_file: boolean;
            name?: string | Record<string, string> | undefined;
            format?: "XLSX" | "CSV" | "JSON" | "PDF" | "HTML" | "DOCX" | "ZIP" | "TXT" | "XLS" | "PNG" | "JPG" | "TIFF" | "URL" | "UNKNOWN" | undefined;
            excerpt?: Record<string, string> | undefined;
        }[];
        license?: string | undefined;
        min_year?: number | undefined;
        max_year?: number | undefined;
        citation?: string | undefined;
    }, {
        maturity?: "Provisional" | "Raw" | "Preliminary" | "Validated" | undefined;
        license?: string | undefined;
        resources?: {
            file: string;
            name?: string | Record<string, string> | undefined;
            format?: unknown;
            excerpt?: Record<string, string> | undefined;
            is_main_file?: boolean | undefined;
        }[] | undefined;
        min_year?: number | undefined;
        max_year?: number | undefined;
        citation?: string | undefined;
    }>>;
    map: z.ZodOptional<z.ZodObject<{
        basemap: z.ZodDefault<z.ZodEnum<["carto-light", "carto-dark", "carto-voyager", "osm", "satellite", "stamen-toner", "carto-positron", "carto-dark-matter", "carto-voyager-gl", "osm-liberty", "osm-bright", "osm-positron"]>>;
        zoom: z.ZodOptional<z.ZodNumber>;
        center: z.ZodOptional<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
        layers: z.ZodDefault<z.ZodArray<z.ZodObject<{
            slug: z.ZodString;
            /** i18n display name; falls back to slug if omitted */
            name: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            /** GeoJSON file path; defaults to {slug}.geojson */
            file: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            visible: z.ZodOptional<z.ZodBoolean>;
            zIndex: z.ZodOptional<z.ZodNumber>;
            minZoom: z.ZodOptional<z.ZodNumber>;
            maxZoom: z.ZodOptional<z.ZodNumber>;
            feature_id: z.ZodOptional<z.ZodString>;
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
        }, "strip", z.ZodTypeAny, {
            slug: string;
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
            name?: Record<string, string> | undefined;
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
            description?: Record<string, string> | undefined;
            file?: string | undefined;
        }, {
            slug: string;
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
            name?: Record<string, string> | undefined;
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
            description?: Record<string, string> | undefined;
            file?: string | undefined;
        }>, "many">>;
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
    }, "strip", z.ZodTypeAny, {
        layers: {
            slug: string;
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
            name?: Record<string, string> | undefined;
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
            description?: Record<string, string> | undefined;
            file?: string | undefined;
        }[];
        basemap: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron";
        center?: [number, number] | undefined;
        zoom?: number | undefined;
        behaviors?: {
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
        } | undefined;
    }, {
        center?: [number, number] | undefined;
        layers?: {
            slug: string;
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
            name?: Record<string, string> | undefined;
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
            description?: Record<string, string> | undefined;
            file?: string | undefined;
        }[] | undefined;
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron" | undefined;
        zoom?: number | undefined;
        behaviors?: {
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
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "published" | "archived";
    slug: string;
    title: Record<string, string>;
    tags: string[];
    regions: string[];
    version: string;
    map?: {
        layers: {
            slug: string;
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
            name?: Record<string, string> | undefined;
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
            description?: Record<string, string> | undefined;
            file?: string | undefined;
        }[];
        basemap: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron";
        center?: [number, number] | undefined;
        zoom?: number | undefined;
        behaviors?: {
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
        } | undefined;
    } | undefined;
    category?: string | undefined;
    excerpt?: Record<string, string> | undefined;
    map_title?: Record<string, string> | undefined;
    dataset?: {
        maturity: "Provisional" | "Raw" | "Preliminary" | "Validated";
        resources: {
            file: string;
            is_main_file: boolean;
            name?: string | Record<string, string> | undefined;
            format?: "XLSX" | "CSV" | "JSON" | "PDF" | "HTML" | "DOCX" | "ZIP" | "TXT" | "XLS" | "PNG" | "JPG" | "TIFF" | "URL" | "UNKNOWN" | undefined;
            excerpt?: Record<string, string> | undefined;
        }[];
        license?: string | undefined;
        min_year?: number | undefined;
        max_year?: number | undefined;
        citation?: string | undefined;
    } | undefined;
}, {
    slug: string;
    title: Record<string, string>;
    map?: {
        center?: [number, number] | undefined;
        layers?: {
            slug: string;
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
            name?: Record<string, string> | undefined;
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
            description?: Record<string, string> | undefined;
            file?: string | undefined;
        }[] | undefined;
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron" | undefined;
        zoom?: number | undefined;
        behaviors?: {
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
        } | undefined;
    } | undefined;
    status?: "draft" | "published" | "archived" | undefined;
    category?: string | undefined;
    tags?: string[] | undefined;
    regions?: string[] | undefined;
    excerpt?: Record<string, string> | undefined;
    version?: string | undefined;
    map_title?: Record<string, string> | undefined;
    dataset?: {
        maturity?: "Provisional" | "Raw" | "Preliminary" | "Validated" | undefined;
        license?: string | undefined;
        resources?: {
            file: string;
            name?: string | Record<string, string> | undefined;
            format?: unknown;
            excerpt?: Record<string, string> | undefined;
            is_main_file?: boolean | undefined;
        }[] | undefined;
        min_year?: number | undefined;
        max_year?: number | undefined;
        citation?: string | undefined;
    } | undefined;
}>, {
    status: "draft" | "published" | "archived";
    slug: string;
    title: Record<string, string>;
    tags: string[];
    regions: string[];
    version: string;
    map?: {
        layers: {
            slug: string;
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
            name?: Record<string, string> | undefined;
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
            description?: Record<string, string> | undefined;
            file?: string | undefined;
        }[];
        basemap: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron";
        center?: [number, number] | undefined;
        zoom?: number | undefined;
        behaviors?: {
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
        } | undefined;
    } | undefined;
    category?: string | undefined;
    excerpt?: Record<string, string> | undefined;
    map_title?: Record<string, string> | undefined;
    dataset?: {
        maturity: "Provisional" | "Raw" | "Preliminary" | "Validated";
        resources: {
            file: string;
            is_main_file: boolean;
            name?: string | Record<string, string> | undefined;
            format?: "XLSX" | "CSV" | "JSON" | "PDF" | "HTML" | "DOCX" | "ZIP" | "TXT" | "XLS" | "PNG" | "JPG" | "TIFF" | "URL" | "UNKNOWN" | undefined;
            excerpt?: Record<string, string> | undefined;
        }[];
        license?: string | undefined;
        min_year?: number | undefined;
        max_year?: number | undefined;
        citation?: string | undefined;
    } | undefined;
}, {
    slug: string;
    title: Record<string, string>;
    map?: {
        center?: [number, number] | undefined;
        layers?: {
            slug: string;
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
            name?: Record<string, string> | undefined;
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
            description?: Record<string, string> | undefined;
            file?: string | undefined;
        }[] | undefined;
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | "carto-positron" | "carto-dark-matter" | "carto-voyager-gl" | "osm-liberty" | "osm-bright" | "osm-positron" | undefined;
        zoom?: number | undefined;
        behaviors?: {
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
        } | undefined;
    } | undefined;
    status?: "draft" | "published" | "archived" | undefined;
    category?: string | undefined;
    tags?: string[] | undefined;
    regions?: string[] | undefined;
    excerpt?: Record<string, string> | undefined;
    version?: string | undefined;
    map_title?: Record<string, string> | undefined;
    dataset?: {
        maturity?: "Provisional" | "Raw" | "Preliminary" | "Validated" | undefined;
        license?: string | undefined;
        resources?: {
            file: string;
            name?: string | Record<string, string> | undefined;
            format?: unknown;
            excerpt?: Record<string, string> | undefined;
            is_main_file?: boolean | undefined;
        }[] | undefined;
        min_year?: number | undefined;
        max_year?: number | undefined;
        citation?: string | undefined;
    } | undefined;
}>;
export type UnifiedConfig = z.infer<typeof UnifiedConfigSchema>;
/**
 * Returns the best single-string title from an i18n title map.
 * Priority: he → en → pl → first defined value.
 */
export declare function getPrimaryTitle(title: I18nString): string;
/**
 * Returns the resolved title i18n map for a config, applying map_title override when forMap=true.
 */
export declare function resolveConfigTitle(config: UnifiedConfig, forMap?: boolean): I18nString;
/**
 * Returns the GeoJSON file path for a layer.
 * Falls back to {slug}.geojson if file is not explicitly set.
 */
export declare function getLayerFile(layer: Pick<InlineLayer, 'slug' | 'file'>): string;
/**
 * Normalizes a resource name to a plain string for API payloads.
 * If name is an i18n object, returns the primary value.
 */
export declare function getResourceName(name: string | I18nString | undefined, fallback: string): string;
//# sourceMappingURL=unified-config.d.ts.map