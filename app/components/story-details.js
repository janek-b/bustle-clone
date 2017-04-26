import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateStory(story, params) {
      this.sendAction('updateStory', story, params);
    },
    deleteStory(story) {
      this.sendAction('deleteStory', story);
    }
  }
});
