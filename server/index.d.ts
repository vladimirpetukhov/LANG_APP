interface Array<T> {
    distinct(compare?: (a: T, b: T) => boolean): Array<T>
}
