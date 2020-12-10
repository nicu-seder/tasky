const isCool:boolean = true;
const age:number = 56;
const eyeColor:string = 'green';
const pets: string[] = ['a', 'b','c'];
const cats:Array<string> = ['Purcu'];
const wizard:object = {
    a:'John'
};
const meh:undefined = undefined;
const noo:null=null;

//Tuple
const basket:[string,number] = ['basketball', 23];
enum Size {
    Small=1, Medium=2,Large=3
}

let whatever:any = 'dgsdfhdhdhf';
whatever = 5;

//void
let sing = ():string => {
    console.log('sass');
    return 'ags';
};

//never
let error = ():never=>{
    throw Error('oops')
};

//interface
interface RobotArmy {
    count:number,
    type:string,
    magic:string
}

//Function
let fightRobotArmy = (robots:RobotArmy):void=>{
    console.log('FIGHT!!!');
};

//Classes
class Animal{
    private sing:string = 'assdgfl';
    constructor(sound:string) {
        this.sing = sound;
    }

    greet():string{
        return `Hello ${this.sing}`;
    }
}

let lion = new Animal('roar');