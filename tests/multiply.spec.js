const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(5, 2);
    expect(result).toBe(10);
  });

  test('should return a negative integer when multiplied with a negative integer', () => {
    const result = multiply(-9, 6);
    expect(result).toBe(-54);
  });

  test('should return 0 when function is called with any number and the number 0', () => {
    const result = multiply(26);
    expect(result).toBe(0);
  });
});
