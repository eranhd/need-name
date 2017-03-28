export class NavItem{
    private txt:string;
    private id:string;
    private url:string;

    constructor(txt:string, id:string, url:string){
        this.txt = txt;
        this.id = 'nav_item_' + id;
        this.url = url;
    };

    getTxt(){
        return this.txt;
    };
    getUrl(){
        return this.url;
    };
    getId(){
        return this.id;
    };
    
};