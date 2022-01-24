export interface DragonProps {
  name: string;
  type: string;
  histories: string | string[];
}

export interface getDragonProps {
  name: string;
  type: string;
  histories: string | string[];
  id: number;
  createdAt: Date;
}

export interface CardDragonProps {
  dragon: getDragonProps;
  deleteDragons: Function;
}

export interface dragonModalProps {
  id: number | undefined;
  name: string;
  type: string;
}
