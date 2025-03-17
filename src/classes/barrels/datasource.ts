import Barrel from '../barrel';
import DatasourceInterface from '../interfaces/datasource';

export default class DatasourceBarrel extends Barrel implements DatasourceInterface {

    type: string; 
    host: string; 
    port: number; 
    user: string; 
    hash: string;
    password: string; 
    database: string; 
    schema: string;

    constructor(type: string, host: string, port: number, user: string, hash: string, password: string, database: string, schema: string) {
        super({});
        this.type = type;
        this.host = host;
        this.port = port;
        this.user = user;
        this.hash = hash;
        this.password = password;
        this.database = database;
        this.schema = schema;
    }

}