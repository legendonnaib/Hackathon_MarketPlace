export interface Product{
    _id : string;
    title : string;
    _type : "product";
    productImage? : string;
    price : number;
    description?: string;
    tags : string[];
    discountPercentage : number;
    isNew : boolean;
    slug : {
        current : string;
    };
    quantity: number;
    inventory : number;
    id: number
}