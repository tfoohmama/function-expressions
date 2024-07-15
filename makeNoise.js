function myAPITS(someString: string, someNum: number) { ... };
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const currentDate = () => new Date().toLocaleDateString('en-US');