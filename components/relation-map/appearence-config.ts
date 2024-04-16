export const mapAppearenceConfig = {
  // 默认节点
  defaultNode: {
    type: 'text',
    size: 50,
    style: {
      fill: 'white',
      opacity: 0.25,
    },
    labelCfg: {
      style: {
        fill: 'black',
        fontSize: 10,
      },
    },
  },

  // 默认连接
  defaultEdge: {
    shape: 'polyline',
    style: {
      opacity: 0.15,
      stroke: 'black',
    },
  },

  // hover 效果
  nodeStateStyles: {
    hover: {
      fill: 'lightsteelblue',
      size: 60, // Increase node size on hover
    },
    click: {
      stroke: '#000',
      lineWidth: 1,
      size: 70, // Increase node size on click
    },
  },
  edgeStateStyles: {
    click: {
      stroke: 'steelblue',
    },
  },
};
