export class Node{
    module: Array<Mod>;
    num_mod: Number;
    num_var: Number;
    num_attr: Number;
    ts: Number;
    wc: Number;
}

export class Mod{
    var: Array<Var>;
    key: String;
    name: String;
    gid: Number;
    num_vars: Number;
    id: Number;
    ts: Number;
    wc: Number;
}

export class Var{
    d: any;
    attrs: String;
    key: String;
    opt: Number;
    type: Number;
    max_req_size: Number;
    id: Number;
    mid: Number;
    ts: Number;
    wc: Number;
    len: Number;
    stat: Number;
}