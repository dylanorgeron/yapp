import { hex } from "wcag-contrast";

class Color {
  public hex: string = "";
  public contrastScore: number = 0;
  constructor(
    public r: number = 0,
    public g: number = 0,
    public b: number = 0,
    public key: string = ""
  ) {
    this.updateHex();
  }

  public adjustColor(amount: number) {
    this.r = this.ensureLimits(this.r + amount);
    this.b = this.ensureLimits(this.b + amount);
    this.g = this.ensureLimits(this.g + amount);
    this.updateHex();
  }

  private ensureLimits(val: number) {
    if (val < 0) return 0;
    if (val > 255) return 255;
    return val;
  }

  public setHex(newHex: string) {
    this.hex = newHex;
    this.updateRGB();
  }

  public setRGB(newRGB: number[]) {
    this.r = newRGB[0];
    this.g = newRGB[1];
    this.b = newRGB[2];
    this.updateHex();
  }

  public updateHex() {
    this.hex =
      "#" +
      [this.r, this.g, this.b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");
  }

  public updateRGB() {
    const rgb = this.hexToRgb();
    this.r = rgb[0];
    this.g = rgb[1];
    this.b = rgb[2];
  }

  public hexToRgb() {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : [];
  }
  public rgbSum() {
    return this.r + this.b + this.g;
  }

  public computeContrast(backgroundColor: Color) {
    this.contrastScore = hex(this.hex, backgroundColor.hex);
  }
}

const colorKeys = [
  "background-default",
  "background-selection",
  "background-light",
  "background-lighter",
  "foreground-default",
  "foreground-comments",
  "foreground-dark",
  "foreground-light",
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "violet",
  "brown",
];

export { Color, colorKeys };
