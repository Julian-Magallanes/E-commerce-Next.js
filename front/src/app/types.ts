//usada en utils 
export interface ICategory {
    id:number
    name: string;
}
//usada en utils, cart-order
export interface IProduct {
    id:string;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
    
  }
  //usada en cart-order
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
  //usada en orders
  export interface IOrder{
    id: number;
    status: string;
    date: string;
    user: IUser;
    products: IProduct[];
  }
  //usada en interface IOrders
    export interface IUser {
      id: number;
      name: string;
      email: string;
      address: string;
      phone: string;
      credential: Credential;
  }
//usada en login
export interface ICredential {
  email: string;
  password: string;
}
//usada en register
export interface IRegister {
  email: string;
  password: string;
  passwordValidate: string;
  name: string;
  address: string;
  phone: string;
}