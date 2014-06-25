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
        action: function () {
            Application.show('home');
        }
    });

    this.route('about', {
        path: '/about',
        action: function () {
            Application.show('about');
        }
    });
});
