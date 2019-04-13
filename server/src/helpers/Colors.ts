import {ColorsEntity} from '../shared';

class Colors {
  private readonly colors: ColorsEntity[];

  private constructor(colors: ColorsEntity[]) {
    this.colors = colors;
  }

  public static factory(colors: ColorsEntity[]) {
    return new Colors(colors);
  }

  public checkColor(id: number) {
    const check = this.colors.find((color) => color.id === id);
    return Boolean(check);
  }
}

export default Colors;
