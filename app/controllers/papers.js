import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['search', 'edit', 'markdown', 'pdf', 'pdfUrl'],
  category: null,

  editActive: computed('edit', function() {
    if (this.get('edit') == 'false') {
      return false;
    } else {
      return true;
    }
  }),

  markdownActive: computed('markdown', function() {
    if (this.get('markdown') == 'false') {
      return false;
    } else {
      return true;
    }
  }),

  pdfActive: computed('pdf', function() {
    if (this.get('pdf') == 'false') {
      return false;
    } else {
      return true;
    }
  }),

  actions: {
    showPdf(pdfUrl) {
      this.set('pdfUrl', pdfUrl);
    },

    toggle(kind) {
      if (this.get(kind + 'Active')) {
        this.set(kind, false);
      } else {
        this.set(kind, null);
      }
    },
  }
});
