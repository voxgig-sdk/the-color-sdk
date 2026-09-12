import { Context } from './Context';
declare class TheColorError extends Error {
    isTheColorError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { TheColorError };
