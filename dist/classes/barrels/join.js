import Barrel from '../barrel';
export default class JoinBarrel extends Barrel {
    table;
    alias;
    type;
    local;
    foreign;
    columns;
    constructor(table, alias, type, local, foreign, columns) {
        super({});
        this.table = table;
        this.alias = alias;
        this.type = type;
        this.local = local;
        this.foreign = foreign;
        this.columns = columns;
    }
}
//# sourceMappingURL=join.js.map