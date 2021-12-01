interface Ioptions {
    apiKey?: string;
    sources?: string
}

class Loader {
    baseLink: string;
    options: Ioptions;
    constructor({ baseLink, options }: { baseLink: string; options: Ioptions}) {
        this.baseLink = baseLink;
        this.options = options;
    }
    baselink: string;

    getResp(
        {endpoint, options}:{endpoint:string, options:Ioptions},
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: { ok: boolean; status: number; statusText: string; }) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Ioptions, endpoint: string) {
        const urlOptions: {apiKey?: string} = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    // tslint:disable-next-line: unified-signatures
    load(method: string, endpoint: string, callback: { (): void; (arg0: string): void; }, options: Ioptions) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
