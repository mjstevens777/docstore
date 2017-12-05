import DS from 'ember-data';
import { computed } from '@ember/object';
import showdown from 'npm:showdown';

let converter = new showdown.Converter()

export default DS.Model.extend({
  title: DS.attr('string'),
  notes: DS.attr('string'),
  author: DS.attr('string'),
  publication: DS.attr('string'),
  year: DS.attr('string'),
  pdfUrl: DS.attr('string'),
  notesHtml: computed('notes', function() {
    let notes = this.get('notes');
    return converter.makeHtml(notes);
  }),
  displayId: computed('title', function() {
    return 'paper-' + this.get('title').dasherize();
  }),
});
