/**
 * Get a localized string from an i18n object.
 * Fallback: requested lang → English → primary value → empty string.
 */
export function getLocalizedField(primaryValue, i18nField, lang) {
    if (lang && i18nField && typeof i18nField === 'object') {
        if (i18nField[lang])
            return i18nField[lang];
        if (i18nField['en'])
            return i18nField['en'];
    }
    return primaryValue || '';
}
/**
 * Extract i18n fields from a raw object.
 * Bare field (e.g. `title`) → Hebrew (`he`).
 * Suffixed fields (e.g. `title_en`, `title_pl`) → respective locale keys.
 */
export function extractI18nFields(obj, fieldName) {
    const result = {};
    const bareValue = obj[fieldName];
    if (typeof bareValue === 'string')
        result.he = bareValue;
    for (const [key, value] of Object.entries(obj)) {
        const match = key.match(new RegExp(`^${fieldName}_([a-z]{2,3})$`));
        if (match && typeof value === 'string') {
            result[match[1]] = value;
        }
    }
    return result;
}
//# sourceMappingURL=localize.js.map