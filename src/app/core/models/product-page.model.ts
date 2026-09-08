export const PRODUCT_PAGE_KEYS = [
  'platform',
  'agents',
  'ecosystem',
  'insights',
  'access',
] as const;

export type ProductPageKey = (typeof PRODUCT_PAGE_KEYS)[number];

export function isProductPageKey(value: unknown): value is ProductPageKey {
  return typeof value === 'string' && PRODUCT_PAGE_KEYS.includes(value as ProductPageKey);
}