import Barrel from '../barrel';
export default class ModelBarrel extends Barrel {
    table;
    alias;
    cols;
    row;
    aliases;
    constructor(table, cols, row, aliases) {
        super({});
        this.table = table;
        this.alias = "a";
        this.cols = cols;
        this.row = row;
        this.aliases = aliases;
    }
}
//# sourceMappingURL=model.js.map