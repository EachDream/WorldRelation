import { Relation, RelationUnit } from '@/types/relation';

export const loadRelationFromFile = async () => {
  const res:  {[key: string]: any}[] = await fetch('/api/middleware').then(response => response.json())
  .then(data => data as {[key: string]: any}[]);

  const dataWithoutLineHeader = res as any[];

  const relations: Relation[] = dataWithoutLineHeader
    .map<Relation | undefined>((item) => {
      if (!item) {
        return;
      }
      const source = item.father_node
      const target = item.son_node
      const relation = item.relation
      return {
        source: { name: source } as RelationUnit,
        target: { name: target } as RelationUnit,
        relation,
      } as Relation;
    })
    .filter((relation): relation is Relation => Boolean(relation));

  return relations;
};
