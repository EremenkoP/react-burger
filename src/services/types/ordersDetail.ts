type TOrder ={
  _id:string;
  ingredients: Array<string>;
  status: "done" | "created" | "pending" | "cancel" | 'none';
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number
}

export { TOrder}
