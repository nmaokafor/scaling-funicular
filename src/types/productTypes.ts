export interface Price {
  originalPrice: string;
  discount: string;
  currency: string;
  reducedPrice: string;
}

export interface Images {
  absURL: string;
  alt: string;
  index: string;
  title: string;
  url: string;
}

export interface SizeSelector {
  value: string;
  pid: string;
  available: boolean;
  url: string;
}

export interface Color {
  name: string;
  hexCode: string;
  fit: string | null;
  isFavorite: boolean;
  colorUrl: string;
  colorId: string;
  price: Price;
  images: Images[];
  sizeSelector: SizeSelector[];
}

export interface Product {
  productId: string;
  productName: string;
  isSustainable: boolean;
  isRecycled: boolean;
  isCarpet: boolean;
  isComingSoon: boolean;
  isGiftcard: boolean;
  isMemberExclusive: boolean;
  isOnlineExclusive: boolean;
  colors: Color[];
}
