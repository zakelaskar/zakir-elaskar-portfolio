export type ExperienceBadgeIconKind = "map" | "chart" | "code" | "health";

export function experienceBadgeIconKind(label: string): ExperienceBadgeIconKind {
  const s = label.toLowerCase();
  if (
    /\bdplyr\b|\bggplot2?\b|\btidyr\b|\bsf\b|\br\b|tidyverse|\bsql\b|\bpython\b|\bpandas\b|\bnumpy\b|\bjupyter\b|\bnotebook\b|\bgit\b|\bexcel\b|\bpowerpoint\b/.test(
      s,
    )
  ) {
    return "code";
  }
  if (
    /gis|spatial|tract|tigris|mapping|census|boundary|choropleth|geograph|leaflet|geographic/.test(s)
  ) {
    return "map";
  }
  if (/statistical|visualization|visual|plot|exploratory|analytics\b|power\s*bi|tableau/.test(s)) {
    return "chart";
  }
  if (
    /health|cancer|epidemi|registry|clinical|patient|diagnos|treatment|stage|healthcare|public health|survey/.test(
      s,
    )
  ) {
    return "health";
  }
  return "chart";
}
