export default interface JoinInterface {

    table: string;
    alias: string;
    type: string;
    local: string;
    foreign: string;
    columns: string[];

}