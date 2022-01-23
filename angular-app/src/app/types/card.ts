export interface IProduct {
  id: number;
  company: string;
  title: string;
  image: string;
  rating: IRating;
  price: IPriceGroups;
  deliveryOptions: IDeliveryOptions;
  badge?: IBadge;
  colors?: IColors;
  sale: boolean;
}

export interface IRating {
  value: number;
  reviews: number;
}

interface IPriceGroups {
  [key: string]: IPrice;
}

export interface IPrice {
  value: number;
  code: string;
  discount?: number;
}

interface IDeliveryOptions {
  delivery?: string;
  postamate?: boolean;
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
  image: string;
}
