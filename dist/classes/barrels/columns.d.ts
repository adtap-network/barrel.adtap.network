import Barrel from '../barrel';
import { ColumnsBarrelInterface } from '../../interfaces/barrels/columns';
import { JoinBarrelInterface } from '../../interfaces/barrels/join';
export default class ColumnsBarrel extends Barrel implements ColumnsBarrelInterface {
    select: string[];
    insert: string[];
    update: string[];
    exact: string[];
    flexible: string[];
    search: string[];
    guids: string[];
    numbers: string[];
    dates: string[];
    booleans: string[];
    strings: string[];
    auto: string[];
    primary: string;
    sortcol: string;
    sortdir: string;
    sortorder: string;
    unlike: string;
    unequal: string;
    aliases: {
        [key: string]: any;
    };
    all: string[];
    keyin: string;
    keyout: string;
    nokey: string;
    sortkey: string;
    autosort: boolean;
    joins: JoinBarrelInterface[];
    constructor();
}
//# sourceMappingURL=columns.d.ts.map