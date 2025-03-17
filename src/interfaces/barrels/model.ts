import ColumnsInterface from './columns';
import EarthInterface from '../../../../kegs.adtap.network/src/interfaces/earth';
import RowInterface from './row';

export default interface ModelInterface {
    table: string;
    alias: string;
    cols: ColumnsInterface;
    row: RowInterface;
    aliases: EarthInterface;
}