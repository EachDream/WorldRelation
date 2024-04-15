export interface Relation {
  source: RelationUnit;
  target: RelationUnit;
  relation: string;
}

export interface RelationUnit {
  name: string;
}
