import { JoinBarrelInterface } from './join';
export interface ColumnsBarrelInterface {
    select: string[];
    insert: string[];
    update: string[];
    exact: string[];
    flexible: string[];
    search: string[];
    auto: string[];
    guids: string[];
    numbers: string[];
    dates: string[];
    booleans: string[];
    strings: string[];
    primary: string;
    sortkey: string;
    sortcol: string;
    sortdir: string;
    sortorder: string;
    all: string[];
    keyin: string;
    keyout: string;
    nokey: string;
    unlike: string;
    unequal: string;
    autosort: boolean;
    joins: JoinBarrelInterface[];
}
//# sourceMappingURL=columns.d.ts.map