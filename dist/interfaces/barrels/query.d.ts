import { FiltersBarrelInterface } from './filters';
export interface QueryBarrelInterface {
    row: {
        [key: string]: any;
    };
    rows: {
        [key: string]: any;
    }[];
    recordcount: number;
    filters: FiltersBarrelInterface;
    sql: string;
    menus: {
        [key: string]: any;
    };
    columns: {
        [key: string]: any;
    }[];
}
//# sourceMappingURL=query.d.ts.map