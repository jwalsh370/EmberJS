import Ember from 'ember';

export default Ember.Component.extend({

  updateHelperForm: false,
  actions: {
    updateHelperForm() {
      this.set('updateHelperForm', true);
    },
    updateHelper(helper) {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
      };
      this.set('updateHelperForm', false);
      this.sendAction('updateHelper', helper, params);
    }
  }
});
