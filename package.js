Package.describe({
  summary: "Node-sass is a library that provides binding for Node.js to libsass, the C version of the popular stylesheet preprocessor, Sass.",
  version: '3.4.2',
  name: "chrisbutler:node-sass",
  git: "https://github.com/chrisbutler/meteor-node-sass"
});

Npm.depends({
  'node-sass': "3.4.2",
});

Package.onUse(function (api) {
  api.addFiles([
    'lib/sass.js',
  ], ['server']);

  api.export([
    'sass'
  ]);
});
