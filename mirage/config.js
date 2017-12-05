export default function() {
  this.namespace = '/api';

  this.get('/papers', function() {
    return {
      data: [{
        type: 'paper',
        id: 'resnet',
        attributes: {
          title: 'ResNet',
          notes: '![img](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Gabriel_graph.svg/200px-Gabriel_graph.svg.png)\n- Bullet\n- Points',
          author: 'szegedy',
          year: '2017',
          publication: 'AAAI',
          'pdf-url': 'https://research.google.com/pubs/archive/45169.pdf'
        }
      }, {
        type: 'paper',
        id: 'resnet-2',
        attributes: {
          title: 'ResNet Copy',
          notes: '![img](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Gabriel_graph.svg/200px-Gabriel_graph.svg.png)\n- Bullet\n- Points',
          author: 'szegedy',
          year: '2017',
          publication: 'AAAI',
          'pdf-url': 'https://arxiv.org/pdf/1611.10080'
        }
      }]
    };
  });
}
