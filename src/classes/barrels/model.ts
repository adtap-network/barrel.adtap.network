import Barrel from '../barrel';
import ColumnsInterface from '../interfaces/columns';
import EarthInterface from '../interfaces/earth';
import ModelInterface from '../interfaces/model'; 
import RowInterface from '../interfaces/row';

export default class ModelBarrel extends Barrel implements ModelInterface {
    
    table: string;
    alias: string;
    cols: ColumnsInterface;
    row: RowInterface;
    aliases: EarthInterface;

    constructor(table: string, cols: ColumnsInterface, row: RowInterface, aliases: {[key: string]: string}) {
        super({})
        this.table = table;
        this.alias = "a";
        this.cols = cols;
        this.row = row;
        this.aliases = aliases;
    }    
}