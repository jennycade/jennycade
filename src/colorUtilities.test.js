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

describe('chooseTextColor', () => {
  it('chooses white for a black background #000000', () => {
    const bgColor = '#000000';
    const textColor = chooseTextColor(bgColor);
    expect(textColor).toBe('white');
  });
  it('chooses white for a black background rgb(0, 0, 0)', () => {
    const bgColor = 'rgb(0, 0, 0)';
    const textColor = chooseTextColor(bgColor);
    expect(textColor).toBe('white');
  });
  it('chooses white for a dark purple background #3b245b', () => {
    const bgColor = '#3b245b';
    const textColor = chooseTextColor(bgColor);
    expect(textColor).toBe('white');
  });


  it('chooses black for a white background #ffffff', () => {
    const bgColor = '#ffffff';
    const textColor = chooseTextColor(bgColor);
    expect(textColor).toBe('black');
  });
  it('chooses black for a white background rgb(255,255,255)', () => {
    const bgColor = 'rgb(255,255,255)';
    const textColor = chooseTextColor(bgColor);
    expect(textColor).toBe('black');
  });
  // 
  it('chooses black for a bright green background #2ad604', () => {
    const bgColor = '#2ad604';
    const textColor = chooseTextColor(bgColor);
    expect(textColor).toBe('black');
  });
});