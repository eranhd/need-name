export class Team{

    public lead:string;
    public members:string[];


    constructor(){
        this.lead = 'leader';
    };

    public toString():string
    {
        return this.lead + '';
    }
}