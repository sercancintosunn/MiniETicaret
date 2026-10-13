export interface Product {
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    description: string,
    categoryId: number,
    stock: number
}

export interface ProductCardType {
    product: Product
}


export interface Category {
    id: number,
    name: string
}