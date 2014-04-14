Package.describe({
    summary: 'A wrapper for the famous library, exposing the various modules.'
});

Package.on_use(function (api) {
    api.use(['templating'], 'client');

    api.add_files([
        'lib/famous.css', 'lib/polyfills.js', 'lib/famous.js',
        'famous_wrapper.js', 'app.js'
    ], 'client');

    api.export('Famous', 'client');
});