import { IProduct } from '../types/card';

export const products: Array<IProduct> = [
  {
    id: 1,
    company: 'Google',
    title: 'Google Pixel 4 XL 64GB',
    sale: true,
    image:
      'https://avatars.mds.yandex.net/get-mpic/1545401/img_id3166910857140137379.jpeg/13hq',
    rating: {
      value: 5,
      reviews: 4,
    },
    price: {
      ru: {
        value: 54990,
        discount: 0.17,
        code: 'RUB',
      },
      en: {
        value: 708,
        discount: 0.17,
        code: 'USD',
      },
    },
    deliveryOptions: {
      delivery: '21.07',
      postamate: true,
      available: 1,
    },
    colors: {
      one: {
        color: 'black',
        image:
          'https://avatars.mds.yandex.net/get-mpic/1992523/img_id8929047665580963762.jpeg/13hq',
      },
      two: {
        color: 'white',
        image:
          'https://avatars.mds.yandex.net/get-mpic/1687058/img_id8829315425325719736.jpeg/13hq',
      },
    },
  },
  {
    id: 2,
    company: 'Samsung',
    title: 'Samsung Galaxy A12 (SM-A127) 3/32 ГБ RU',
    sale: true,
    image:
      'https://avatars.mds.yandex.net/get-mpic/5252277/img_id5748147289415498213.png/orig',
    rating: {
      value: 5,
      reviews: 3,
    },
    price: {
      ru: {
        value: 11990,
        discount: 0.3,
        code: 'RUB',
      },
      en: {
        value: 154,
        discount: 0.3,
        code: 'USD',
      },
    },
    deliveryOptions: {
      delivery: '21.07',
      postamate: true,
      available: 1,
    },
    colors: {
      one: {
        color: 'black',
        image:
          'https://avatars.mds.yandex.net/get-mpic/1992523/img_id8929047665580963762.jpeg/13hq',
      },
      two: {
        color: 'white',
        image:
          'https://avatars.mds.yandex.net/get-mpic/1687058/img_id8829315425325719736.jpeg/13hq',
      },
    },
  },
  {
    id: 3,
    company: 'Xiaomi',
    title: 'Xiaomi Redmi 9 NFC 4/64 ГБ Global',
    image:
      'https://avatars.mds.yandex.net/get-mpic/5131700/img_id5347563295793030043.jpeg/orig',
    sale: false,
    rating: {
      value: 4,
      reviews: 3,
    },
    price: {
      ru: {
        value: 14689,
        code: 'RUB',
      },
      en: {
        value: 190,
        code: 'USD',
      },
    },
    deliveryOptions: {
      available: 0,
    },
    colors: {
      one: {
        color: 'gray',
        image:
          'https://avatars.mds.yandex.net/get-mpic/5131700/img_id5347563295793030043.jpeg/orig',
      },
      two: {
        color: 'green',
        image:
          'https://avatars.mds.yandex.net/get-mpic/5243791/img_id7015787815797858505.jpeg/orig',
      },
    },
  },
  {
    id: 4,
    company: 'Apple',
    title: 'Apple iPhone 12 mini 64 ГБ',
    sale: true,
    image:
      'https://avatars.mds.yandex.net/get-mpic/5235242/img_id7846111945445038544.png/orig',
    rating: {
      value: 3,
      reviews: 3,
    },
    price: {
      ru: {
        value: 53850,
        discount: 0.1,
        code: 'RUB',
      },
      en: {
        value: 695,
        discount: 0.1,
        code: 'USD',
      },
    },
    deliveryOptions: {
      available: 0,
    },
    colors: {
      one: {
        color: 'gray',
        image:
          'https://avatars.mds.yandex.net/get-mpic/5131700/img_id5347563295793030043.jpeg/orig',
      },
      two: {
        color: 'green',
        image:
          'https://avatars.mds.yandex.net/get-mpic/5243791/img_id7015787815797858505.jpeg/orig',
      },
    },
  },
];
