export interface NotesProps {
  data: DataEntity;
}

export interface DataEntity {
  tags: TagsEntity[];
  colors: ColorsEntity[];
  notes: NotesEntity[];
}

export interface TagsEntity {
  id: number;
  tag: string;
}

export interface ColorsEntity {
  id: number;
  color: string;
}

export interface NotesEntity {
  type: string;
  title?: string;
  tags?: number[];
  color?: number;
  items?: ItemsEntity[];
  size?: string;
  created: number;
  text?: string;
  attachments?: AttachmentsEntity[];
  reminder?: number;
  url?: string;
  archive?: boolean;
}

export interface ItemsEntity {
  text: string;
  checked: boolean;
}

export interface AttachmentsEntity {
  type: string;
  url: string;
}
