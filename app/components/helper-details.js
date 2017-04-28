import Ember from 'ember';

export default Ember.Component.extend({
  ctions: {
    delete(helper) {
      if (confirm('Are you sure you want to delete this helper?')) {
        this.sendAction('destroyHelper', helper);
      }
    },
      updateHelper(helper) {
        if (confirm('Are you sure you want to update this helper?')) {
          this.sendAction('updateHelper', helper);
        }
     }
  }
});
