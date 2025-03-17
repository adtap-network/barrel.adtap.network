import Barrel from '../barrel';
import { ColumnsBarrelInterface } from '../../interfaces/barrels/columns';
import { ModelBarrelInterface } from '../../interfaces/barrels/model';
import { RowBarrelInterface } from '../../interfaces/barrels/row';
export default class ModelBarrel extends Barrel implements ModelBarrelInterface {
    table: string;
    alias: string;
    cols: ColumnsBarrelInterface;
    row: RowBarrelInterface;
    aliases: RowBarrelInterface;
    constructor(table: string, cols: ColumnsBarrelInterface, row: RowBarrelInterface, aliases: {
        [key: string]: string;
    });
}
//# sourceMappingURL=model.d.ts.map