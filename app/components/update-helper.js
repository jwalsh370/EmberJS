import Ember from 'ember';

export default Ember.Component.extend({

  updateHelperForm: false,
  actions: {
    updateHelperForm() {
      this.set('updateHelperForm', true);
    },
    updateHelper(helper) {
      // debugger;
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        answer: this.get('answer'),
      };
      this.set('updateHelperForm', false);
      this.sendAction('updateHelper', helper, params);
    }
  }
});
