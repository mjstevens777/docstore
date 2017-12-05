import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
  },

  actions: {
    toggle(kind) {
      this.sendAction('toggle', kind);
    },

    showPdf(pdfUrl) {
      this.sendAction('showPdf', pdfUrl);
    }
  }
});
