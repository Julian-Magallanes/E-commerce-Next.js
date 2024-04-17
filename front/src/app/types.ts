export interface ICategory {
    id:number
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
  export interface ICartProduct {
    id:string;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
    count:number;
  }

  export interface IUser {
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
  date: string;
  user: IUser;
  products: IProduct[];
}