export interface ProductInterface {


  id: number;
  name: string;
  image: string;
  price: number;
  description:string;
  stars: number;
}

export interface ProductResponseInterface {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: ProductInterface[];
}
