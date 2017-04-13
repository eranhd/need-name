export class NavItem{
    private txt:string;
    private id:string;
    private url:string;
    private icon:string;

    constructor(txt:string, id:string, url:string, icon:string){
        this.txt = txt;
        this.id = 'nav_item_' + id;
        this.url = url;
        this.icon = icon;
    };

    public setIcon(icon){
        this.icon = icon;
    }

    public getIcon(){
        return this.icon;
    }

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