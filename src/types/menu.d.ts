
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


export interface Categories{
  id: string;
  name: string
}