export class TableItem{
    private type: string;
    private col: number;
    private head: string[];
    private rows: string[][];

    constructor(type: string, col: number, head: string[]){
        this.type = type;
        this.col = col;
        this.head = head;
        this.rows = []
    };

    public getTypeRows(){
    };

    public addRow(row: string[]){
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
