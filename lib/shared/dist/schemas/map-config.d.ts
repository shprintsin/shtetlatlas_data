import { z } from 'zod';
export declare const TileConfigSchema: z.ZodObject<{
    src: z.ZodString;
    maxZoom: z.ZodDefault<z.ZodNumber>;
    subdomains: z.ZodDefault<z.ZodString>;
    attribution: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    src: string;
    maxZoom: number;
    subdomains: string;
    attribution: string;
}, {
    src: string;
    maxZoom?: number | undefined;
    subdomains?: string | undefined;
    attribution?: string | undefined;
}>;
export type TileConfig = z.infer<typeof TileConfigSchema>;
export declare const FilterConfigSchema: z.ZodObject<{
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
export type FilterConfig = z.infer<typeof FilterConfigSchema>;
export declare const LabelConfigSchema: z.ZodObject<{
    show: z.ZodDefault<z.ZodBoolean>;
    field: z.ZodString;
    className: z.ZodDefault<z.ZodString>;
    position: z.ZodDefault<z.ZodEnum<["center", "top", "bottom", "left", "right"]>>;
    include_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    exclude_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    fontSize: z.ZodOptional<z.ZodNumber>;
    fontColor: z.ZodOptional<z.ZodString>;
    fontFamily: z.ZodOptional<z.ZodString>;
    fontWeight: z.ZodOptional<z.ZodEnum<["normal", "bold", "400", "500", "600", "700"]>>;
}, "strip", z.ZodTypeAny, {
    field: string;
    show: boolean;
    className: string;
    position: "center" | "top" | "bottom" | "left" | "right";
    include_list?: string[] | undefined;
    exclude_list?: string[] | undefined;
    fontSize?: number | undefined;
    fontColor?: string | undefined;
    fontFamily?: string | undefined;
    fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
}, {
    field: string;
    show?: boolean | undefined;
    className?: string | undefined;
    position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
    include_list?: string[] | undefined;
    exclude_list?: string[] | undefined;
    fontSize?: number | undefined;
    fontColor?: string | undefined;
    fontFamily?: string | undefined;
    fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
}>;
export type LabelConfig = z.infer<typeof LabelConfigSchema>;
export declare const PopupConfigSchema: z.ZodObject<{
    show: z.ZodDefault<z.ZodBoolean>;
    type: z.ZodDefault<z.ZodEnum<["list", "template"]>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    template: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "list" | "template";
    show: boolean;
    template?: string | undefined;
    fields?: string[] | undefined;
}, {
    type?: "list" | "template" | undefined;
    template?: string | undefined;
    show?: boolean | undefined;
    fields?: string[] | undefined;
}>;
export type PopupConfig = z.infer<typeof PopupConfigSchema>;
export declare const GraduatedStyleConfigSchema: z.ZodObject<{
    field: z.ZodString;
    method: z.ZodDefault<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
    classes: z.ZodDefault<z.ZodNumber>;
    colorRamp: z.ZodObject<{
        start: z.ZodString;
        end: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        start: string;
        end: string;
    }, {
        start: string;
        end: string;
    }>;
    breaks: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    field: string;
    method: "equal_interval" | "quantile" | "custom";
    classes: number;
    colorRamp: {
        start: string;
        end: string;
    };
    breaks: number[];
}, {
    field: string;
    colorRamp: {
        start: string;
        end: string;
    };
    method?: "equal_interval" | "quantile" | "custom" | undefined;
    classes?: number | undefined;
    breaks?: number[] | undefined;
}>;
export type GraduatedStyleConfig = z.infer<typeof GraduatedStyleConfigSchema>;
export declare const PolygonStyleConfigSchema: z.ZodObject<{
    type: z.ZodDefault<z.ZodEnum<["simple", "category", "graduated"]>>;
    field: z.ZodOptional<z.ZodString>;
    color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    graduated: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        method: z.ZodDefault<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
        classes: z.ZodDefault<z.ZodNumber>;
        colorRamp: z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            start: string;
            end: string;
        }, {
            start: string;
            end: string;
        }>;
        breaks: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        method: "equal_interval" | "quantile" | "custom";
        classes: number;
        colorRamp: {
            start: string;
            end: string;
        };
        breaks: number[];
    }, {
        field: string;
        colorRamp: {
            start: string;
            end: string;
        };
        method?: "equal_interval" | "quantile" | "custom" | undefined;
        classes?: number | undefined;
        breaks?: number[] | undefined;
    }>>;
    default_color: z.ZodDefault<z.ZodString>;
    opacity: z.ZodDefault<z.ZodNumber>;
    weight: z.ZodDefault<z.ZodNumber>;
    color: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "simple" | "category" | "graduated";
    default_color: string;
    opacity: number;
    weight: number;
    color: string;
    graduated?: {
        field: string;
        method: "equal_interval" | "quantile" | "custom";
        classes: number;
        colorRamp: {
            start: string;
            end: string;
        };
        breaks: number[];
    } | undefined;
    field?: string | undefined;
    color_dict?: Record<string, string> | undefined;
}, {
    type?: "simple" | "category" | "graduated" | undefined;
    graduated?: {
        field: string;
        colorRamp: {
            start: string;
            end: string;
        };
        method?: "equal_interval" | "quantile" | "custom" | undefined;
        classes?: number | undefined;
        breaks?: number[] | undefined;
    } | undefined;
    field?: string | undefined;
    color_dict?: Record<string, string> | undefined;
    default_color?: string | undefined;
    opacity?: number | undefined;
    weight?: number | undefined;
    color?: string | undefined;
}>;
export type PolygonStyleConfig = z.infer<typeof PolygonStyleConfigSchema>;
export declare const PointStyleConfigSchema: z.ZodObject<{
    type: z.ZodDefault<z.ZodEnum<["simple", "category", "graduated"]>>;
    field: z.ZodOptional<z.ZodString>;
    color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    graduated: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        method: z.ZodDefault<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
        classes: z.ZodDefault<z.ZodNumber>;
        colorRamp: z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            start: string;
            end: string;
        }, {
            start: string;
            end: string;
        }>;
        breaks: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        method: "equal_interval" | "quantile" | "custom";
        classes: number;
        colorRamp: {
            start: string;
            end: string;
        };
        breaks: number[];
    }, {
        field: string;
        colorRamp: {
            start: string;
            end: string;
        };
        method?: "equal_interval" | "quantile" | "custom" | undefined;
        classes?: number | undefined;
        breaks?: number[] | undefined;
    }>>;
    radius: z.ZodDefault<z.ZodNumber>;
    fillColor: z.ZodDefault<z.ZodString>;
    color: z.ZodDefault<z.ZodString>;
    weight: z.ZodDefault<z.ZodNumber>;
    fillOpacity: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "simple" | "category" | "graduated";
    weight: number;
    color: string;
    radius: number;
    fillColor: string;
    fillOpacity: number;
    graduated?: {
        field: string;
        method: "equal_interval" | "quantile" | "custom";
        classes: number;
        colorRamp: {
            start: string;
            end: string;
        };
        breaks: number[];
    } | undefined;
    field?: string | undefined;
    color_dict?: Record<string, string> | undefined;
}, {
    type?: "simple" | "category" | "graduated" | undefined;
    graduated?: {
        field: string;
        colorRamp: {
            start: string;
            end: string;
        };
        method?: "equal_interval" | "quantile" | "custom" | undefined;
        classes?: number | undefined;
        breaks?: number[] | undefined;
    } | undefined;
    field?: string | undefined;
    color_dict?: Record<string, string> | undefined;
    weight?: number | undefined;
    color?: string | undefined;
    radius?: number | undefined;
    fillColor?: string | undefined;
    fillOpacity?: number | undefined;
}>;
export type PointStyleConfig = z.infer<typeof PointStyleConfigSchema>;
export declare const HoverPanelConfigSchema: z.ZodObject<{
    fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    template: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    template?: string | undefined;
    fields?: string[] | undefined;
}, {
    template?: string | undefined;
    fields?: string[] | undefined;
}>;
export type HoverPanelConfig = z.infer<typeof HoverPanelConfigSchema>;
export declare const HoverConfigSchema: z.ZodObject<{
    enable: z.ZodDefault<z.ZodBoolean>;
    display: z.ZodOptional<z.ZodDefault<z.ZodEnum<["floating", "sidebar"]>>>;
    style: z.ZodOptional<z.ZodObject<{
        fillOpacity: z.ZodOptional<z.ZodNumber>;
        weight: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        weight?: number | undefined;
        color?: string | undefined;
        fillOpacity?: number | undefined;
    }, {
        weight?: number | undefined;
        color?: string | undefined;
        fillOpacity?: number | undefined;
    }>>;
    panel: z.ZodOptional<z.ZodObject<{
        fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        template: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        template?: string | undefined;
        fields?: string[] | undefined;
    }, {
        template?: string | undefined;
        fields?: string[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    enable: boolean;
    display?: "floating" | "sidebar" | undefined;
    style?: {
        weight?: number | undefined;
        color?: string | undefined;
        fillOpacity?: number | undefined;
    } | undefined;
    panel?: {
        template?: string | undefined;
        fields?: string[] | undefined;
    } | undefined;
}, {
    enable?: boolean | undefined;
    display?: "floating" | "sidebar" | undefined;
    style?: {
        weight?: number | undefined;
        color?: string | undefined;
        fillOpacity?: number | undefined;
    } | undefined;
    panel?: {
        template?: string | undefined;
        fields?: string[] | undefined;
    } | undefined;
}>;
export type HoverConfig = z.infer<typeof HoverConfigSchema>;
export declare const LayerConfigSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    type: z.ZodEnum<["polygon", "point"]>;
    sourceType: z.ZodOptional<z.ZodEnum<["url", "database", "inline"]>>;
    data: z.ZodOptional<z.ZodAny>;
    url: z.ZodOptional<z.ZodString>;
    visible: z.ZodDefault<z.ZodBoolean>;
    zIndex: z.ZodOptional<z.ZodNumber>;
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
    style: z.ZodUnion<[z.ZodObject<{
        type: z.ZodDefault<z.ZodEnum<["simple", "category", "graduated"]>>;
        field: z.ZodOptional<z.ZodString>;
        color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        graduated: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            method: z.ZodDefault<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
            classes: z.ZodDefault<z.ZodNumber>;
            colorRamp: z.ZodObject<{
                start: z.ZodString;
                end: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                start: string;
                end: string;
            }, {
                start: string;
                end: string;
            }>;
            breaks: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        }, {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        }>>;
        default_color: z.ZodDefault<z.ZodString>;
        opacity: z.ZodDefault<z.ZodNumber>;
        weight: z.ZodDefault<z.ZodNumber>;
        color: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "simple" | "category" | "graduated";
        default_color: string;
        opacity: number;
        weight: number;
        color: string;
        graduated?: {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
    }, {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        default_color?: string | undefined;
        opacity?: number | undefined;
        weight?: number | undefined;
        color?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodDefault<z.ZodEnum<["simple", "category", "graduated"]>>;
        field: z.ZodOptional<z.ZodString>;
        color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        graduated: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            method: z.ZodDefault<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
            classes: z.ZodDefault<z.ZodNumber>;
            colorRamp: z.ZodObject<{
                start: z.ZodString;
                end: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                start: string;
                end: string;
            }, {
                start: string;
                end: string;
            }>;
            breaks: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        }, {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        }>>;
        radius: z.ZodDefault<z.ZodNumber>;
        fillColor: z.ZodDefault<z.ZodString>;
        color: z.ZodDefault<z.ZodString>;
        weight: z.ZodDefault<z.ZodNumber>;
        fillOpacity: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "simple" | "category" | "graduated";
        weight: number;
        color: string;
        radius: number;
        fillColor: string;
        fillOpacity: number;
        graduated?: {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
    }, {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        weight?: number | undefined;
        color?: string | undefined;
        radius?: number | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
    }>]>;
    labels: z.ZodOptional<z.ZodObject<{
        show: z.ZodDefault<z.ZodBoolean>;
        field: z.ZodString;
        className: z.ZodDefault<z.ZodString>;
        position: z.ZodDefault<z.ZodEnum<["center", "top", "bottom", "left", "right"]>>;
        include_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        exclude_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        fontSize: z.ZodOptional<z.ZodNumber>;
        fontColor: z.ZodOptional<z.ZodString>;
        fontFamily: z.ZodOptional<z.ZodString>;
        fontWeight: z.ZodOptional<z.ZodEnum<["normal", "bold", "400", "500", "600", "700"]>>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        show: boolean;
        className: string;
        position: "center" | "top" | "bottom" | "left" | "right";
        include_list?: string[] | undefined;
        exclude_list?: string[] | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
    }, {
        field: string;
        show?: boolean | undefined;
        className?: string | undefined;
        position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
        include_list?: string[] | undefined;
        exclude_list?: string[] | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
    }>>;
    popup: z.ZodOptional<z.ZodObject<{
        show: z.ZodDefault<z.ZodBoolean>;
        type: z.ZodDefault<z.ZodEnum<["list", "template"]>>;
        fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        template: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "list" | "template";
        show: boolean;
        template?: string | undefined;
        fields?: string[] | undefined;
    }, {
        type?: "list" | "template" | undefined;
        template?: string | undefined;
        show?: boolean | undefined;
        fields?: string[] | undefined;
    }>>;
    hover: z.ZodOptional<z.ZodObject<{
        enable: z.ZodDefault<z.ZodBoolean>;
        display: z.ZodOptional<z.ZodDefault<z.ZodEnum<["floating", "sidebar"]>>>;
        style: z.ZodOptional<z.ZodObject<{
            fillOpacity: z.ZodOptional<z.ZodNumber>;
            weight: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            weight?: number | undefined;
            color?: string | undefined;
            fillOpacity?: number | undefined;
        }, {
            weight?: number | undefined;
            color?: string | undefined;
            fillOpacity?: number | undefined;
        }>>;
        panel: z.ZodOptional<z.ZodObject<{
            fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            template: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            template?: string | undefined;
            fields?: string[] | undefined;
        }, {
            template?: string | undefined;
            fields?: string[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        enable: boolean;
        display?: "floating" | "sidebar" | undefined;
        style?: {
            weight?: number | undefined;
            color?: string | undefined;
            fillOpacity?: number | undefined;
        } | undefined;
        panel?: {
            template?: string | undefined;
            fields?: string[] | undefined;
        } | undefined;
    }, {
        enable?: boolean | undefined;
        display?: "floating" | "sidebar" | undefined;
        style?: {
            weight?: number | undefined;
            color?: string | undefined;
            fillOpacity?: number | undefined;
        } | undefined;
        panel?: {
            template?: string | undefined;
            fields?: string[] | undefined;
        } | undefined;
    }>>;
    minZoom: z.ZodOptional<z.ZodNumber>;
    maxZoom: z.ZodOptional<z.ZodNumber>;
    feature_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "polygon" | "point";
    style: {
        type: "simple" | "category" | "graduated";
        default_color: string;
        opacity: number;
        weight: number;
        color: string;
        graduated?: {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
    } | {
        type: "simple" | "category" | "graduated";
        weight: number;
        color: string;
        radius: number;
        fillColor: string;
        fillOpacity: number;
        graduated?: {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
    };
    name: string;
    visible: boolean;
    filter?: {
        field: string;
        exclude?: string[] | undefined;
        include?: string[] | undefined;
    } | undefined;
    url?: string | undefined;
    maxZoom?: number | undefined;
    id?: string | undefined;
    slug?: string | undefined;
    sourceType?: "url" | "database" | "inline" | undefined;
    data?: any;
    zIndex?: number | undefined;
    labels?: {
        field: string;
        show: boolean;
        className: string;
        position: "center" | "top" | "bottom" | "left" | "right";
        include_list?: string[] | undefined;
        exclude_list?: string[] | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
    } | undefined;
    popup?: {
        type: "list" | "template";
        show: boolean;
        template?: string | undefined;
        fields?: string[] | undefined;
    } | undefined;
    hover?: {
        enable: boolean;
        display?: "floating" | "sidebar" | undefined;
        style?: {
            weight?: number | undefined;
            color?: string | undefined;
            fillOpacity?: number | undefined;
        } | undefined;
        panel?: {
            template?: string | undefined;
            fields?: string[] | undefined;
        } | undefined;
    } | undefined;
    minZoom?: number | undefined;
    feature_id?: string | undefined;
}, {
    type: "polygon" | "point";
    style: {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        default_color?: string | undefined;
        opacity?: number | undefined;
        weight?: number | undefined;
        color?: string | undefined;
    } | {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        weight?: number | undefined;
        color?: string | undefined;
        radius?: number | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
    };
    name: string;
    filter?: {
        field: string;
        exclude?: string[] | undefined;
        include?: string[] | undefined;
    } | undefined;
    url?: string | undefined;
    maxZoom?: number | undefined;
    id?: string | undefined;
    slug?: string | undefined;
    sourceType?: "url" | "database" | "inline" | undefined;
    data?: any;
    visible?: boolean | undefined;
    zIndex?: number | undefined;
    labels?: {
        field: string;
        show?: boolean | undefined;
        className?: string | undefined;
        position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
        include_list?: string[] | undefined;
        exclude_list?: string[] | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
    } | undefined;
    popup?: {
        type?: "list" | "template" | undefined;
        template?: string | undefined;
        show?: boolean | undefined;
        fields?: string[] | undefined;
    } | undefined;
    hover?: {
        enable?: boolean | undefined;
        display?: "floating" | "sidebar" | undefined;
        style?: {
            weight?: number | undefined;
            color?: string | undefined;
            fillOpacity?: number | undefined;
        } | undefined;
        panel?: {
            template?: string | undefined;
            fields?: string[] | undefined;
        } | undefined;
    } | undefined;
    minZoom?: number | undefined;
    feature_id?: string | undefined;
}>;
export type LayerConfig = z.infer<typeof LayerConfigSchema>;
export declare const LegendConfigSchema: z.ZodObject<{
    position: z.ZodDefault<z.ZodEnum<["topright", "bottomright", "bottomleft", "topleft"]>>;
    layers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    collapsed: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    position: "topright" | "bottomright" | "bottomleft" | "topleft";
    collapsed: boolean;
    layers?: string[] | undefined;
}, {
    position?: "topright" | "bottomright" | "bottomleft" | "topleft" | undefined;
    layers?: string[] | undefined;
    collapsed?: boolean | undefined;
}>;
export type LegendConfig = z.infer<typeof LegendConfigSchema>;
export declare const ControlConfigSchema: z.ZodObject<{
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
}>;
export type ControlConfig = z.infer<typeof ControlConfigSchema>;
export declare const BehaviorsSchema: z.ZodOptional<z.ZodObject<{
    legend: z.ZodOptional<z.ZodObject<{
        position: z.ZodDefault<z.ZodEnum<["topright", "bottomright", "bottomleft", "topleft"]>>;
        layers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        collapsed: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        position: "topright" | "bottomright" | "bottomleft" | "topleft";
        collapsed: boolean;
        layers?: string[] | undefined;
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
    url_state: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    url_state: boolean;
    legend?: {
        position: "topright" | "bottomright" | "bottomleft" | "topleft";
        collapsed: boolean;
        layers?: string[] | undefined;
    } | undefined;
    controls?: {
        type: "layer-toggle" | "search";
        field?: string | undefined;
        layers?: string[] | undefined;
        layer?: string | undefined;
    }[] | undefined;
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
export type Behaviors = z.infer<typeof BehaviorsSchema>;
export declare const MapConfigSchema: z.ZodObject<{
    schema: z.ZodDefault<z.ZodNumber>;
    basemap: z.ZodDefault<z.ZodEnum<["carto-light", "carto-dark", "carto-voyager", "osm", "satellite", "stamen-toner"]>>;
    center: z.ZodDefault<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
    zoom: z.ZodDefault<z.ZodNumber>;
    layers: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        slug: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        type: z.ZodEnum<["polygon", "point"]>;
        sourceType: z.ZodOptional<z.ZodEnum<["url", "database", "inline"]>>;
        data: z.ZodOptional<z.ZodAny>;
        url: z.ZodOptional<z.ZodString>;
        visible: z.ZodDefault<z.ZodBoolean>;
        zIndex: z.ZodOptional<z.ZodNumber>;
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
        style: z.ZodUnion<[z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<["simple", "category", "graduated"]>>;
            field: z.ZodOptional<z.ZodString>;
            color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            graduated: z.ZodOptional<z.ZodObject<{
                field: z.ZodString;
                method: z.ZodDefault<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
                classes: z.ZodDefault<z.ZodNumber>;
                colorRamp: z.ZodObject<{
                    start: z.ZodString;
                    end: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    start: string;
                    end: string;
                }, {
                    start: string;
                    end: string;
                }>;
                breaks: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
            }, "strip", z.ZodTypeAny, {
                field: string;
                method: "equal_interval" | "quantile" | "custom";
                classes: number;
                colorRamp: {
                    start: string;
                    end: string;
                };
                breaks: number[];
            }, {
                field: string;
                colorRamp: {
                    start: string;
                    end: string;
                };
                method?: "equal_interval" | "quantile" | "custom" | undefined;
                classes?: number | undefined;
                breaks?: number[] | undefined;
            }>>;
            default_color: z.ZodDefault<z.ZodString>;
            opacity: z.ZodDefault<z.ZodNumber>;
            weight: z.ZodDefault<z.ZodNumber>;
            color: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "simple" | "category" | "graduated";
            default_color: string;
            opacity: number;
            weight: number;
            color: string;
            graduated?: {
                field: string;
                method: "equal_interval" | "quantile" | "custom";
                classes: number;
                colorRamp: {
                    start: string;
                    end: string;
                };
                breaks: number[];
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
        }, {
            type?: "simple" | "category" | "graduated" | undefined;
            graduated?: {
                field: string;
                colorRamp: {
                    start: string;
                    end: string;
                };
                method?: "equal_interval" | "quantile" | "custom" | undefined;
                classes?: number | undefined;
                breaks?: number[] | undefined;
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
            default_color?: string | undefined;
            opacity?: number | undefined;
            weight?: number | undefined;
            color?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<["simple", "category", "graduated"]>>;
            field: z.ZodOptional<z.ZodString>;
            color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            graduated: z.ZodOptional<z.ZodObject<{
                field: z.ZodString;
                method: z.ZodDefault<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
                classes: z.ZodDefault<z.ZodNumber>;
                colorRamp: z.ZodObject<{
                    start: z.ZodString;
                    end: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    start: string;
                    end: string;
                }, {
                    start: string;
                    end: string;
                }>;
                breaks: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
            }, "strip", z.ZodTypeAny, {
                field: string;
                method: "equal_interval" | "quantile" | "custom";
                classes: number;
                colorRamp: {
                    start: string;
                    end: string;
                };
                breaks: number[];
            }, {
                field: string;
                colorRamp: {
                    start: string;
                    end: string;
                };
                method?: "equal_interval" | "quantile" | "custom" | undefined;
                classes?: number | undefined;
                breaks?: number[] | undefined;
            }>>;
            radius: z.ZodDefault<z.ZodNumber>;
            fillColor: z.ZodDefault<z.ZodString>;
            color: z.ZodDefault<z.ZodString>;
            weight: z.ZodDefault<z.ZodNumber>;
            fillOpacity: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "simple" | "category" | "graduated";
            weight: number;
            color: string;
            radius: number;
            fillColor: string;
            fillOpacity: number;
            graduated?: {
                field: string;
                method: "equal_interval" | "quantile" | "custom";
                classes: number;
                colorRamp: {
                    start: string;
                    end: string;
                };
                breaks: number[];
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
        }, {
            type?: "simple" | "category" | "graduated" | undefined;
            graduated?: {
                field: string;
                colorRamp: {
                    start: string;
                    end: string;
                };
                method?: "equal_interval" | "quantile" | "custom" | undefined;
                classes?: number | undefined;
                breaks?: number[] | undefined;
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
            weight?: number | undefined;
            color?: string | undefined;
            radius?: number | undefined;
            fillColor?: string | undefined;
            fillOpacity?: number | undefined;
        }>]>;
        labels: z.ZodOptional<z.ZodObject<{
            show: z.ZodDefault<z.ZodBoolean>;
            field: z.ZodString;
            className: z.ZodDefault<z.ZodString>;
            position: z.ZodDefault<z.ZodEnum<["center", "top", "bottom", "left", "right"]>>;
            include_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            exclude_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontColor: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodString>;
            fontWeight: z.ZodOptional<z.ZodEnum<["normal", "bold", "400", "500", "600", "700"]>>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            show: boolean;
            className: string;
            position: "center" | "top" | "bottom" | "left" | "right";
            include_list?: string[] | undefined;
            exclude_list?: string[] | undefined;
            fontSize?: number | undefined;
            fontColor?: string | undefined;
            fontFamily?: string | undefined;
            fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
        }, {
            field: string;
            show?: boolean | undefined;
            className?: string | undefined;
            position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
            include_list?: string[] | undefined;
            exclude_list?: string[] | undefined;
            fontSize?: number | undefined;
            fontColor?: string | undefined;
            fontFamily?: string | undefined;
            fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
        }>>;
        popup: z.ZodOptional<z.ZodObject<{
            show: z.ZodDefault<z.ZodBoolean>;
            type: z.ZodDefault<z.ZodEnum<["list", "template"]>>;
            fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            template: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "list" | "template";
            show: boolean;
            template?: string | undefined;
            fields?: string[] | undefined;
        }, {
            type?: "list" | "template" | undefined;
            template?: string | undefined;
            show?: boolean | undefined;
            fields?: string[] | undefined;
        }>>;
        hover: z.ZodOptional<z.ZodObject<{
            enable: z.ZodDefault<z.ZodBoolean>;
            display: z.ZodOptional<z.ZodDefault<z.ZodEnum<["floating", "sidebar"]>>>;
            style: z.ZodOptional<z.ZodObject<{
                fillOpacity: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodNumber>;
                color: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                weight?: number | undefined;
                color?: string | undefined;
                fillOpacity?: number | undefined;
            }, {
                weight?: number | undefined;
                color?: string | undefined;
                fillOpacity?: number | undefined;
            }>>;
            panel: z.ZodOptional<z.ZodObject<{
                fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                template: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                template?: string | undefined;
                fields?: string[] | undefined;
            }, {
                template?: string | undefined;
                fields?: string[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            enable: boolean;
            display?: "floating" | "sidebar" | undefined;
            style?: {
                weight?: number | undefined;
                color?: string | undefined;
                fillOpacity?: number | undefined;
            } | undefined;
            panel?: {
                template?: string | undefined;
                fields?: string[] | undefined;
            } | undefined;
        }, {
            enable?: boolean | undefined;
            display?: "floating" | "sidebar" | undefined;
            style?: {
                weight?: number | undefined;
                color?: string | undefined;
                fillOpacity?: number | undefined;
            } | undefined;
            panel?: {
                template?: string | undefined;
                fields?: string[] | undefined;
            } | undefined;
        }>>;
        minZoom: z.ZodOptional<z.ZodNumber>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        feature_id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "polygon" | "point";
        style: {
            type: "simple" | "category" | "graduated";
            default_color: string;
            opacity: number;
            weight: number;
            color: string;
            graduated?: {
                field: string;
                method: "equal_interval" | "quantile" | "custom";
                classes: number;
                colorRamp: {
                    start: string;
                    end: string;
                };
                breaks: number[];
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
        } | {
            type: "simple" | "category" | "graduated";
            weight: number;
            color: string;
            radius: number;
            fillColor: string;
            fillOpacity: number;
            graduated?: {
                field: string;
                method: "equal_interval" | "quantile" | "custom";
                classes: number;
                colorRamp: {
                    start: string;
                    end: string;
                };
                breaks: number[];
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
        };
        name: string;
        visible: boolean;
        filter?: {
            field: string;
            exclude?: string[] | undefined;
            include?: string[] | undefined;
        } | undefined;
        url?: string | undefined;
        maxZoom?: number | undefined;
        id?: string | undefined;
        slug?: string | undefined;
        sourceType?: "url" | "database" | "inline" | undefined;
        data?: any;
        zIndex?: number | undefined;
        labels?: {
            field: string;
            show: boolean;
            className: string;
            position: "center" | "top" | "bottom" | "left" | "right";
            include_list?: string[] | undefined;
            exclude_list?: string[] | undefined;
            fontSize?: number | undefined;
            fontColor?: string | undefined;
            fontFamily?: string | undefined;
            fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
        } | undefined;
        popup?: {
            type: "list" | "template";
            show: boolean;
            template?: string | undefined;
            fields?: string[] | undefined;
        } | undefined;
        hover?: {
            enable: boolean;
            display?: "floating" | "sidebar" | undefined;
            style?: {
                weight?: number | undefined;
                color?: string | undefined;
                fillOpacity?: number | undefined;
            } | undefined;
            panel?: {
                template?: string | undefined;
                fields?: string[] | undefined;
            } | undefined;
        } | undefined;
        minZoom?: number | undefined;
        feature_id?: string | undefined;
    }, {
        type: "polygon" | "point";
        style: {
            type?: "simple" | "category" | "graduated" | undefined;
            graduated?: {
                field: string;
                colorRamp: {
                    start: string;
                    end: string;
                };
                method?: "equal_interval" | "quantile" | "custom" | undefined;
                classes?: number | undefined;
                breaks?: number[] | undefined;
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
            default_color?: string | undefined;
            opacity?: number | undefined;
            weight?: number | undefined;
            color?: string | undefined;
        } | {
            type?: "simple" | "category" | "graduated" | undefined;
            graduated?: {
                field: string;
                colorRamp: {
                    start: string;
                    end: string;
                };
                method?: "equal_interval" | "quantile" | "custom" | undefined;
                classes?: number | undefined;
                breaks?: number[] | undefined;
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
            weight?: number | undefined;
            color?: string | undefined;
            radius?: number | undefined;
            fillColor?: string | undefined;
            fillOpacity?: number | undefined;
        };
        name: string;
        filter?: {
            field: string;
            exclude?: string[] | undefined;
            include?: string[] | undefined;
        } | undefined;
        url?: string | undefined;
        maxZoom?: number | undefined;
        id?: string | undefined;
        slug?: string | undefined;
        sourceType?: "url" | "database" | "inline" | undefined;
        data?: any;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
        labels?: {
            field: string;
            show?: boolean | undefined;
            className?: string | undefined;
            position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
            include_list?: string[] | undefined;
            exclude_list?: string[] | undefined;
            fontSize?: number | undefined;
            fontColor?: string | undefined;
            fontFamily?: string | undefined;
            fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
        } | undefined;
        popup?: {
            type?: "list" | "template" | undefined;
            template?: string | undefined;
            show?: boolean | undefined;
            fields?: string[] | undefined;
        } | undefined;
        hover?: {
            enable?: boolean | undefined;
            display?: "floating" | "sidebar" | undefined;
            style?: {
                weight?: number | undefined;
                color?: string | undefined;
                fillOpacity?: number | undefined;
            } | undefined;
            panel?: {
                template?: string | undefined;
                fields?: string[] | undefined;
            } | undefined;
        } | undefined;
        minZoom?: number | undefined;
        feature_id?: string | undefined;
    }>, "many">>;
    customCSS: z.ZodOptional<z.ZodString>;
    behaviors: z.ZodOptional<z.ZodObject<{
        legend: z.ZodOptional<z.ZodObject<{
            position: z.ZodDefault<z.ZodEnum<["topright", "bottomright", "bottomleft", "topleft"]>>;
            layers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            collapsed: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            position: "topright" | "bottomright" | "bottomleft" | "topleft";
            collapsed: boolean;
            layers?: string[] | undefined;
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
        url_state: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        url_state: boolean;
        legend?: {
            position: "topright" | "bottomright" | "bottomleft" | "topleft";
            collapsed: boolean;
            layers?: string[] | undefined;
        } | undefined;
        controls?: {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }[] | undefined;
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
    renderer: z.ZodOptional<z.ZodDefault<z.ZodEnum<["standard", "custom"]>>>;
    component: z.ZodOptional<z.ZodString>;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    tile: z.ZodOptional<z.ZodObject<{
        src: z.ZodString;
        maxZoom: z.ZodDefault<z.ZodNumber>;
        subdomains: z.ZodDefault<z.ZodString>;
        attribution: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        src: string;
        maxZoom: number;
        subdomains: string;
        attribution: string;
    }, {
        src: string;
        maxZoom?: number | undefined;
        subdomains?: string | undefined;
        attribution?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    center: [number, number];
    layers: {
        type: "polygon" | "point";
        style: {
            type: "simple" | "category" | "graduated";
            default_color: string;
            opacity: number;
            weight: number;
            color: string;
            graduated?: {
                field: string;
                method: "equal_interval" | "quantile" | "custom";
                classes: number;
                colorRamp: {
                    start: string;
                    end: string;
                };
                breaks: number[];
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
        } | {
            type: "simple" | "category" | "graduated";
            weight: number;
            color: string;
            radius: number;
            fillColor: string;
            fillOpacity: number;
            graduated?: {
                field: string;
                method: "equal_interval" | "quantile" | "custom";
                classes: number;
                colorRamp: {
                    start: string;
                    end: string;
                };
                breaks: number[];
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
        };
        name: string;
        visible: boolean;
        filter?: {
            field: string;
            exclude?: string[] | undefined;
            include?: string[] | undefined;
        } | undefined;
        url?: string | undefined;
        maxZoom?: number | undefined;
        id?: string | undefined;
        slug?: string | undefined;
        sourceType?: "url" | "database" | "inline" | undefined;
        data?: any;
        zIndex?: number | undefined;
        labels?: {
            field: string;
            show: boolean;
            className: string;
            position: "center" | "top" | "bottom" | "left" | "right";
            include_list?: string[] | undefined;
            exclude_list?: string[] | undefined;
            fontSize?: number | undefined;
            fontColor?: string | undefined;
            fontFamily?: string | undefined;
            fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
        } | undefined;
        popup?: {
            type: "list" | "template";
            show: boolean;
            template?: string | undefined;
            fields?: string[] | undefined;
        } | undefined;
        hover?: {
            enable: boolean;
            display?: "floating" | "sidebar" | undefined;
            style?: {
                weight?: number | undefined;
                color?: string | undefined;
                fillOpacity?: number | undefined;
            } | undefined;
            panel?: {
                template?: string | undefined;
                fields?: string[] | undefined;
            } | undefined;
        } | undefined;
        minZoom?: number | undefined;
        feature_id?: string | undefined;
    }[];
    schema: number;
    basemap: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner";
    zoom: number;
    customCSS?: string | undefined;
    behaviors?: {
        url_state: boolean;
        legend?: {
            position: "topright" | "bottomright" | "bottomleft" | "topleft";
            collapsed: boolean;
            layers?: string[] | undefined;
        } | undefined;
        controls?: {
            type: "layer-toggle" | "search";
            field?: string | undefined;
            layers?: string[] | undefined;
            layer?: string | undefined;
        }[] | undefined;
    } | undefined;
    renderer?: "custom" | "standard" | undefined;
    component?: string | undefined;
    config?: Record<string, any> | undefined;
    tile?: {
        src: string;
        maxZoom: number;
        subdomains: string;
        attribution: string;
    } | undefined;
}, {
    center?: [number, number] | undefined;
    layers?: {
        type: "polygon" | "point";
        style: {
            type?: "simple" | "category" | "graduated" | undefined;
            graduated?: {
                field: string;
                colorRamp: {
                    start: string;
                    end: string;
                };
                method?: "equal_interval" | "quantile" | "custom" | undefined;
                classes?: number | undefined;
                breaks?: number[] | undefined;
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
            default_color?: string | undefined;
            opacity?: number | undefined;
            weight?: number | undefined;
            color?: string | undefined;
        } | {
            type?: "simple" | "category" | "graduated" | undefined;
            graduated?: {
                field: string;
                colorRamp: {
                    start: string;
                    end: string;
                };
                method?: "equal_interval" | "quantile" | "custom" | undefined;
                classes?: number | undefined;
                breaks?: number[] | undefined;
            } | undefined;
            field?: string | undefined;
            color_dict?: Record<string, string> | undefined;
            weight?: number | undefined;
            color?: string | undefined;
            radius?: number | undefined;
            fillColor?: string | undefined;
            fillOpacity?: number | undefined;
        };
        name: string;
        filter?: {
            field: string;
            exclude?: string[] | undefined;
            include?: string[] | undefined;
        } | undefined;
        url?: string | undefined;
        maxZoom?: number | undefined;
        id?: string | undefined;
        slug?: string | undefined;
        sourceType?: "url" | "database" | "inline" | undefined;
        data?: any;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
        labels?: {
            field: string;
            show?: boolean | undefined;
            className?: string | undefined;
            position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
            include_list?: string[] | undefined;
            exclude_list?: string[] | undefined;
            fontSize?: number | undefined;
            fontColor?: string | undefined;
            fontFamily?: string | undefined;
            fontWeight?: "normal" | "bold" | "400" | "500" | "600" | "700" | undefined;
        } | undefined;
        popup?: {
            type?: "list" | "template" | undefined;
            template?: string | undefined;
            show?: boolean | undefined;
            fields?: string[] | undefined;
        } | undefined;
        hover?: {
            enable?: boolean | undefined;
            display?: "floating" | "sidebar" | undefined;
            style?: {
                weight?: number | undefined;
                color?: string | undefined;
                fillOpacity?: number | undefined;
            } | undefined;
            panel?: {
                template?: string | undefined;
                fields?: string[] | undefined;
            } | undefined;
        } | undefined;
        minZoom?: number | undefined;
        feature_id?: string | undefined;
    }[] | undefined;
    schema?: number | undefined;
    basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | undefined;
    zoom?: number | undefined;
    customCSS?: string | undefined;
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
    renderer?: "custom" | "standard" | undefined;
    component?: string | undefined;
    config?: Record<string, any> | undefined;
    tile?: {
        src: string;
        maxZoom?: number | undefined;
        subdomains?: string | undefined;
        attribution?: string | undefined;
    } | undefined;
}>;
export type MapConfig = z.infer<typeof MapConfigSchema>;
export declare const GeoJSONInfoSchema: z.ZodObject<{
    type: z.ZodString;
    featureCount: z.ZodNumber;
    properties: z.ZodArray<z.ZodString, "many">;
    uniqueValues: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    type: string;
    featureCount: number;
    properties: string[];
    uniqueValues: Record<string, string[]>;
}, {
    type: string;
    featureCount: number;
    properties: string[];
    uniqueValues: Record<string, string[]>;
}>;
export type GeoJSONInfo = z.infer<typeof GeoJSONInfoSchema>;
export declare const ReferenceLinkSchema: z.ZodObject<{
    title: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    title: string;
}, {
    url: string;
    title: string;
}>;
export type ReferenceLink = z.infer<typeof ReferenceLinkSchema>;
export declare const MapMetadataSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    description: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    year: z.ZodOptional<z.ZodNumber>;
    yearMin: z.ZodOptional<z.ZodNumber>;
    yearMax: z.ZodOptional<z.ZodNumber>;
    period: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    regions: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    maturity: z.ZodDefault<z.ZodString>;
    license: z.ZodDefault<z.ZodString>;
    references: z.ZodDefault<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        title: string;
    }, {
        url: string;
        title: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    title: Record<string, string>;
    description: Record<string, string>;
    tags: string[];
    regions: string[];
    maturity: string;
    license: string;
    references: {
        url: string;
        title: string;
    }[];
    category?: string | undefined;
    year?: number | undefined;
    yearMin?: number | undefined;
    yearMax?: number | undefined;
    period?: string | undefined;
}, {
    category?: string | undefined;
    title?: Record<string, string> | undefined;
    description?: Record<string, string> | undefined;
    year?: number | undefined;
    yearMin?: number | undefined;
    yearMax?: number | undefined;
    period?: string | undefined;
    tags?: string[] | undefined;
    regions?: string[] | undefined;
    maturity?: string | undefined;
    license?: string | undefined;
    references?: {
        url: string;
        title: string;
    }[] | undefined;
}>;
export type MapMetadata = z.infer<typeof MapMetadataSchema>;
export declare const LayerFieldSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodEnum<["string", "number", "boolean"]>;
    values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "string" | "number" | "boolean";
    name: string;
    values?: string[] | undefined;
}, {
    type: "string" | "number" | "boolean";
    name: string;
    values?: string[] | undefined;
}>;
export type LayerField = z.infer<typeof LayerFieldSchema>;
export declare const LayerYamlSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodEnum<["points", "polygons", "polylines"]>;
    description: z.ZodDefault<z.ZodString>;
    year: z.ZodOptional<z.ZodNumber>;
    fields: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodEnum<["string", "number", "boolean"]>;
        values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "string" | "number" | "boolean";
        name: string;
        values?: string[] | undefined;
    }, {
        type: "string" | "number" | "boolean";
        name: string;
        values?: string[] | undefined;
    }>, "many">>;
    style: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodDefault<z.ZodEnum<["simple", "category", "graduated"]>>;
        field: z.ZodOptional<z.ZodString>;
        color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        graduated: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            method: z.ZodDefault<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
            classes: z.ZodDefault<z.ZodNumber>;
            colorRamp: z.ZodObject<{
                start: z.ZodString;
                end: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                start: string;
                end: string;
            }, {
                start: string;
                end: string;
            }>;
            breaks: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        }, {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        }>>;
        default_color: z.ZodDefault<z.ZodString>;
        opacity: z.ZodDefault<z.ZodNumber>;
        weight: z.ZodDefault<z.ZodNumber>;
        color: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "simple" | "category" | "graduated";
        default_color: string;
        opacity: number;
        weight: number;
        color: string;
        graduated?: {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
    }, {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        default_color?: string | undefined;
        opacity?: number | undefined;
        weight?: number | undefined;
        color?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodDefault<z.ZodEnum<["simple", "category", "graduated"]>>;
        field: z.ZodOptional<z.ZodString>;
        color_dict: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        graduated: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            method: z.ZodDefault<z.ZodEnum<["equal_interval", "quantile", "custom"]>>;
            classes: z.ZodDefault<z.ZodNumber>;
            colorRamp: z.ZodObject<{
                start: z.ZodString;
                end: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                start: string;
                end: string;
            }, {
                start: string;
                end: string;
            }>;
            breaks: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        }, {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        }>>;
        radius: z.ZodDefault<z.ZodNumber>;
        fillColor: z.ZodDefault<z.ZodString>;
        color: z.ZodDefault<z.ZodString>;
        weight: z.ZodDefault<z.ZodNumber>;
        fillOpacity: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "simple" | "category" | "graduated";
        weight: number;
        color: string;
        radius: number;
        fillColor: string;
        fillOpacity: number;
        graduated?: {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
    }, {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        weight?: number | undefined;
        color?: string | undefined;
        radius?: number | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    type: "points" | "polygons" | "polylines";
    fields: {
        type: "string" | "number" | "boolean";
        name: string;
        values?: string[] | undefined;
    }[];
    name: string;
    description: string;
    style?: {
        type: "simple" | "category" | "graduated";
        default_color: string;
        opacity: number;
        weight: number;
        color: string;
        graduated?: {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
    } | {
        type: "simple" | "category" | "graduated";
        weight: number;
        color: string;
        radius: number;
        fillColor: string;
        fillOpacity: number;
        graduated?: {
            field: string;
            method: "equal_interval" | "quantile" | "custom";
            classes: number;
            colorRamp: {
                start: string;
                end: string;
            };
            breaks: number[];
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
    } | undefined;
    year?: number | undefined;
}, {
    type: "points" | "polygons" | "polylines";
    name: string;
    fields?: {
        type: "string" | "number" | "boolean";
        name: string;
        values?: string[] | undefined;
    }[] | undefined;
    style?: {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        default_color?: string | undefined;
        opacity?: number | undefined;
        weight?: number | undefined;
        color?: string | undefined;
    } | {
        type?: "simple" | "category" | "graduated" | undefined;
        graduated?: {
            field: string;
            colorRamp: {
                start: string;
                end: string;
            };
            method?: "equal_interval" | "quantile" | "custom" | undefined;
            classes?: number | undefined;
            breaks?: number[] | undefined;
        } | undefined;
        field?: string | undefined;
        color_dict?: Record<string, string> | undefined;
        weight?: number | undefined;
        color?: string | undefined;
        radius?: number | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
    } | undefined;
    description?: string | undefined;
    year?: number | undefined;
}>;
export type LayerYaml = z.infer<typeof LayerYamlSchema>;
export declare const MapstudioConfigSchema: z.ZodObject<{
    apiUrl: z.ZodDefault<z.ZodString>;
    apiKey: z.ZodOptional<z.ZodString>;
    defaults: z.ZodDefault<z.ZodObject<{
        basemap: z.ZodDefault<z.ZodEnum<["carto-light", "carto-dark", "carto-voyager", "osm", "satellite", "stamen-toner"]>>;
        palette: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        basemap: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner";
        palette: string;
    }, {
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | undefined;
        palette?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    apiUrl: string;
    defaults: {
        basemap: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner";
        palette: string;
    };
    apiKey?: string | undefined;
}, {
    apiUrl?: string | undefined;
    apiKey?: string | undefined;
    defaults?: {
        basemap?: "carto-light" | "carto-dark" | "carto-voyager" | "osm" | "satellite" | "stamen-toner" | undefined;
        palette?: string | undefined;
    } | undefined;
}>;
export type MapstudioConfig = z.infer<typeof MapstudioConfigSchema>;
//# sourceMappingURL=map-config.d.ts.map