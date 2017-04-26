import Ember from 'ember';

export default Ember.Component.extend({
  collapsed: true,
  actions: {
    toggle() {
      this.toggleProperty('collapsed');
    },
    saveStory() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        img: this.get('img'),
        text: this.get('text')
      };
      this.sendAction('saveStory', params);
      this.toggleProperty('collapsed');
    }
  }
});
