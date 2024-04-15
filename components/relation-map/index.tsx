import { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import G6 from '@antv/g6';
import { transformRelationToMap } from '@/utils/relation-to-map';
import { loadRelationFromFile } from '@/utils/load-relation';
import { MapData } from '@/types/map';

export default function RelationMap() {
  const mapEl = useRef(null);
  let graph: any = null;

  const data: MapData = transformRelationToMap(loadRelationFromFile());

  useEffect(() => {
    if (!graph && mapEl.current) {
      graph = new G6.Graph({
        container: mapEl.current,
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
        layout: {
          type: 'force',
          preventOverlap: true,
          nodeSpacing: 15,
          edgeStrength: 0.1,
        },

        // 常用配置
        fitView: true,
        animate: true,

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
          },
          click: {
            stroke: '#000',
            lineWidth: 1,
          },
        },
        edgeStateStyles: {
          click: {
            stroke: 'steelblue',
          },
        },
      });
    }
    graph.data(data);
    graph.render();

    /**
     * 监听 mouse region
     */
    graph.on('node:mouseenter', (e: any) => {
      const nodeItem = e.item;
      graph.setItemState(nodeItem, 'hover', true);
    });
    graph.on('node:mouseleave', (e: any) => {
      const nodeItem = e.item;
      graph.setItemState(nodeItem, 'hover', false);
    });

    /**
     * 监听 mouse click
     */
    graph.on('node:click', (e: any) => {
      const clickNodes = graph.findAllByState('node', 'click');
      clickNodes.forEach((cn: any) => {
        graph.setItemState(cn, 'click', false);
      });
      const nodeItem = e.item;
      graph.setItemState(nodeItem, 'click', true);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div ref={mapEl} className={styles.map}></div>
      <div className={styles.powerby}>Powered by EachDream</div>
    </div>
  );
}
