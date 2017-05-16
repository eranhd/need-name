export class Team{

    lead:string;
    members:Member[];


    constructor(){
        this.lead = 'leader';
    };

    public toString():string
    {
        return this.lead + '';
    }

    initMembersArray(num){
        this.members = new Array(num);
        for(let i = 0; i < this.members.length; i++){
            this.members[i] = new Member();
            this.members[i].index = i;
        }
        console.log(this.members)
    }
}

export class Member{
    name: string;
    index: number;
}