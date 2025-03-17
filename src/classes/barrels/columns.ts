import Barrel from '../barrel';
import ColumnsInterface from '../interfaces/columns';
import JoinInterface from '../interfaces/join';

export default class ColumnsBarrel extends Barrel implements ColumnsInterface {

    select: string[]                        = [];
    insert: string[]                        = [];
    update: string[]                        = [];
    exact: string[]                         = [];
    flexible: string[]                      = [];
    search: string[]                        = [];
    guids: string[]                         = [];
    numbers: string[]                       = [];
    dates: string[]                         = [];
    booleans: string[]                      = [];
    strings: string[]                       = [];
    auto: string[]                          = [];
    primary: string                         = '';
    sortcol: string                         = '';
    sortdir: string                         = 'asc';
    sortorder: string                       = '';
    unlike: string                          = '';
    unequal: string                         = '';
    aliases: {[key: string]: any}           = {};
    all: string[]                           = [];
    keyin: string                           = '';
    keyout: string                          = '';
    nokey: string                           = '';
    sortkey: string                         = '';
    autosort: boolean                       = false;
    joins: JoinInterface[]                  = [];

    constructor() { super({}); }    
}