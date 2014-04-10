Famous.loaded(function () {
    var Engine = Famous.Engine,
        Surface = Famous.Surface,
        View = Famous.View;

    function App() {
        View.apply(this, arguments);

        // assign the layout to this view
        this.add(new Surface({
            content: Famous.render(Template.myMeteorTemplate)
        }));
    }

    App.prototype = Object.create(View.prototype);
    App.prototype.constructor = App;

    var app = new App();

    // hook the app into the context
    var mainDisplay = Engine.createContext();
    mainDisplay.add(app);
    Engine.pipe(app);
});