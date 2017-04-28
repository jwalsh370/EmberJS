import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      helpers: this.store.findAll('helper'),
      // helpers: this.store.findRecord('helper', params.helper_id)
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
