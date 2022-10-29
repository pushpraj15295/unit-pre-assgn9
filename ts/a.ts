let a: number = 1;

let b: string = "abcd";

var c: boolean = true;

// a = "math";

let d : null = null;
// let e : undefined = undefined;

let e : undefined;

// e = "xyz" 

let f : number[] =[1,2,3];

//or

let g : Array<number> = [1,2,3];

let h : string[] = ["a", "b", "c", "d",];
let h1 : Array<string> = ["h", "i" , "j", "k", "21"];

let I : Array<string | number>= ["j" , "21" ,21 , "jh"]

// let J1 : string[] | number[] = ["hjk",21]

let k : Array<string | number | boolean | Array<number>> = ["as" ,12 , true ,[1,23,4]];


//object  === know the key

let l : { loading : boolean ; error : boolean ; data:[]} = {
     loading : true,
     error : false,
     data : []
}

// record --- data type of value

let l1 : Record<string , boolean> = {
    loading : true,
    error : false,
}


// array of object;

// let Ao :Array< { name: string, age : number , place : string} > = [{name :"raj" , age:25 ,place:"rewa"}]

let Ao :Array< { name: string; age : number;place : string;} > = [{name :"raj" , age:25 ,place:"rewa"}]

let Ao2 : Array<Record<string,string>> = [{name: "y" ,age :"six"}];



// function create

const add = (a: number , b: number) : number =>{

    return a + b;
}

//second number , output type k liye hai ki out put kysa chahiye 

add(1,2);

// 2nd don't return anything ---void

const ad = (a: number , b: number) : void =>{

    console.log(a + b) 
}

ad(1,3)

// [] of []

let p : Array<number[]> = [[1,2],[2,3]];



// / only that 

let country : Array<"India" | "China"> =[ 
    "India", "China" ,
    // "ind", "ch"
]


//or costume data for same thing

type mana = "INDIA" | "CHINA";


let country2 : Array<mana> =[ 
    "INDIA" , "CHINA"
    // "India", "China" ,
    // "ind", "ch"
]


// type is new things

enum Gender {
    "male","female"
}

type user ={
    name : string;email : string;password? :number; 
    gender? : Gender;
}

//optinal me ? lagate hai

let users : Array<user> = [{
     
    name :"rama",email:"a@gamil.com",password:1234,
    gender: Gender.male,
}]


// for check optional users[0]

//************************************** */

// tuple ----- only this nuber of size & type

type q = [string , number ,number?]

let q1:q[] = [
    ["a" , 1],
    ["b" , 2],
    ["c" , 3 ,9],
]



//************************************** */

class Car {

    getTyres(){
      return 4
    }
    getEngine(){
      return "v8"
    }
    getEngineType(){
       return "pertrol" 
    }
}

class Indica extends Car {
   
    getEngineType(){

        return "electrical"
    }
}

let a1 = new Indica();

a1.getTyres();

a1.getEngineType();