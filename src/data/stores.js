const stores = [
  {
    id: 'shein',
    name: 'شي إن',
    nameEn: 'SHEIN',
    logo: 'https://logo.clearbit.com/shein.com',
    color: '#000000',
    url: 'https://ar.shein.com/',
    categories: ['كل', 'نساء', 'أطفال', 'رجال', 'أحجام كبيرة'],
    products: [
      {
        id: 'sh1',
        name: 'SHEGLAM أحمر خدود سائل Color Bloom',
        image: 'https://img.ltwebstatic.com/images3_pi/2023/06/07/1686104878d5c62e5aee38e75d5f3dd5d7f8c5c5c0_thumbnail_900x.webp',
        price: 5.06,
        originalPrice: 6.13,
        discount: 17,
        sold: '20k+',
        category: 'نساء',
        sku: 'sb230531...'
      },
      {
        id: 'sh2',
        name: 'فستان صيفي أنيق بطبعة زهور',
        image: 'https://img.ltwebstatic.com/images3_pi/2024/01/08/17/17047262809d88ad5da5e8ceb57d35c02b2ef3e9e2_thumbnail_900x.webp',
        price: 12.99,
        originalPrice: 18.50,
        discount: 30,
        sold: '5k+',
        category: 'نساء',
        sku: 'sw240108...'
      },
      {
        id: 'sh3',
        name: 'بلوزة كاجوال بأكمام طويلة',
        image: 'https://img.ltwebstatic.com/images3_pi/2024/02/19/63/17084472651e3e2b1e0e4c3d5a7b8c9d0e1f2a3b4c_thumbnail_900x.webp',
        price: 8.99,
        originalPrice: 14.00,
        discount: 36,
        sold: '3k+',
        category: 'نساء',
        sku: 'sw240219...'
      },
      {
        id: 'sh4',
        name: 'تيشيرت رجالي قطن عالي الجودة',
        image: 'https://img.ltwebstatic.com/images3_pi/2023/09/15/1694764589f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2_thumbnail_900x.webp',
        price: 7.50,
        originalPrice: 11.00,
        discount: 32,
        sold: '8k+',
        category: 'رجال',
        sku: 'sm230915...'
      },
      {
        id: 'sh5',
        name: 'بيجامة أطفال قطنية مريحة',
        image: 'https://img.ltwebstatic.com/images3_pi/2024/03/01/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1_thumbnail_900x.webp',
        price: 6.99,
        originalPrice: 9.99,
        discount: 30,
        sold: '2k+',
        category: 'أطفال',
        sku: 'sk240301...'
      },
      {
        id: 'sh6',
        name: 'حقيبة يد نسائية جلدية أنيقة',
        image: 'https://img.ltwebstatic.com/images3_pi/2023/11/20/b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2_thumbnail_900x.webp',
        price: 15.99,
        originalPrice: 22.00,
        discount: 27,
        sold: '10k+',
        category: 'نساء',
        sku: 'sa231120...'
      },
      {
        id: 'sh7',
        name: 'نظارة شمسية عصرية UV400',
        image: 'https://img.ltwebstatic.com/images3_pi/2024/01/25/c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3_thumbnail_900x.webp',
        price: 3.50,
        originalPrice: 5.00,
        discount: 30,
        sold: '15k+',
        category: 'نساء',
        sku: 'sa240125...'
      },
      {
        id: 'sh8',
        name: 'قميص رجالي رسمي أبيض',
        image: 'https://img.ltwebstatic.com/images3_pi/2023/08/10/d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4_thumbnail_900x.webp',
        price: 11.99,
        originalPrice: 16.00,
        discount: 25,
        sold: '4k+',
        category: 'رجال',
        sku: 'sm230810...'
      }
    ]
  },
  {
    id: 'trendyol',
    name: 'ترينديول',
    nameEn: 'Trendyol',
    logo: 'https://logo.clearbit.com/trendyol.com',
    color: '#F27A1A',
    url: 'https://www.trendyol.com/',
    categories: ['كل', 'نساء', 'رجال', 'أطفال', 'المنزل'],
    products: [
      {
        id: 'tr1',
        name: 'معطف شتوي أنيق من تريندول',
        image: 'https://cdn.dsmcdn.com/ty1610/product/media/images/prod/QC/20250107/14/39ca0e2c-9e3f-3d86-a3d7-f2e2dc14e6a1/1_org_zoom.jpg',
        price: 25.00,
        originalPrice: 45.00,
        discount: 44,
        sold: '1k+',
        category: 'نساء',
        sku: 'tr250107...'
      },
      {
        id: 'tr2',
        name: 'حذاء رياضي رجالي مريح',
        image: 'https://cdn.dsmcdn.com/ty1504/product/media/images/prod/QC/20241125/10/5a6b7c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d/1_org_zoom.jpg',
        price: 18.50,
        originalPrice: 30.00,
        discount: 38,
        sold: '3k+',
        category: 'رجال',
        sku: 'tr241125...'
      },
      {
        id: 'tr3',
        name: 'فستان أطفال بناتي مطرز',
        image: 'https://cdn.dsmcdn.com/ty1450/product/media/images/prod/QC/20241010/08/a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6/1_org_zoom.jpg',
        price: 10.99,
        originalPrice: 15.99,
        discount: 31,
        sold: '800+',
        category: 'أطفال',
        sku: 'tr241010...'
      },
      {
        id: 'tr4',
        name: 'طقم مفارش سرير قطني فاخر',
        image: 'https://cdn.dsmcdn.com/ty1380/product/media/images/prod/QC/20240905/12/b2c3d4e5-f6a7-8b9c-0d1e-f2a3b4c5d6e7/1_org_zoom.jpg',
        price: 35.00,
        originalPrice: 55.00,
        discount: 36,
        sold: '500+',
        category: 'المنزل',
        sku: 'tr240905...'
      }
    ]
  },
  {
    id: 'hazelanna',
    name: 'Hazelanna',
    nameEn: 'HAZELANNA',
    logo: 'https://logo.clearbit.com/hazelanna.com',
    color: '#1a1a1a',
    url: 'https://www.hazelanna.com/',
    categories: ['كل', 'عطور', 'مكياج', 'عناية بالبشرة'],
    products: [
      {
        id: 'hz1',
        name: 'عطر فاخر من هازلانا 50مل',
        image: 'https://cdn.shopify.com/s/files/1/0612/0382/products/perfume-bottle_400x400.jpg',
        price: 45.00,
        originalPrice: 60.00,
        discount: 25,
        sold: '2k+',
        category: 'عطور',
        sku: 'hz001...'
      },
      {
        id: 'hz2',
        name: 'مجموعة مكياج كاملة',
        image: 'https://cdn.shopify.com/s/files/1/0612/0382/products/makeup-set_400x400.jpg',
        price: 32.00,
        originalPrice: 42.00,
        discount: 24,
        sold: '1.5k+',
        category: 'مكياج',
        sku: 'hz002...'
      }
    ]
  },
  {
    id: 'adidas',
    name: 'أديداس KW',
    nameEn: 'Adidas',
    logo: 'https://logo.clearbit.com/adidas.com',
    color: '#000000',
    url: 'https://www.adidas.com.kw/',
    categories: ['كل', 'أحذية', 'ملابس', 'اكسسوارات'],
    products: [
      {
        id: 'ad1',
        name: 'حذاء الترا بوست أديداس',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ultraboost.jpg',
        price: 89.00,
        originalPrice: 120.00,
        discount: 26,
        sold: '5k+',
        category: 'أحذية',
        sku: 'ad001...'
      },
      {
        id: 'ad2',
        name: 'تيشيرت أديداس أوريجينال',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/originals-tee.jpg',
        price: 25.00,
        originalPrice: 35.00,
        discount: 29,
        sold: '3k+',
        category: 'ملابس',
        sku: 'ad002...'
      }
    ]
  },
  {
    id: 'manuka',
    name: 'مانوكا تركيا',
    nameEn: 'MANUKA',
    logo: 'https://logo.clearbit.com/manuka.com.tr',
    color: '#c41e3a',
    url: 'https://www.manuka.com.tr/',
    categories: ['كل', 'ملابس رياضية', 'أحذية', 'اكسسوارات'],
    products: [
      {
        id: 'mn1',
        name: 'طقم رياضي مانوكا للنساء',
        image: 'https://cdn.manuka.com.tr/sportswear-women.jpg',
        price: 35.00,
        originalPrice: 50.00,
        discount: 30,
        sold: '1k+',
        category: 'ملابس رياضية',
        sku: 'mn001...'
      }
    ]
  },
  {
    id: 'n11',
    name: 'N11 التركي',
    nameEn: 'N11',
    logo: 'https://logo.clearbit.com/n11.com',
    color: '#7B2D8E',
    url: 'https://www.n11.com/',
    categories: ['كل', 'إلكترونيات', 'أزياء', 'المنزل'],
    products: [
      {
        id: 'n1',
        name: 'سماعات بلوتوث لاسلكية',
        image: 'https://cdn.n11.com/bluetooth-headphones.jpg',
        price: 15.00,
        originalPrice: 25.00,
        discount: 40,
        sold: '7k+',
        category: 'إلكترونيات',
        sku: 'n11001...'
      },
      {
        id: 'n2',
        name: 'شاحن سريع USB-C',
        image: 'https://cdn.n11.com/usb-charger.jpg',
        price: 8.00,
        originalPrice: 12.00,
        discount: 33,
        sold: '10k+',
        category: 'إلكترونيات',
        sku: 'n11002...'
      }
    ]
  },
  {
    id: 'hepsiburada',
    name: 'هيبسي تركيا',
    nameEn: 'Hepsiburada',
    logo: 'https://logo.clearbit.com/hepsiburada.com',
    color: '#FF6000',
    url: 'https://www.hepsiburada.com/',
    categories: ['كل', 'إلكترونيات', 'أزياء', 'مستلزمات منزلية'],
    products: [
      {
        id: 'hp1',
        name: 'تابلت أندرويد 10 انش',
        image: 'https://cdn.hepsiburada.com/tablet.jpg',
        price: 120.00,
        originalPrice: 180.00,
        discount: 33,
        sold: '2k+',
        category: 'إلكترونيات',
        sku: 'hp001...'
      }
    ]
  },
  {
    id: 'trendyolmilla',
    name: 'ترنديول ميلا',
    nameEn: 'Trendyol Milla',
    logo: 'https://logo.clearbit.com/trendyol.com',
    color: '#2D2D2D',
    url: 'https://www.trendyol.com/trendyolmilla',
    categories: ['كل', 'فساتين', 'بلوزات', 'بناطيل'],
    products: [
      {
        id: 'tm1',
        name: 'فستان سهرة ترنديول ميلا',
        image: 'https://cdn.dsmcdn.com/ty1610/product/media/images/prod/evening-dress.jpg',
        price: 28.00,
        originalPrice: 40.00,
        discount: 30,
        sold: '1.5k+',
        category: 'فساتين',
        sku: 'tm001...'
      }
    ]
  },
  {
    id: 'next',
    name: 'نيكست - الكويت',
    nameEn: 'NEXT',
    logo: 'https://logo.clearbit.com/next.co.uk',
    color: '#333333',
    url: 'https://www.next.com.kw/',
    categories: ['كل', 'نساء', 'رجال', 'أطفال'],
    products: [
      {
        id: 'nx1',
        name: 'بلوزة كاجوال نيكست',
        image: 'https://xcdn.next.co.uk/common/Items/Default/Default/Publications/blouse.jpg',
        price: 22.00,
        originalPrice: 30.00,
        discount: 27,
        sold: '900+',
        category: 'نساء',
        sku: 'nx001...'
      }
    ]
  },
  {
    id: 'amazon',
    name: 'امازون تركيا',
    nameEn: 'Amazon',
    logo: 'https://logo.clearbit.com/amazon.com.tr',
    color: '#FF9900',
    url: 'https://www.amazon.com.tr/',
    categories: ['كل', 'إلكترونيات', 'كتب', 'المنزل', 'أزياء'],
    products: [
      {
        id: 'am1',
        name: 'سماعات أذن لاسلكية',
        image: 'https://m.media-amazon.com/images/I/earbuds.jpg',
        price: 20.00,
        originalPrice: 35.00,
        discount: 43,
        sold: '15k+',
        category: 'إلكترونيات',
        sku: 'am001...'
      },
      {
        id: 'am2',
        name: 'كاميرا ويب HD 1080p',
        image: 'https://m.media-amazon.com/images/I/webcam.jpg',
        price: 28.00,
        originalPrice: 45.00,
        discount: 38,
        sold: '4k+',
        category: 'إلكترونيات',
        sku: 'am002...'
      }
    ]
  }
];

export const USD_TO_IQD = 1700;

export const SHIPPING_COST_IQD = 3000;

export const formatIQD = (amount) => {
  return `${Math.round(amount).toLocaleString('en-US')}`;
};

export const usdToIqd = (usd) => {
  return Math.round(usd * USD_TO_IQD);
};

export default stores;
