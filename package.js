Package.describe({
  name: 'raix:localforage-indexeddb',
  version: '1.2.4',
  summary: "Offline storage driver IndexedDB"
});

Package.on_use(function (api) {
  // api.versionsFrom('1.2');
  api.use('ecmascript', 'client');

  api.addFiles('indexeddb.js', 'client');
  api.export('asyncStorage', 'client');
});
