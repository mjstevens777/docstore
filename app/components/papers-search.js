import Component from '@ember/component';

export default Component.extend({
  actions: {
    search() {
      this.sendAction('search', 'searchParams');
    },

    toggleEdit() {
      this.sendAction('toggle', 'edit');
    },

    toggleMarkdown() {
      this.sendAction('toggle', 'markdown');
    },

    togglePdf() {
      this.sendAction('toggle', 'pdf');
    },
  }
});
