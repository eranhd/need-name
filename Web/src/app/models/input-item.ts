export class InputItem{

    constructor(public id: string,
    private type: string,
    public label: string,
    public placeHolder: string,
    private valuse?: string[]){
        if (!valuse)
            this.valuse = null;
    };

    public getLabel(){
        return this.label;
    };

    public getId(){return this.id};

    public getType(){return this.type};

    public getPlaceHolder(){return this.placeHolder; };
    public getValues(): string[]{if (this.valuse) return this.valuse; }
};
