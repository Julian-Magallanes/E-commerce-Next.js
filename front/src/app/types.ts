export interface ICategory {
    name: string;
}

export interface IProduct {
    id:string;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
  }