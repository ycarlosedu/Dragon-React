export interface DragonProps {
  name: string;
  type: string;
  histories: string | string[];
  createdAt?: Date;
  id?: number;
}

export interface CardDragonProps {
  dragon: DragonProps;
}
