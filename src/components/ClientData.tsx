export type Client={
   readonly id:number;
    name:string;
    balance:number;
    transactions?:Transactions[];
    isActiveClient:boolean;
  }
  
export type Transactions={
    company:string
    amount:number
    date:Date
  }
  
  export const clients:Client[]= [
  {
    id:1,
    name:"Adam Busby",
    balance:100_350.84,
    isActiveClient:true,
  },
  {
    id:2,
    name:"Lily Wagner",
    balance:10_250.75,
    isActiveClient:false,
  },
  {    
    id:3,
    name:"Wren Scott",
    balance:353.00,
    isActiveClient:true,
  },
  {   
    id:4,
    name:"Weston Ray",
    balance:1_940.82,
    isActiveClient:true,
  },
  {   
    id:5,
    name:"Shay Nelson",
    balance:7_940.34,
    isActiveClient:false,
  },
  {   
    id:6,
    name:"Dani Braxton",
    balance:45_940.58,
    isActiveClient:true,
  },
  {   
    id:7,
    name:"Peggy Mai",
    balance:23_940.47,
    isActiveClient:true,
  },
  {   
    id:8,
    name:"Ashley Scott",
    balance:353.00,
    isActiveClient:true,
  },
  {   
    id:9,
    name:"Tommy Ray",
    balance:1_940.82,
    isActiveClient:true,
  },
  {   
    id:10,
    name:"Ray Nelson",
    balance:7_940.34,
    isActiveClient:false,
  },
  {   
    id:11,
    name:"Wilson Braxton",
    balance:45_940.58,
    isActiveClient:true,
  },
  {   
    id:12,
    name:"Poppy Mai",
    balance:23_940.47,
    isActiveClient:true,
  },
  ]