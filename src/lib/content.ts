export function nonEmpty(s?: string | null): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

export function nonEmptyArray<T>(arr?: readonly T[] | null): arr is T[] {
  return Array.isArray(arr) && arr.length > 0;
}
