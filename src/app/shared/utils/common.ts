

/**
 * Dato un array, ne restituisce un elemento a caso
 */
export function randomItemFromArray<T>(value: Array<T>): T {
    return value[Math.floor(Math.random() * value.length)];
}