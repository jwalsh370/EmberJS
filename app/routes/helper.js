import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('helper', params.helper_id);
   },

    actions: {
      updateHelper(helper, params) {
        debugger;
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            helper.set(key,params[key]);
          }
        });
        helper.save();
        this.transitionTo('helper');
      },
      destroyHelper(helper) {
        helper.destroyRecord();
        this.transitionTo('index');
      },
      saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var helper = params.helper;
      helper.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return helper.save();
      });
      this.transitionTo('helper', helper);
    }
    }
});
