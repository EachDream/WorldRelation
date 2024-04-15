import { Relation } from '@/types/relation';
import { useState } from 'react';

export const loadedRelationsPool = new Map<string, Relation[]>();

export const useRelationLoader = () => {
  const [relations, setRelations] = useState<Relation[]>([]);

  const loadRelationsFromAPI = async (name: string) => {
    if (loadedRelationsPool.has(name)) {
      setRelations(loadedRelationsPool.get(name)!);
      return;
    }

    const res = await fetch(`/api/relation?name=${name}`);
    const data = await res.json();
    loadedRelationsPool.set(name, data);
    setRelations(data);
  };

  const loadRelationsFromDebugFile = async (name: string) => {
    const res = await fetch(`/api/relation/debug?name=${name}`);
    const data = await res.json();
    loadedRelationsPool.set(name, data);
    setRelations(data);
  };

  return {
    relations,
    loadRelationsFromAPI,
    loadRelationsFromDebugFile,
  };
};
