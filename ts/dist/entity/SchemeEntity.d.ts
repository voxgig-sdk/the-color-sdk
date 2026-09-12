import { TheColorEntityBase } from '../TheColorEntityBase';
import type { TheColorSDK } from '../TheColorSDK';
import type { Control } from '../types';
import type { Scheme, SchemeListMatch } from '../TheColorTypes';
declare class SchemeEntity extends TheColorEntityBase<Scheme> {
    constructor(client: TheColorSDK, entopts: any);
    make(this: SchemeEntity): SchemeEntity;
    list(this: any, reqmatch?: SchemeListMatch, ctrl?: Control): Promise<SchemeEntity[]>;
}
export { SchemeEntity };
