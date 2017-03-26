export class InputItem{

    constructor(private id:string,
    private type:string,
    private label:string,
    private placeHolder:string){

    };

    public getLabel(){
        return this.label;
    };

    public getId(){return this.id};

    public getType(){return this.type};

    public getPlaceHolder(){return this.placeHolder;};
};