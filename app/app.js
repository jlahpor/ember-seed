import Ember from 'ember';
import 'ember-data';
import 'localstorage-adapter';
import Resolver from 'ember/resolver';

var App = Ember.Application.extend({
  modulePrefix: 'ember-seed', // TODO: loaded via config
  adapter: DS.LSAdapter.extend({ namespace: 'ember-seed' }),
  serializer: DS.LSSerializer.extend(),
  Resolver: Resolver
});

export default App;
