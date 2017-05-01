import Ember from 'ember';

export default Ember.Component.extend({

  addNewHelper: false,
  actions: {
    helperFormShow() {
      this.set('addNewHelper', true);
    },

    saveHelper() {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
      };
      this.set('addNewHelper', false);
      this.sendAction('saveHelper', params);
    }
  }
});
