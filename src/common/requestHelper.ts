import {ReqRefDefaults, Request} from '@hapi/hapi';

export class RequestHelper {
    private request: Request<ReqRefDefaults>;

    constructor(request: Request<ReqRefDefaults>) {
        this.request = request;
    }

    getParam(name: string): string {
        return this.request.params[name];
    }

    getPayload<T>(): T {
        return this.request.payload as T;
    }
}