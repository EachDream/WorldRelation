export const mapAppearenceConfig = {
  // 默认节点
  defaultNode: {
    type: 'bubble',
    size: 70,
    labelCfg: {
      style: {
        fill: 'black',
        fontSize: 10,
      },
    },
  },

  // 默认连接
  defaultEdge: {
    shape: 'line',
    style: {
      endArrow: true,
      lineWidth: 10,
      stroke: '#ddd',
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
