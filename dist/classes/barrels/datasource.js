import Barrel from '../barrel';
export default class DatasourceBarrel extends Barrel {
    type;
    host;
    port;
    user;
    hash;
    password;
    database;
    schema;
    constructor(type, host, port, user, hash, password, database, schema) {
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
//# sourceMappingURL=datasource.js.map