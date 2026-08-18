import { DEMO } from '../demo-ids.js';
import { demoImageUrl } from '../demo-images.js';
import type { SeedClients } from '../prisma-clients.js';

export type CatalogProduct = {
  id: string;
  sku: string;
  name: string;
  brandId: string;
  categoryId: string;
  trackingMethod: 'SERIALIZED' | 'NON_SERIALIZED';
  type: 'DEVICE' | 'ACCESSORY';
  sellingPrice: number;
  cost: number;
  units: number; // serial units to create (0 for non-serialized → qtyOnHand)
  qtyOnHand?: number;
  imageUrl?: string;
};

/** ~25 products across brands/categories for POS + inventory testing */
export function buildCatalogProducts(): CatalogProduct[] {
  const [apple, dell, hp, lenovo, samsung] = DEMO.brands;
  const [laptops, phones, accessories] = DEMO.categories;

  const products: CatalogProduct[] = [
    {
      id: 'a1000000-0000-4000-8000-000000000601',
      sku: 'STOVASH-DEMO-APL-MBA-M2',
      name: 'MacBook Air M2 13"',
      brandId: apple.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 1_450_000,
      cost: 1_100_000,
      units: 4,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000602',
      sku: 'STOVASH-DEMO-APL-MBP-14',
      name: 'MacBook Pro 14"',
      brandId: apple.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 2_200_000,
      cost: 1_750_000,
      units: 3,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000603',
      sku: 'STOVASH-DEMO-DEL-XPS-13',
      name: 'Dell XPS 13',
      brandId: dell.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 1_250_000,
      cost: 950_000,
      units: 4,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000604',
      sku: 'STOVASH-DEMO-DEL-LAT-5520',
      name: 'Dell Latitude 5520',
      brandId: dell.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 980_000,
      cost: 720_000,
      units: 3,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000605',
      sku: 'STOVASH-DEMO-HP-ELITE-840',
      name: 'HP EliteBook 840',
      brandId: hp.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 1_050_000,
      cost: 800_000,
      units: 3,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000606',
      sku: 'STOVASH-DEMO-HP-PAV-15',
      name: 'HP Pavilion 15',
      brandId: hp.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 720_000,
      cost: 520_000,
      units: 3,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000607',
      sku: 'STOVASH-DEMO-LEN-T14',
      name: 'Lenovo ThinkPad T14',
      brandId: lenovo.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 1_150_000,
      cost: 880_000,
      units: 3,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000608',
      sku: 'STOVASH-DEMO-LEN-IDEA-3',
      name: 'Lenovo IdeaPad 3',
      brandId: lenovo.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 580_000,
      cost: 420_000,
      units: 3,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000609',
      sku: 'STOVASH-DEMO-SAM-BOOK3',
      name: 'Samsung Galaxy Book3',
      brandId: samsung.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 890_000,
      cost: 680_000,
      units: 2,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000610',
      sku: 'STOVASH-DEMO-APL-IP15',
      name: 'iPhone 15 128GB',
      brandId: apple.id,
      categoryId: phones.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 1_180_000,
      cost: 950_000,
      units: 4,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000611',
      sku: 'STOVASH-DEMO-APL-IP14',
      name: 'iPhone 14 128GB',
      brandId: apple.id,
      categoryId: phones.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 890_000,
      cost: 700_000,
      units: 3,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000612',
      sku: 'STOVASH-DEMO-SAM-S24',
      name: 'Samsung Galaxy S24',
      brandId: samsung.id,
      categoryId: phones.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 980_000,
      cost: 780_000,
      units: 4,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000613',
      sku: 'STOVASH-DEMO-SAM-A55',
      name: 'Samsung Galaxy A55',
      brandId: samsung.id,
      categoryId: phones.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 520_000,
      cost: 390_000,
      units: 4,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000614',
      sku: 'STOVASH-DEMO-SAM-A15',
      name: 'Samsung Galaxy A15',
      brandId: samsung.id,
      categoryId: phones.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 220_000,
      cost: 160_000,
      units: 3,
    },
    // Accessories — non-serialized
    {
      id: 'a1000000-0000-4000-8000-000000000620',
      sku: 'STOVASH-DEMO-ACC-USB-C',
      name: 'USB-C Charging Cable',
      brandId: apple.id,
      categoryId: accessories.id,
      trackingMethod: 'NON_SERIALIZED',
      type: 'ACCESSORY',
      sellingPrice: 15_000,
      cost: 6_000,
      units: 0,
      qtyOnHand: 40,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000621',
      sku: 'STOVASH-DEMO-ACC-CASE-CLR',
      name: 'Clear Phone Case',
      brandId: samsung.id,
      categoryId: accessories.id,
      trackingMethod: 'NON_SERIALIZED',
      type: 'ACCESSORY',
      sellingPrice: 12_000,
      cost: 4_500,
      units: 0,
      qtyOnHand: 60,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000622',
      sku: 'STOVASH-DEMO-ACC-EARBUDS',
      name: 'Wireless Earbuds',
      brandId: samsung.id,
      categoryId: accessories.id,
      trackingMethod: 'NON_SERIALIZED',
      type: 'ACCESSORY',
      sellingPrice: 45_000,
      cost: 22_000,
      units: 0,
      qtyOnHand: 25,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000623',
      sku: 'STOVASH-DEMO-ACC-MOUSE',
      name: 'Wireless Mouse',
      brandId: dell.id,
      categoryId: accessories.id,
      trackingMethod: 'NON_SERIALIZED',
      type: 'ACCESSORY',
      sellingPrice: 28_000,
      cost: 12_000,
      units: 0,
      qtyOnHand: 30,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000624',
      sku: 'STOVASH-DEMO-ACC-BAG',
      name: 'Laptop Backpack 15"',
      brandId: hp.id,
      categoryId: accessories.id,
      trackingMethod: 'NON_SERIALIZED',
      type: 'ACCESSORY',
      sellingPrice: 55_000,
      cost: 28_000,
      units: 0,
      qtyOnHand: 18,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000625',
      sku: 'STOVASH-DEMO-ACC-SSD-1TB',
      name: 'External SSD 1TB',
      brandId: samsung.id,
      categoryId: accessories.id,
      trackingMethod: 'NON_SERIALIZED',
      type: 'ACCESSORY',
      sellingPrice: 145_000,
      cost: 95_000,
      units: 0,
      qtyOnHand: 12,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000626',
      sku: 'STOVASH-DEMO-ACC-SCREEN',
      name: 'Laptop Screen Protector',
      brandId: lenovo.id,
      categoryId: accessories.id,
      trackingMethod: 'NON_SERIALIZED',
      type: 'ACCESSORY',
      sellingPrice: 18_000,
      cost: 7_000,
      units: 0,
      qtyOnHand: 35,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000627',
      sku: 'STOVASH-DEMO-ACC-HUB',
      name: 'USB-C Multiport Hub',
      brandId: apple.id,
      categoryId: accessories.id,
      trackingMethod: 'NON_SERIALIZED',
      type: 'ACCESSORY',
      sellingPrice: 65_000,
      cost: 32_000,
      units: 0,
      qtyOnHand: 15,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000628',
      sku: 'STOVASH-DEMO-APL-IP13',
      name: 'iPhone 13 128GB',
      brandId: apple.id,
      categoryId: phones.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 620_000,
      cost: 480_000,
      units: 3,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000629',
      sku: 'STOVASH-DEMO-DEL-INSP-15',
      name: 'Dell Inspiron 15',
      brandId: dell.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 650_000,
      cost: 480_000,
      units: 3,
    },
    {
      id: 'a1000000-0000-4000-8000-000000000630',
      sku: 'STOVASH-DEMO-HP-15S',
      name: 'HP 15s Laptop',
      brandId: hp.id,
      categoryId: laptops.id,
      trackingMethod: 'SERIALIZED',
      type: 'DEVICE',
      sellingPrice: 540_000,
      cost: 400_000,
      units: 2,
    },
  ];

  for (const product of products) {
    product.imageUrl = demoImageUrl(product.sku);
    if (product.trackingMethod === 'SERIALIZED') {
      product.units = 20;
    } else if (product.qtyOnHand) {
      product.qtyOnHand *= 3;
    }
  }

  return products;
}

