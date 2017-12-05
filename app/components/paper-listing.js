import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    let codeContainer = this.$('.code');
    this.set('editor', new CodeMirror(codeContainer[0], {
      lineNumbers: true,
      lineWrapping: true,
      viewportMargin: Infinity,
      mode: 'markdown',
      value: this.get('paper.notes')
    }));

    this.editor.on('changes', () => {
      this.set('paper.notes', this.editor.getValue());
    });

    this.editor.on('focus', () => {
      this.sendAction('showPdf', this.get('paper.pdfUrl'));
    });
  },

  actions: {
    click() {
      this.sendAction('showPdf', this.get('paper.pdfUrl'));
    }
  }
});
