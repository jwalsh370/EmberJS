import DS from 'ember-data';

export default DS.Model.extend({
  newName: DS.attr(),
  newAnswer: DS.attr(),
  helper: DS.belongsTo('helper', { async: true})
});
