export {}

declare global {
    interface Number {
        div(other: number): number
        toTimeString(): string
        toStringIfNotZero(transform: (it: number) => string): string
    }
}

Number.prototype.div = function (this: number, other: number) {
    return Math.floor(this / other)
}

Number.prototype.toStringIfNotZero = function (this: number, transform: (it: number) => string) {
    return this === 0 ? '' : transform(this)
}

Number.prototype.toTimeString = function (this: number)  {
    let self = this;
    const hours = self.div(3600); self -= 3600 * hours
    const minutes = self.div(60); self -= 60 * minutes
    return `${hours.toStringIfNotZero(it => `${it}:`)}${minutes.toStringIfNotZero(it => `${it}:`)}${self}`;
};