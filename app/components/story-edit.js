import Ember from 'ember';

export default Ember.Component.extend({
  collapsed: true,
  actions: {
    toggle() {
      this.toggleProperty('collapsed');
    },
    updateStory(story) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        img: this.get('img'),
        text: this.get('text')
      };
      this.sendAction('updateStory', story, params)
      this.toggleProperty('collapsed');
    }
  }
});
