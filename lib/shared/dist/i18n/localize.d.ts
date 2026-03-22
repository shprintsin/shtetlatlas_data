/**
 * Get a localized string from an i18n object.
 * Fallback: requested lang → English → primary value → empty string.
 */
export declare function getLocalizedField(primaryValue: string | null | undefined, i18nField: Record<string, string> | null | undefined, lang?: string): string;
/**
 * Extract i18n fields from a raw object.
 * Bare field (e.g. `title`) → Hebrew (`he`).
 * Suffixed fields (e.g. `title_en`, `title_pl`) → respective locale keys.
 */
export declare function extractI18nFields(obj: Record<string, unknown>, fieldName: string): Record<string, string>;
//# sourceMappingURL=localize.d.ts.map