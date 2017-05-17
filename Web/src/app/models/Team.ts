export class Team{

    leader:string;
    members:Member[];
    teamNum:number;


    constructor(){

    };


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