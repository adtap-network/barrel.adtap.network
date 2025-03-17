import FiltersInterface from './filters';

export default interface QueryInterface {

    row: {[key: string]: any};
    rows: {[key: string]: any}[];
    recordcount: number;
    filters: FiltersInterface;
    sql: string;
    menus: {[key: string]: any};
    columns: {[key: string]: any}[];

}