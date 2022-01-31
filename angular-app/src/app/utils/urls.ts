export interface NavMenuLink {
  url: string;
  caption: string;
}

export const navMenuLinks: NavMenuLink[] = [
  { url: '', caption: 'Главная' },
  { url: '/catalog', caption: 'Каталог' },
];
