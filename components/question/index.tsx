import { WorldRelationQuestionQuery } from '@/types/question';
import { useState } from 'react';

interface QuestionProps {
  query: WorldRelationQuestionQuery;
}

export default function Question(): JSX.Element {
  const [form, setForm] = useState<WorldRelationQuestionQuery>({
    name: '',
  });

  return (
    <div>
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ name: e.target.value })}
      ></input>
    </div>
  );
}
