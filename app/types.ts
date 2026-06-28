export interface SkincareProduct {
  id: string;
  name: string;
  brand: string;
  category: string; // 'Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Sunscreen', 'Exfoliant', 'Mask', 'Makeup', 'Other'
  dateOpened?: string; // YYYY-MM-DD
  paoMonths?: number; // Period After Opening in months (e.g., 6, 12, 18, 24)
  expirationDate?: string; // YYYY-MM-DD static date
  notes?: string;
  volumeLabel?: string; // E.g., '50ml', '1.7 fl oz'
}