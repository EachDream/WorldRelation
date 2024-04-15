import { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import G6 from '@antv/g6';
import { transformRelationToMap } from '@/utils/relation-to-map';
import { loadRelationFromFile } from '@/utils/load-relation';
import { MapData } from '@/types/map';

export default function RelationMap() {
  const mapEl = useRef(null);
  let graph: any = null;

  const expData: MapData = transformRelationToMap(loadRelationFromFile());
  const data = {
    nodes: [
      {
        id: 'node1',
        label: 'Circle1',
      },
      {
        id: 'node2',
        label: 'Circle2',
      },
    ],
    edges: [
      {
        source: 'node1',
        target: 'node2',
      },
    ],
  };

  useEffect(() => {
    if (!graph && mapEl.current) {
      graph = new G6.Graph({
        container: mapEl.current,
        modes: {
          default: ['drag-canvas'],
        },
        layout: {
          type: 'dagre',
          direction: 'LR',
        },
        defaultNode: {
          shape: 'node',
          labelCfg: {
            style: {
              fill: '#000000A6',
              fontSize: 10,
            },
          },
          style: {
            stroke: '#72CC4A',
            width: 150,
          },
        },
        defaultEdge: {
          shape: 'polyline',
        },
      });
    }
    graph.data(expData);
    graph.render();
  }, []);
  return (
    <div className={styles.container}>
      <div ref={mapEl} className={styles.map}></div>
      <div className={styles.powerby}>Powered by EachDream</div>
    </div>
  );
}
