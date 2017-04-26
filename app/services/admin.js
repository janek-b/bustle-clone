import Ember from 'ember';

export default Ember.Service.extend({
  isAdmin: null,

  init() {
    this._super(...arguments);
    this.set('idAdmin', true);
  },

  makeAdmin() {
    this.set('isAdmin', true);
  },

  removeAdmin() {
    this.set('isAdmin', false);
  }
});
