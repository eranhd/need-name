export class Team{

    lead: string;
    members: Member[];
    teamNum: number;


    constructor(){
        this.members = [];
        this.teamNum = null;
        this.lead = "";
    };


    initMembersArray(num){
        this.members = new Array(num);
        for (let i = 0; i < this.members.length; i++){
            this.members[i] = new Member();
            this.members[i].index = i;
        }
    }


}

export class Member{
    name: string;
    index: number;
}
