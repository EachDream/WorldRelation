import { MapData, MapEdge, MapNode } from '@/types/map';
import { Relation } from '@/types/relation';

export const transformRelationToMap = (relations: Relation[]): MapData => {
  let nodes: MapNode[] = [];
  let edges: MapEdge[] = [];

  console.log(relations);

  relations.forEach((r: Relation) => {
    const { source, target } = r;
    const sourceName = source.name;

    if (!nodes.find((node) => node.id === sourceName)) {
      nodes.push({
        id: sourceName,
        label: sourceName,
      });
    }

    if (!nodes.find((noded) => noded.id === target.name)) {
      nodes.push({
        id: target.name,
        label: target.name,
      });
    }

    edges.push({
      source: sourceName,
      target: target.name,
    });
  });

  return {
    nodes,
    edges,
  } as MapData;
};
