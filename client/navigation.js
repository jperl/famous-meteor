Navigation = {};

/**
 * Create a placeholder function to queue the arguments from the last call.
 * If there are any queued arguments when the function is initialized
 * it will call the function with the queued arguments.
 */
var await = function () {
    var queuedArguments = false;
    var func = null;

    return {
        placeholder: function () {
            if (func) {
                func.apply(this, arguments);
                return;
            }

            queuedArguments = arguments;
        },
        initialize: function (newFun) {
            func = newFun;

            if (queuedArguments) {
                func.apply(this, queuedArguments);
            }
        }
    }
};

var goTo = await();
Navigation.goTo = goTo.placeholder;

/**
 * Famous package will hook in here
 */
Navigation.configure = function (options) {
    Navigation.addSection = options.addSection;

    //Setup famous sections based on meteor
    Navigation.addSection('home', Template.home);
    Navigation.addSection('about', Template.about, { content: 'Example data' });

    goTo.initialize(options.goTo);
};

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'blank',
        onBeforeAction: function () {
            Navigation.goTo('home');
        }
    });

    this.route('about', {
        path: '/about',
        template: 'blank',
        onBeforeAction: function () {
            Navigation.goTo('about');
        }
    });
});