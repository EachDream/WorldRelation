import { Relation, RelationUnit } from '@/types/relation';

export const loadRelationFromFile = async () => {
  const res: Response = await fetch('/api/middleware');
  const lines: string[] = await res.json();

  const dataWithoutLineHeader = lines.slice(1) as string[];

  const relations: Relation[] = dataWithoutLineHeader
    .map<Relation | undefined>((line) => {
      if (!line) {
        return;
      }

      const [source, relation, relation_other, target] = line.split(',');
      return {
        source: { name: source } as RelationUnit,
        target: { name: target } as RelationUnit,
        relation,
      } as Relation;
    })
    .filter((relation): relation is Relation => Boolean(relation));

  return relations;
};
