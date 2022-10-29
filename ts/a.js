var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 1;
var b = "abcd";
var c = true;
// a = "math";
var d = null;
// let e : undefined = undefined;
var e;
// e = "xyz" 
var f = [1, 2, 3];
//or
var g = [1, 2, 3];
var h = ["a", "b", "c", "d",];
var h1 = ["h", "i", "j", "k", "21"];
var I = ["j", "21", 21, "jh"];
// let J1 : string[] | number[] = ["hjk",21]
var k = ["as", 12, true, [1, 23, 4]];
//object  === know the key
var l = {
    loading: true,
    error: false,
    data: []
};
// record --- data type of value
var l1 = {
    loading: true,
    error: false
};
// array of object;
// let Ao :Array< { name: string, age : number , place : string} > = [{name :"raj" , age:25 ,place:"rewa"}]
var Ao = [{ name: "raj", age: 25, place: "rewa" }];
var Ao2 = [{ name: "y", age: "six" }];
// function create
var add = function (a, b) {
    return a + b;
};
//second number , output type k liye hai ki out put kysa chahiye 
add(1, 2);
// 2nd don't return anything ---void
var ad = function (a, b) {
    console.log(a + b);
};
ad(1, 3);
// [] of []
var p = [[1, 2], [2, 3]];
// / only that 
var country = [
    "India", "China",
    // "ind", "ch"
];
var country2 = [
    "INDIA", "CHINA"
    // "India", "China" ,
    // "ind", "ch"
];
// type is new things
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
//optinal me ? lagate hai
var users = [{
        name: "rama", email: "a@gamil.com", password: 1234,
        gender: Gender.male
    }];
var q1 = [
    ["a", 1],
    ["b", 2],
    ["c", 3, 9],
];
//************************************** */
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getTyres = function () {
        return 4;
    };
    Car.prototype.getEngine = function () {
        return "v8";
    };
    Car.prototype.getEngineType = function () {
        return "pertrol";
    };
    return Car;
}());
var Indica = /** @class */ (function (_super) {
    __extends(Indica, _super);
    function Indica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Indica.prototype.getEngineType = function () {
        return "electrical";
    };
    return Indica;
}(Car));
var a1 = new Indica();
a1.getTyres();
a1.getEngineType();
