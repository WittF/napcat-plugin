export declare class RequestUtil {
    static HttpsGetCookies(url: string): Promise<{
        [key: string]: string;
    }>;
    private static handleRedirect;
    private static extractCookies;
    static HttpGetJson<T>(url: string, method?: string, data?: any, headers?: {
        [key: string]: string;
    }, isJsonRet?: boolean, isArgJson?: boolean, maxRedirects?: number): Promise<T>;
    static HttpGetText(url: string, method?: string, data?: any, headers?: {
        [key: string]: string;
    }): Promise<string>;
}
