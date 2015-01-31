Package.describe({
  name: 'sgi:sprintfjs',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Sprintf JS repackaged for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/pavlovich/meteor-sprintf-js.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.on_use(function (api){
    api.versionsFrom('METEOR@1.0.3')
    api.use('underscore');
    api.addFiles('lib/sprintf.js');
    api.export('sprintf');
    api.export('vsprintf');
});
