import { IdnEntity } from './entity/IdnEntity';
import { SchemeEntity } from './entity/SchemeEntity';
export type * from './TheColorTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TheColorEntityBase } from './TheColorEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class TheColorSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Idn(entopts?: Record<string, any>): IdnEntity;
    Scheme(entopts?: Record<string, any>): SchemeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TheColorSDK;
    tester(testopts?: any, sdkopts?: any): TheColorSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TheColorSDK;
export { stdutil, config, BaseFeature, TheColorEntityBase, TheColorSDK, SDK, };
