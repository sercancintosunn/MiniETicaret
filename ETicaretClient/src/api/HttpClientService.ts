import axios, {type AxiosRequestConfig} from "axios";

type RequestParameter = {
    controller? : string;
    action?:string;
    headers?: AxiosRequestConfig["headers"]
    fullEndPoint?:string
}

export class HtppClientService{

    private client = axios.create({
        baseURL : "https://localhost:7090/api",
    });

    private buildUrl(params : RequestParameter, id?:string) : string{
        if(params.fullEndPoint) return params.fullEndPoint;

        return `${params.controller}${params.action ? `/${params.action}` : ""}${id ? `/${id}` : ""}`;
    }

    async get<T>(request : RequestParameter, id?:string) : Promise<T>{
        const response = await this.client.get<T>(
            this.buildUrl(request,id),
            {headers : request.headers}
        );

        return response.data
    }

    async post<TResponse,TBody>(request: RequestParameter, body: TBody) : Promise<TResponse>{
        const response = await  this.client.post<TResponse>(
            this.buildUrl(request),
            body,
            {headers : request.headers}
        );

        return response.data;
    }

    async put<TResponse,TBody>(request: RequestParameter,id : string,body: TBody) : Promise<TResponse>{
        const response = await this.client.put<TResponse>(
            this.buildUrl(request,id),
            body,
            {headers:request.headers}
        );
        return response.data;
    }
}

export const httpClient = new HtppClientService();