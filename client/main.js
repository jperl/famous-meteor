// ------------------ templates -------------------

Template.home.events({
    click: function () {
        Router.go('about');
    }
});

Template.about.events({
    click: function () {
        Router.go('home');
    }
});

// setup famous sections from templates
Meteor.startup(function () {
    Application.addSection('home', Template.home);
    Application.addSection('about', Template.about, { content: 'Example data' });
});

// ------------------ routing -------------------

Router.map(function () {
    this.route('home', {
        path: '/',
        onBeforeAction: function () {
            Application.show('home');
        }
    });

    this.route('about', {
        path: '/about',
        onBeforeAction: function () {
            Application.show('about');
        }
    });
});