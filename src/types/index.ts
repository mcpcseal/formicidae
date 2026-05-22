export interface Tag {
  id: string;
  label: string;
  color: string;
  bgColor: string;
}

export interface Screenshot {
  id: string;
  title: string;
  description: string;
  date: string;
  player: string;
  tags: string[];
  imageUrl: string;
}
