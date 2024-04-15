export interface MapNode {
  id: string;
  label: string;
}

export interface MapEdge {
  source: string;
  target: string;
}

export interface MapData {
  nodes: MapNode[];
  edges: MapEdge[];
}
