import { BarrelInterface } from './interfaces/barrel';
import { AgentBarrelInterface } from './interfaces/barrels/agent';
import { ColumnsBarrelInterface } from './interfaces/barrels/columns';
import { DatasourceBarrelInterface } from './interfaces/barrels/datasource';
import { EndPointBarrelInterface } from './interfaces/barrels/endpoint';
import { FiltersBarrelInterface } from './interfaces/barrels/filters';
import { JoinBarrelInterface } from './interfaces/barrels/join';
import { JsonBarrelInterface } from './interfaces/barrels/json';
import { KeysBarrelInterface } from './interfaces/barrels/keys';
import { MailerBarrelInterface } from './interfaces/barrels/mailer';
import { MessageBarrelInterface } from './interfaces/barrels/message'
import { ModelBarrelInterface } from './interfaces/barrels/model';
import { ParamsBarrelInterface } from './interfaces/barrels/params';
import { PathsBarrelInterface } from './interfaces/barrels/paths';
import { ProcedureBarrelInterface } from './interfaces/barrels/procedure';
import { QueryBarrelInterface } from './interfaces/barrels/query';
import { RowBarrelInterface } from './interfaces/barrels/row';
import { ServerBarrelInterface } from './interfaces/barrels/server';

export type { 
    BarrelInterface, AgentBarrelInterface, ColumnsBarrelInterface, DatasourceBarrelInterface,
    EndPointBarrelInterface, FiltersBarrelInterface, JoinBarrelInterface, JsonBarrelInterface,
    KeysBarrelInterface, MailerBarrelInterface, MessageBarrelInterface, ModelBarrelInterface,
    ParamsBarrelInterface, PathsBarrelInterface, ProcedureBarrelInterface, QueryBarrelInterface,
    RowBarrelInterface, ServerBarrelInterface
}

import Barrel from './classes/barrel';
import ColumnsBarrel from './classes/barrels/columns';
import DatasourceBarrel from './classes/barrels/datasource';
import JoinBarrel from './classes/barrels/join';
import ModelBarrel from './classes/barrels/model';
import RowBarrel from './classes/barrels/row';

export {
    Barrel as Barrel, ColumnsBarrel as ColumnsBarrel, DatasourceBarrel as DatasourceBarrel,
    JoinBarrel as JoinBarrel, ModelBarrel as ModelBarrel, RowBarrel as RowBarrel
}