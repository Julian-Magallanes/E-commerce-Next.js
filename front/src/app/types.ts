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

interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    credential: Credential;
}

export interface IOrder{
  id: number;
  status: string;
  date: Date;
  user: IUser;
  products: IProduct[];
}