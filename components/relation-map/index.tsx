import { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import { useRelationMap } from '@/hooks/use-relation-map';

export default function RelationMap() {
  const mapEl = useRef(null);
  const { init } = useRelationMap();

  useEffect(() => {
    if (mapEl.current) {
      init(mapEl.current);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div ref={mapEl} className={styles.map}></div>
      <div className={styles.powerby}>Powered by EachDream</div>
    </div>
  );
}
