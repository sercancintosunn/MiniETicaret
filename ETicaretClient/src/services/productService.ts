import { httpClient } from "../api/HttpClientService";
import type { CreateProductDto, ProductDto, UpdateProductDto } from "../types/type";

export const productService = {
    getAll: () => 
        httpClient.get<ProductDto[]>({controller:"Products"}),

    getById:(id:string) =>
        httpClient.get<ProductDto>({controller:"Products"},id),

    post:(body:CreateProductDto) =>
        httpClient.post<ProductDto,CreateProductDto>({controller:"Products"},body),

    put:(body:UpdateProductDto,id:string) =>
        httpClient.put<ProductDto,UpdateProductDto>({controller:"Products"},id,body)

}

