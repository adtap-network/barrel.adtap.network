import Barrel from '../barrel';
export default class ColumnsBarrel extends Barrel {
    select = [];
    insert = [];
    update = [];
    exact = [];
    flexible = [];
    search = [];
    guids = [];
    numbers = [];
    dates = [];
    booleans = [];
    strings = [];
    auto = [];
    primary = '';
    sortcol = '';
    sortdir = 'asc';
    sortorder = '';
    unlike = '';
    unequal = '';
    aliases = {};
    all = [];
    keyin = '';
    keyout = '';
    nokey = '';
    sortkey = '';
    autosort = false;
    joins = [];
    constructor() { super({}); }
}
//# sourceMappingURL=columns.js.map