export function serialFor(productSku: string, index: number): string {
  const short = productSku.replace('STOVASH-DEMO-', '');
  return `STOVASH-DEMO-SN-${short}-${String(index).padStart(2, '0')}`;
}

export function itemIdFor(productId: string, index: number): string {
  // product ids end with 0601..0630 — encode unit index in last two hex-ish digits
  const base = productId.slice(0, -2);
  const n = Number(productId.slice(-2)) * 10 + index;
  return `${base}${String(n).padStart(2, '0')}`;
}

export async function seedCatalog(clients: SeedClients): Promise<CatalogProduct[]> {
  const brandIdByName = new Map<string, string>();
  for (const brand of DEMO.brands) {
    const row = await clients.inventory.brand.upsert({
      where: { tenantId_name: { tenantId: DEMO.tenantId, name: brand.name } },
      update: { shopId: null },
      create: {
        id: brand.id,
        tenantId: DEMO.tenantId,
        shopId: null,
        name: brand.name,
        createdBy: DEMO.users.admin.id,
      },
    });
    brandIdByName.set(brand.name, row.id);
  }

  const categoryIdByName = new Map<string, string>();
  for (const cat of DEMO.categories) {
    let row = await clients.inventory.category.findFirst({
      where: { tenantId: DEMO.tenantId, name: cat.name },
    });
    if (!row) {
      row = await clients.inventory.category.create({
        data: {
          id: cat.id,
          tenantId: DEMO.tenantId,
          shopId: null,
          name: cat.name,
          createdBy: DEMO.users.admin.id,
        },
      });
    }
    categoryIdByName.set(cat.name, row.id);
  }

  const products = buildCatalogProducts().map((p) => {
    const brandName = DEMO.brands.find((b) => b.id === p.brandId)?.name;
    const catName = DEMO.categories.find((c) => c.id === p.categoryId)?.name;
    return {
      ...p,
      brandId: (brandName && brandIdByName.get(brandName)) || p.brandId,
      categoryId: (catName && categoryIdByName.get(catName)) || p.categoryId,
    };
  });

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const row = await clients.inventory.product.upsert({
      where: { tenantId_sku: { tenantId: DEMO.tenantId, sku: p.sku } },
      update: {
        name: p.name,
        brandId: p.brandId,
        categoryId: p.categoryId,
        trackingMethod: p.trackingMethod,
        type: p.type,
        status: 'ACTIVE',
        quantityOnHand: p.qtyOnHand ?? 0,
        shopId: null,
        imageUrl: p.imageUrl,
        images: p.imageUrl ? [p.imageUrl] : [],
      },
      create: {
        id: p.id,
        tenantId: DEMO.tenantId,
        shopId: null,
        sku: p.sku,
        name: p.name,
        brandId: p.brandId,
        categoryId: p.categoryId,
        trackingMethod: p.trackingMethod,
        type: p.type,
        status: 'ACTIVE',
        quantityOnHand: p.qtyOnHand ?? 0,
        imageUrl: p.imageUrl,
        images: p.imageUrl ? [p.imageUrl] : [],
        createdBy: DEMO.users.admin.id,
      },
    });
    p.id = row.id;

    const priceExists = await clients.inventory.productPrice.findFirst({
      where: { productId: p.id, tenantId: DEMO.tenantId, validTo: null },
    });
    if (!priceExists) {
      await clients.inventory.productPrice.create({
        data: {
          id: `a1000000-0000-4000-8000-000000007${String(i + 1).padStart(3, '0')}`,
          productId: p.id,
          tenantId: DEMO.tenantId,
          sellingPrice: p.sellingPrice,
          createdBy: DEMO.users.admin.id,
        },
      });
    }
  }

  const serialCount = products.reduce((n, p) => n + p.units, 0);
  console.log(
    `  catalog: ${DEMO.brands.length} brands, ${DEMO.categories.length} categories, ${products.length} products (${serialCount} serial slots)`,
  );
  return products;
}
