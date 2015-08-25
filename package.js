Package.describe({
  name: 'raix:localforage-indexeddb',
  version: '1.2.4-rc.1',
  summary: "Offline storage driver IndexedDB"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.2-rc.4');
  api.use('ecmascript', 'client');

  api.addFiles('indexeddb.js', 'client');
  api.export('asyncStorage', 'client');
});
