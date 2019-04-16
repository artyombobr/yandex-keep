function setBackground(colors: any, note: any) {
  const opacity = 0.4;
  if (note.color !== undefined) {
    let hex: string = colors[note.color].color;
    hex = hex.replace('#', '');
    let r: number = parseInt(hex.substring(0, 2), 16);
    let g: number = parseInt(hex.substring(2, 4), 16);
    let b: number = parseInt(hex.substring(4, 6), 16);
    r = Math.round(r * opacity + 255 * (1 - opacity));
    g = Math.round(g * opacity + 255 * (1 - opacity));
    b = Math.round(b * opacity + 255 * (1 - opacity));
    return { backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')' };
  }
  return { backgroundColor: '#fff' };
}

export default setBackground;
