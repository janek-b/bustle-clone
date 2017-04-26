import Ember from 'ember';

export default Ember.Component.extend({
  admin: Ember.inject.service('admin'),
  actions: {
    makeAdmin() {
      this.get('admin').makeAdmin();
    }
  }
});
