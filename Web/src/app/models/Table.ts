export class TableItem{
    private type:string;
    private col:number;
    private head:string[];
    private rows:string[][];

    constructor(type:string, col:number, head:string[]){
        this.type = type;
        this.col = col;
        this.head = head;
        this.rows = []
    };

    public getTypeRows(){
        this.addRow(['10/11/2017','18:00','yosi']);
        this.addRow(['10/11/2017','20:00','dani']);
    };

    public addRow(row:string[]){
        this.rows.push(row);
    };

    public getTable(){
        return{
            col : this.col,
            head : this.head,
            rows : this.rows
        };
    };

    public getHead(){
        return this.head;
    };

    public getRows(){
        return this.rows;
    };



};