//this models will describe user class.
export class User{

    private id:string;
    private name:string;
    private photoUrl:string;
    private role:Role;
    private sons:User[];

    constructor(id?:string){
        if(id)
            this.getUser(id);
    }


    public getUser(id:string){
        return {
            id : id,
            name : 'eran',
            photoUrl : null,
            role : new Role(1, 'admin'),
            sons : [null]
        };
    }


};

export class Role{

    private type:number;
    private name:string;

    constructor(type:number, name:string){
        this.type = type;
        this.name = name;
    };

    public canDirect(path){
        
    }
};