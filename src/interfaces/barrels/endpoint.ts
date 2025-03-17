import BaseInterface from './base';

export default interface EndpointInterface extends BaseInterface {

    id: string;
    title: string;
    section: string;
    module: string;
    handler: string;

}