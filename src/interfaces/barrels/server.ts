export interface ServerBarrelInterface {

    agent: { intervals: {[key: string]: number} };

    alerts: {
        message: string,
        link: string,
        code: string,
        image: string,
        source: string,
        senton: string
    }[];

    audit: boolean;

    body: string;

    contentType: string, 

    data: {[key: string]: any};

    datasource: {
        type: string, 
        host: string, 
        port: number, 
        user: string, 
        hash: string, 
        password: string, 
        database: string, 
        schema: string
    };

    datasources: {
        [key: string]: {
            type: string, 
            host: string, 
            port: number, 
            user: string, 
            hash: string, 
            password: string, 
            database: string, 
            schema: string
        }
    };

    domain: string;

    endpoint: {
        id: string, 
        title: string, 
        section: string, 
        module: string, 
        handler: string
    };

    endpoints: {
        [key: string]: {
            id: string, 
            title: string, 
            section: string, 
            module: string, 
            handler: string
        }
    };

    errors: {
        code: string,
        date: string,
        file: string,
        func: string,
        logfile: string,
        message: string,
        type: string,
    }[];

    federation: string;

    headers: string[];

    ip4: string;

    ip6: string;  

    keys: {
        public: string, 
        secret: string, 
        crypt: string 
    };

    layout: string;

    meta: string[];

    modules: {
        apollo: {[key: string]: any},
        astro: {[key: string]: any}, 
        feathers: {[key: string]: any}, 
        svelte: {[key: string]: any}
    };

    mailer: {
        username: string, 
        hash: string, 
        password: string, 
        port: number, 
        from: string, 
        sender: string, 
        host: string, 
        timeout: number
    };

    message: string;

    params: {
        action: string,
        mode: string,
        search: boolean, 
        route: string,
        endpoint: string,
        flags: boolean, 
        task: string,
        nonce: number,
        jwt: string,
        format: string, 
        keywords: string,
        [key: string]: any
    };

    paths: {
        htdocs:	string,
        volume:	string,
        src: string,
        dist: string,
        logs: string,
        templates: string,
        toml: string,
        wasm: string,
        styles: string,
        fonts: string,
        images: string,
        config: string,
        blockext: string
    };

    port: number;

    procs: {
        [key: string]: {
            get: {[key: string]: any}, 
            search: {[key: string]: any}
        }
    };

    ps: string;

    query: { 
        row: {[key: string]: any},
        rows: {[key: string]: any}[],
        recordcount: number,
        filters: {
            formId: string,
            columnlist: string[], 
            currentrow: number, 
            finalstep: number, 
            firststep: number, 
            laststep: number, 
            maxrows: string | number,
            nextstep: number,
            page: number,
            pages: number,
            offset: number,
            recordcount: number,
            sortcol: string,
            sortdir: string,
            newdir: string,
            keywords: string,
            startrow: number,
            totalpages: number,
            totalrows: number,
            tab: number,
            menus: {[key: string]: any},
            columns: {[key: string]: any}[]
        },
        sql: string,
        menus: {[key: string]: any},
        columns: {[key: string]: any}[]
    };

    root: string;

    route: {
        id: string, 
        title: string, 
        format: string, 
        section: string, 
        module: string, 
        handler: string, 
        action: string, 
        level: number
    };
    
    routes: {
        [key: string]: {
            id: string, 
            title: string, 
            format: string, 
            section: string, 
            module: string, 
            handler: string, 
            action: string, 
            level: number
        }
    };
    
    row: {[key: string]: any};
    
    reference: string;

    scripts: string[];
    
    styles: string[];

    statusCode: number;
    
    uploads: {[key: string]: any};

    url: string;
    


}