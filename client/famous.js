// setup famous app

require("famous-polyfills"); // Add polyfills
require("famous/core/famous"); // Add the default css file

Meteor.startup(function () {
    var Engine = require("famous/core/Engine");
    var View = require("famous/core/View");

    var Surface = require("famous/core/Surface");
    var Lightbox = require("famous/views/Lightbox");

    function App() {
        View.apply(this, arguments);

        // create and assign a lightbox to this view
        this.lightbox = new Lightbox({
            inTransition: {curve: 'easeIn', duration: 300}
        });
        this.add(this.lightbox);

        this._eventInput.pipe(this.lightbox);

        this._sectionSurfaces = [];
    }

    App.prototype = Object.create(View.prototype);
    App.prototype.constructor = App;

    App.prototype.addSection = function (name, template, data) {
        // create the div for the meteor template
        var div = document.createElement('div');
        UI.insert(data ? UI.renderWithData(template, data) : UI.render(template), div);

        this._sectionSurfaces[name] = new Surface({
            content: div,
            size: [true, true]
        });
    };

    App.prototype.goTo = function (sectionName) {
        if (this._sectionSurfaces[sectionName]) {
            this.lightbox.show(this._sectionSurfaces[sectionName]);
        }
    };


    // create the App from the template
    var app = new App();

    // hook the app into the context
    var appContext = Engine.createContext();
    appContext.add(app);
    Engine.pipe(app);

    //Link famous to meteor navigator
    Navigation.configure({
        addSection: app.addSection.bind(app),
        goTo: app.goTo.bind(app)
    });
});