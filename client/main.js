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