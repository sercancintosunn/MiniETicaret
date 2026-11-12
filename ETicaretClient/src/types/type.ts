export interface ProductDto{
    id:string,
    name:string,
    stock:number,
    price:number,
}

export interface ProductDtoProps{
    product: ProductDto
}

export type CreateProductDto = Omit<ProductDto,"id">
export type UpdateProductDto = CreateProductDto