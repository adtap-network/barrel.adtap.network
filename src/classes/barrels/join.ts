import Barrel from '../barrel';
import JoinInterface from '../interfaces/join';

export default class JoinBarrel extends Barrel implements JoinInterface {

    table: string;
    alias: string;
    type: string;
    local: string;
    foreign: string;
    columns: string[];

    constructor(table: string, alias: string, type: string, local: string, foreign: string, columns: string[]) {
        super({});
        this.table = table;
        this.alias = alias;
        this.type = type;
        this.local = local;
        this.foreign = foreign;
        this.columns = columns;
    }

}