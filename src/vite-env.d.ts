/// <reference types="vite/client" />

interface Food {
  id: number;
  name: string;
  price: number;
}

interface Store {
  // id: number;
  _id: string;
  name: string;
  foods: Food[];
}
