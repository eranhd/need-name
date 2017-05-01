export class NavItem{
    private txt:string;
    private id:string;
    private url:string;
    private icon:string;
    public selected:boolean;

    constructor(txt:string, id:string, url:string, icon:string){
        this.txt = txt;
        this.id = 'nav_item_' + id;
        this.url = url;
        this.icon = icon;
        this.selected = false;
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