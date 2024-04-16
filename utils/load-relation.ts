import { Relation, RelationUnit } from '@/types/relation';

export const loadRelationFromFile = () => {
  const lines = [
    '人物1,小类关系,大类关系,人物',
    '酢乙女爱,竞争对手,敌人,樱田妮妮',
    '酢乙女爱,竞争对手,敌人,大原娜娜子',
    '酢乙女爱,竞争对手,敌人,樱田妮妮',
    '酢乙女爱,竞争对手,敌人,大原娜娜子',
    '酢乙女爱,竞争对手,敌人,打架',
    '座堂莎拉,父亲,父亲,上代神灯魔神',
    '坐山客,学生,学生,罗峰',
    '作业本[新浪微博红人],搭档,合作,张元',
    '作业本[新浪微博红人],搭档,合作,高群书',
    '佐佐原,情人,情人,夏目',
    '佐佐木希,传闻不和,敌人,武井咲',
    '佐佐木希,搭档,合作,谷原章介',
    '佐佐木希,绯闻,绯闻,二宫和也',
    '佐佐木希,闺蜜,闺蜜,大政绚',
    '佐佐木希,好友,朋友,木下优树菜',
    '佐佐木希,好友,朋友,大政绚',
    '佐佐木希,合作,合作,谷原章介',
    ,
  ];

  const dataWithoutLineHeader = lines.slice(1);

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
