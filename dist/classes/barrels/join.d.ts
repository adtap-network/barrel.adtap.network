import Barrel from '../barrel';
import { JoinBarrelInterface } from '../../interfaces/barrels/join';
export default class JoinBarrel extends Barrel implements JoinBarrelInterface {
    table: string;
    alias: string;
    type: string;
    local: string;
    foreign: string;
    columns: string[];
    constructor(table: string, alias: string, type: string, local: string, foreign: string, columns: string[]);
}
//# sourceMappingURL=join.d.ts.map