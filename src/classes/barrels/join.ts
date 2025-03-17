import Barrel from '../barrel';
import { JoinBarrelInterface } from '../../interfaces/barrels/join';

export default class JoinBarrel extends Barrel implements JoinBarrelInterface {

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