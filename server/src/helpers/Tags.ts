import {TagsEntity} from '../shared';

class Tags {
  private readonly tags: TagsEntity[];

  private constructor(tags: TagsEntity[]) {
    this.tags = tags;
  }

  public toArray(): TagsEntity[] {
    return [...this.tags];
  }

  public static factory(tags: TagsEntity[]) {
    return new Tags(tags);
  }
}

export default Tags;
