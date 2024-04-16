import { mapAppearenceConfig } from '@/components/relation-map/appearence-config';
import { MapData } from '@/types/map';
import { loadRelationFromFile } from '@/utils/load-relation';
import { transformRelationToMap } from '@/utils/relation-to-map';
import G6, { Graph } from '@antv/g6';
import router from 'next/router';
import { useRef } from 'react';

const onMouseEnterHook = (node: any) => {
  // do something
};
const onMouseLeaveHook = (node: any) => {
  // do something
};
const onClickHook = (node: any) => {
  // do something
  router.push(node?.id ? `?p=${node.id}` : ``);
};

export const useRelationMap = () => {
  let graph: Graph | null = null;

  const init = (el: string | HTMLElement) => {
    if (!graph) {
      graph = new G6.Graph({
        container: el,
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
        layout: {
          type: 'force',
          preventOverlap: true,
          nodeSpacing: 15,
          edgeStrength: 0.1,
        },
        fitView: true,
        animate: true,
        ...mapAppearenceConfig,
      });
    }
    if (graph) {
      const data: MapData = transformRelationToMap(loadRelationFromFile());
      graph.data(data as any);
      graph.render();

      /**
       * 监听 mouse region
       */
      graph.on('node:mouseenter', (e: any) => {
        const nodeItem = e.item;
        graph?.setItemState(nodeItem, 'hover', true);
        onMouseEnterHook(e.item._cfg);
      });
      graph.on('node:mouseleave', (e: any) => {
        const nodeItem = e.item;
        graph?.setItemState(nodeItem, 'hover', false);
        onMouseLeaveHook(e.item._cfg);
      });

      /**
       * 监听 mouse click
       */
      graph.on('node:click', (e: any) => {
        // disable other nodes click states
        const clickNodes = graph?.findAllByState('node', 'click');
        clickNodes?.forEach((cn: any) => {
          graph?.setItemState(cn, 'click', false);
        });

        // set only the clicked node state
        const nodeItem = e.item;
        graph?.setItemState(nodeItem, 'click', true);

        // hook
        onClickHook(e.item._cfg);
      });
    }
  };

  return { init };
};
