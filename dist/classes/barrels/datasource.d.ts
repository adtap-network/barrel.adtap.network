import Barrel from '../barrel';
import { DatasourceBarrelInterface } from '../../interfaces/barrels/datasource';
export default class DatasourceBarrel extends Barrel implements DatasourceBarrelInterface {
    type: string;
    host: string;
    port: number;
    user: string;
    hash: string;
    password: string;
    database: string;
    schema: string;
    constructor(type: string, host: string, port: number, user: string, hash: string, password: string, database: string, schema: string);
}
//# sourceMappingURL=datasource.d.ts.map