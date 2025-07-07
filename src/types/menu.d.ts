export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badges: string[];
  popular?: boolean;
  quantity?: number;
}