import { urlParser } from './index.js';

const supportedSites = [
  'https://www.uniqlo.com',
  'https://shop.mango.com/',
  'https://www.missguided.co.uk/',
];
const testUrls = [
  'https://www.uniqlo.com/uk/en/product/women-ines-de-la-fressange-3d-knit-seamless-cashmere-blend-manteau-443942.html',
  'https://www.missguided.co.uk/dresses',
  'https://www.missguided.co.uk/chocolate-square-toe-stiletto-heeled-ankle-boots-10253870',
  'https://shop.mango.com/gb/women/bags-shoppers/bag-with-knot-strap_17047735.html',
  'https://www.zara.com/uk/en/velvet-blazer-p02761249.html',
];

describe('url parsser', () => {
  test('should not return full details for unsupported websites', async () => {
    const result = await urlParser(testUrls[4]);
    expect(result).toEqual({
      url: testUrls[4],
      isSupported: false,
      isDetailPage: null,
      isWomansClothing: null,
      itemName: null,
      sizeExample: null,
      materials: [],
    });
  });

  test('should return correct shape for supported site, but not being a details page', async () => {
    const result = await urlParser(testUrls[1]);
    expect(result).toEqual({
      url: testUrls[1],
      isSupported: true,
      isDetailPage: false,
      isWomansClothing: true,
      itemName: null,
      sizeExample: null,
      materials: [],
    });
  });

  test('should not return full details for footwear as they are currenly not supported', async () => {
    const result = await urlParser(testUrls[2]);
    expect(result).toEqual({
      url: testUrls[2],
      isSupported: true,
      isDetailPage: true,
      isWomansClothing: false,
      itemName: null,
      sizeExample: null,
      materials: [],
    });
  });

  test('should not return full details for accessories as they are not supported', async () => {
    const result = await urlParser(testUrls[3]);
    expect(result).toEqual({
      url: testUrls[3],
      isSupported: true,
      isDetailPage: true,
      isWomansClothing: false,
      itemName: null,
      sizeExample: null,
      materials: [],
    });
  });

  test('should return the correct response for valid item url', async () => {
    const result = await urlParser(testUrls[0]);
    expect(result).toEqual({
      url: testUrls[0],
      isSupported: true,
      isDetailPage: true,
      isWomansClothing: true,
      itemName:
        'WOMEN INES DE LA FRESSANGE 3D KNIT SEAMLESS CASHMERE BLEND MANTEAU',
      sizeExample: 'M',
      materials: ['Wool', 'Cashmere'],
    });
  });
});
