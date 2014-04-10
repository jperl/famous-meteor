Famous = {};

Famous._onLoad = [];

//XXX figure out how to properly define components once Famo.us is released
//in the meantime use our hacked together loaded function
Famous.loaded = function (func) {
    Famous._onLoad.push(func);
};

// render a template to a div so we can use it in a surface
Famous.render = function (template, data) {
    var div = document.createElement('div');
    UI.insert(data ? UI.renderWithData(template, data) : UI.render(template), div);
    return div;
};