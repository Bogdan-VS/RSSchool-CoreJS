import { IData } from '../interface/interface'
// import { IOptions } from '../interface/interface'

type IOptions = {
    sources?: string;
    apiKey?: string;
}

class Loader {
    private options: IOptions;
    private baseLink: string;
    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }:{endpoint: string, options?: IOptions},
        callback: (data: IData) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        console.log(res)
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IOptions, endpoint: string) {
        const urlOptions: {[index: string]: string} = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${(urlOptions)[key]}&`;
        });

        return url.slice(0, -1);
    }

    // tslint:disable-next-line: unified-signatures
    load(method: string, endpoint: string, callback: (data: IData) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: IData) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
