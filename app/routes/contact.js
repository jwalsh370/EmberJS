import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveAnswer() {
      var params = {
        newName: this.get('newName'),
        newAnswer: this.get('newAnswer'),
        helper: this.get('helper')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
