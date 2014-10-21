Package.describe({
    summary: "Flexible data modeling for Meteor"
});

Package.on_use(function (api){
    api.use('underscore', ['server', 'client']);
    api.add_files('lib/sprintf.js');
    api.export('sprintf', ['client', 'server']);
});
