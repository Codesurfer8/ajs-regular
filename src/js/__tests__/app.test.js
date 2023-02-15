import Validator from '../app';

describe('checking of valid name', () => {
  test('checking of latin symbols', () => {
    const user = new Validator('Триган');
    const result = user.validateUsername();

    expect(result).toBe('Invalid name');
  });

  test('checking of latin symbols', () => {
    const user = new Validator('Trigun');
    const result = user.validateUsername();

    expect(result).toBe('Valid name');
  });

  test('checking the numbers on the sides', () => {
    const user = new Validator('Trigun8');
    const result = user.validateUsername();

    expect(result).toBe('Invalid name');
  });

  test('checking the dash on the sides', () => {
    const user = new Validator('-Trigun');
    const result = user.validateUsername();

    expect(result).toBe('Invalid name');
  });
});
