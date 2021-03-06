export interface IProduct {
  id?: number;
  company?: string;
  title?: string;
  image?: string;
  rating?: IRating;
  price?: IPrice;
  deliveryOptions?: IDeliveryOptions;
  badge?: IBadge;
  colors?: IColors;
}

export interface IRating {
  value: number;
  reviews: number;
}

interface IPrice {
  value: number;
  discount: number;
}

interface IDeliveryOptions {
  delivery: string;
  postamate: boolean;
  available: number;
}

export interface IBadge {
  color?: string;
  text?: string;
}

interface IColors {
  one: IColorValue;
  two: IColorValue;
}

interface IColorValue {
  color: string;
  image: string
}
