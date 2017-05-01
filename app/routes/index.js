import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      helpers: this.store.findAll('helper'),
      answer: this.store.findAll('answer')
    });
  },

  actions: {
    saveHelper(params) {
      var newHelper = this.store.createRecord('helper', params);
      newHelper.save();
      this.transitionTo('helper');
   }
 }
});
