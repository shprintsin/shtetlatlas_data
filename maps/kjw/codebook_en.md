# Codebook — KJW Map

## Districts layer

| Field | Description |
|---|---|
| kahal | Name of the kahal as it appears in the census summary |
| kahal_id | Unique numeric identifier for the kahal |
| he_name | Kahal name in Hebrew |
| viv | Voivodeship (Województwo) — first-level administrative unit in 1765 |
| pow | Powiat — second-level administrative unit in 1765 |
| rural | Number of Jews living in surrounding villages, taverns, and estates |
| urban | Number of Jews living in the principal settlement |
| total | Total Jewish population (urban + rural) |
| places | Number of subsidiary rural settlements under the kahal's jurisdiction |

## Points layer

| Field | Description |
|---|---|
| id | Unique row identifier |
| hierarchy | Settlement hierarchy level (1 = kahal seat, 2+ = subsidiary) |
| galil | Name of the galil (Jewish regional district) |
| kahal | Name of the parent kahal |
| name | Historical name of the settlement as recorded in the census |
| settlement_type | Type of settlement (city, town, village, estate, etc.) |
| pop | Jewish population of the settlement |
| year | Census year (1765) |
| region | Region code (KJW = Kijów) |
| modern_name | Modern name of the settlement, searchable on Google Maps |
| viv | Voivodeship (Województwo) — first-level administrative unit in 1765 |
| pow | Powiat — second-level administrative unit in 1765 |
| geocode | Unique geographic code in the format {region}_{name} |
| kahal_id | Numeric identifier of the parent kahal |
| subunit | Sub-unit designation, if applicable |
