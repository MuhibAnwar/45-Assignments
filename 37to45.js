var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//TASK 37
function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    console.log("A${size} shirt will be printed with the message: ${text}.");
}
make_shirt('large', 'I LOVE TYPESCRIPT ');
function make_shirt1(size, text) {
    if (size === void 0) { size = 'medium'; }
    console.log("A ".concat(size, " shirt will be printed with the message: ").concat(text, "."));
}
make_shirt1('medium', 'I love Typescript!');
function make_shirt2(size, text) {
    if (size === void 0) { size = 'xl'; }
    console.log("A ".concat(size, " shirt will be printed with the message: ").concat(text, "."));
}
make_shirt2('xl', 'I love Typescript!');
//TASK 38
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('lahore');
describe_city('karachi');
describe_city('islamabad');
//TASK 39
var city_country = function (city, country) {
    return "".concat(city, ", ").concat(country);
};
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Mumbai', 'India'));
console.log(city_country('New York', 'USA'));
function describe_album(album) {
    console.log("Album: ".concat(album.title));
    console.log("Artist: ".concat(album.artist));
}
var album1 = {
    title: 'Blue Train',
    artist: 'John Coltrane',
};
var album2 = {
    title: 'Open letter',
    artist: 'Talha anjum',
};
var album3 = {
    title: 'KON',
    artist: 'Talha younus',
};
describe_album(album1);
describe_album(album2);
describe_album(album3);
//TASK 41
var NamesOfMagician = ['joker', 'fakri', 'josha'];
var show_magicians = function () {
    for (var i = 0; i < NamesOfMagician.length; i++) {
        console.log(NamesOfMagician[i]);
    }
};
show_magicians();
//TASK 42     
var NamesOfMagician1 = ['nosh', 'nickel', 'carlos'];
var show_magicians1 = function () {
    for (var i = 0; i < NamesOfMagician.length; i++) {
        console.log(NamesOfMagician1[i]);
    }
};
var make_great1 = function () {
    for (var i = 0; i < NamesOfMagician1.length; i++) {
        NamesOfMagician1[i] = "The Great ".concat(NamesOfMagician1[i], "!");
        console.log(NamesOfMagician1[i]);
    }
};
console.log("Simple Names of Magicians");
show_magicians1();
console.log(" Names of The Great Magicians");
make_great1();
//TASK 43
var NamesOfMagician2 = ['joker', 'fakri', 'josha'];
var copyMagicians = __spreadArray([], NamesOfMagician, true);
function show_magicians2() {
    for (var i = 0; i < NamesOfMagician2.length; i++) {
        console.log(NamesOfMagician2[i]);
    }
}
;
// add  'The great' words in array.
var make_great2 = function (great) {
    var newArr = "";
    for (var _i = 0, copyMagicians_1 = copyMagicians; _i < copyMagicians_1.length; _i++) {
        var Names = copyMagicians_1[_i];
        newArr += "".concat(great, " ").concat(Names, "\n");
    }
    return newArr;
};
var greatMagicians = make_great2("The Great");
var MakeArr = greatMagicians.split("\n").filter(function (name) { return name !== ''; }); // .filter() was see from chatgpt  its remove ''.
console.log("Orignal Names of Magicians");
console.log(NamesOfMagician2);
console.log(" Names of The Great Magicians");
console.log(MakeArr);
//TASK 44
//function makesandwich(..items) {
// console.log('Summary sandwiches')
function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("        Sandwitch Summary!");
    if (items.length > 0) {
        console.log('you ordered sandwich with these items'),
            items.forEach(function (item) { return console.log(item); });
    }
}
makesandwich('salad', 'chili');
makesandwich('chicken', 'salad');
makesandwich('Beef', 'salad');
function myCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var vechile = myCar('toyota', 'yaris', { color: 'black', year: '2024' });
console.log(vechile);
//COMPLETED
