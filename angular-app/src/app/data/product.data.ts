import { IProduct } from '../types/card';

export const product: IProduct = {
  id: 1,
  company: 'Google',
  title: 'Google Pixel 4 XL 64GB',
  image: 'https://avatars.mds.yandex.net/get-mpic/1545401/img_id3166910857140137379.jpeg/13hq',
  rating: {
    value: 5,
    reviews: 4
  },
  price: {
    value: 54990,
    discount: 0.17
  },
  deliveryOptions: {
    delivery: '21.07',
    postamate: true,
    available: 1
  },
  badge: {
    color: '#FF3366',
    text: 'Скидка 17%'
  },
  colors: {
    one: {
      color: 'black',
      image: 'https://avatars.mds.yandex.net/get-mpic/1992523/img_id8929047665580963762.jpeg/13hq'
    },
    two: {
      color: 'white',
      image: 'https://avatars.mds.yandex.net/get-mpic/1687058/img_id8829315425325719736.jpeg/13hq'
    }
  }
};
