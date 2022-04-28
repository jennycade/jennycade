

export const calculateRelativeLuminance = (colorCode) => {
  // https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html#dfn-relative-luminance
  // (simplifying quite a bit)
  // L = 0.2126 * R + 0.7152 * G + 0.0722 * B where R, G and B are defined as:

  // if RsRGB <= 0.04045 then R = RsRGB/12.92 else R = ((RsRGB+0.055)/1.055) ^ 2.4
  // if GsRGB <= 0.04045 then G = GsRGB/12.92 else G = ((GsRGB+0.055)/1.055) ^ 2.4
  // if BsRGB <= 0.04045 then B = BsRGB/12.92 else B = ((BsRGB+0.055)/1.055) ^ 2.4
  // and RsRGB, GsRGB, and BsRGB are defined as:

  // RsRGB = R8bit/255
  // GsRGB = G8bit/255
  // BsRGB = B8bit/255

  let r;
  let g;
  let b;

  if (colorCode.startsWith('#')) {
    // convert hex to color values
    const hexPattern = /#(\w{2})(\w{2})(\w{2})/gmi;
    const matches = hexPattern.exec(colorCode);
    r = parseInt(matches[1], 16);
    g = parseInt(matches[2], 16);
    b = parseInt(matches[3], 16);
  } else if (colorCode.startsWith('rgb(')) {
    const rgbPattern = /rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/gmi;
    const matches = rgbPattern.exec(colorCode);
    r = parseInt(matches[1]);
    g = parseInt(matches[2]);
    b = parseInt(matches[3]);
  } else {
    throw new Error(`Invalid color code: ${colorCode}`);
  }

  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return lum;
}


export const chooseTextColor = (bgColor) => {
  // calculate foreground white vs. black based on bg
  // hex or rgb
  // (L1 + 0.05) / (L2 + 0.05), where
  // L1 is the relative luminance of the lighter of the colors, and
  // L2 is the relative luminance of the darker of the colors.

  // TODO: This part!
  
}
