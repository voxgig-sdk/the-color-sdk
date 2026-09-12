import { TheColorEntityBase } from '../TheColorEntityBase';
import type { TheColorSDK } from '../TheColorSDK';
import type { Control } from '../types';
import type { Idn, IdnLoadMatch } from '../TheColorTypes';
declare class IdnEntity extends TheColorEntityBase<Idn> {
    constructor(client: TheColorSDK, entopts: any);
    make(this: IdnEntity): IdnEntity;
    load(this: any, reqmatch?: IdnLoadMatch, ctrl?: Control): Promise<IdnEntity>;
}
export { IdnEntity };
