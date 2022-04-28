import {
  calculateRelativeLuminance,
  chooseTextColor,
} from './colorUtilities';

describe('calculateRelativeLuminance', () => {
  it('returns 0 for #000000', () => {
    const colorCode = '#000000';
    const lum = calculateRelativeLuminance(colorCode);

    expect(lum).toBe(0);
  });
  it('returns 255 for #ffffff', () => {
    const colorCode = '#ffffff';
    const lum = calculateRelativeLuminance(colorCode);

    expect(Math.round(lum)).toBe(255);
  });
  it('returns 0 for rgb(0, 0, 0)', () => {
    const colorCode = 'rgb(0, 0, 0)';
    const lum = calculateRelativeLuminance(colorCode);

    expect(lum).toBe(0);
  });
  it('returns 255 for rgb(255, 255, 255)', () => {
    const colorCode = 'rgb(255, 255, 255)';
    const lum = calculateRelativeLuminance(colorCode);

    expect(Math.round(lum)).toBe(255);
  });
  it('throws an error for a nonsense string', () => {
    const colorCode = 'bloop';
    expect(() => {calculateRelativeLuminance(colorCode)}).toThrow();
  });
});