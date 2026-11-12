import { httpClient } from "../api/HttpClientService";
import type { ProductDto } from "../types/type";

export const productService = {
    getAll: () => 
        httpClient.get<ProductDto[]>({controller:"Products"}),

    getById:(id:string) =>
        httpClient.get<ProductDto>({controller:"Products"},id),

}

