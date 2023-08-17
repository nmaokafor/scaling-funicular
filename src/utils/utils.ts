import { Product } from '../types/productTypes';

export const extractLabels = (product: Product) => {
  const { isSustainable, isRecycled, isCarpet, isComingSoon, isGiftcard, isMemberExclusive, isOnlineExclusive } =
    product;

  return [
    { id: 'sustainable', labelTitle: isSustainable, labelText: 'Sustainable', color: 'green' },
    { id: 'recycled', labelTitle: isRecycled, labelText: 'Recycled', color: 'green' },
    { id: 'carpet', labelTitle: isCarpet, labelText: 'Carpet', color: 'blue' },
    { id: 'coming-soon', labelTitle: isComingSoon, labelText: 'Coming Soon', color: 'black' },
    { id: 'gift-card', labelTitle: isGiftcard, labelText: 'Giftcard', color: 'teal' },
    { id: 'member-exclusive', labelTitle: isMemberExclusive, labelText: 'Member Exclusive', color: 'orange' },
    { id: 'online-exclusive', labelTitle: isOnlineExclusive, labelText: 'Online Exclusive', color: 'orange' },
  ];
};
