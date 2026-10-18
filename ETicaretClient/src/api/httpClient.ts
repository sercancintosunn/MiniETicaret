import axios, { type AxiosRequestConfig } from "axios";

type RequestParameters = {
    controller?: string;
    action?: string;
    fullEndPoint?: string;
    headers?: AxiosRequestConfig["headers"];
};

class HttpClientService {
    private client = axios.create({
        baseURL: "https://localhost:7090/api"
    });

    private url(params: RequestParameters, id?: string): string {
        if (params.fullEndPoint) return params.fullEndPoint;

        return `/${params.controller ?? ""}${params.action ? `/${params.action}` : ""}${id ? `/${id}` : ""}`;
    }

    async get<T>(params: RequestParameters, id: string): Promise<T> {
        const response = await this.client.get<T>(this.url(params, id), { headers: params.headers });
        return response.data;
    }
}


export const httpClient = new HttpClientService()