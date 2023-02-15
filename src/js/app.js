export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const latinLettersOnly = /[a-zA-Z0-9-_]+/;
    const numberInMiddle = /\d{3}/;
    const startSide = /^[^0-9-_]/;
    const endSide = /[^0-9-_]$/;

    if (!numberInMiddle.test(this.name) && latinLettersOnly.test(this.name)
     && startSide.test(this.name) && endSide.test(this.name)) {
      return 'Valid name';
    }
    return 'Invalid name';
  }
}
