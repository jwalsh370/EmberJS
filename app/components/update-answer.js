import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    update(answer) {
      var params = {
        name: this.get('name'),
        answer: this.get('answer'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, params);
    }
  }
});
