Famous = {};

Famous._onLoad = [];

//XXX figure out how to properly define components once Famo.us is released
//in the meantime use our hacked together loaded function
Famous.loaded = function (func) {
    Famous._onLoad.push(func);
};