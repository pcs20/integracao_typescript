class ApplicationError implements Error {
    name: string = "ApplicationError";
    constructor(public message: string) {
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA')
        if (typeof console !== undefined) {
            console.warn(`Error: ${message}`);
        }
    }

    toString() {
        return `${this.name}: ${this.message}`;
    }
}


class GeneralError extends ApplicationError { }