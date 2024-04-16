import { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import { useRelationMap } from '@/hooks/use-relation-map';
import { MapData } from '@/types/map';
import { loadRelationFromFile } from '@/utils/load-relation';
import { transformRelationToMap } from '@/utils/relation-to-map';
import router from 'next/router';

export default function RelationMap() {
  const mapEl = useRef(null);
  const { init, renderData } = useRelationMap();

  const rerender = async () => {
    const relations = await loadRelationFromFile();

    console.log(relations);
    if (!Array.isArray(relations)) {
      console.log('relations is not array');
      return;
    }

    const data: MapData = transformRelationToMap(relations);
    renderData(data);
  };

  useEffect(() => {
    if (mapEl.current) {
      init(mapEl.current);
    }
  }, []);

  useEffect(() => {
    rerender();
  }, [router.query.p]);

  return (
    <div className={styles.container}>
      <div ref={mapEl} className={styles.map}></div>
      <div className={styles.powerby}>Powered by EachDream</div>
    </div>
  );
}
