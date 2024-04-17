import { WorldRelationQuestionQuery } from '@/types/question';
import { loadRelationFromFile } from '@/utils/load-relation';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Relation } from '@/types/relation';
import styles from './index.module.scss';

export default function Question() {
  const router = useRouter();
  const [form, setForm] = useState<WorldRelationQuestionQuery>({
    name: '',
  });

  const goQueryPage = async (form: WorldRelationQuestionQuery) => {
    router.push(form?.name ? `?p=${form.name}` : ``);
    const res: Relation[] = await loadRelationFromFile();
  };

  return (
    <div className="flex items-center gap-3">
      {/* 输入框 */}
      <label className="input input-bordered flex items-center gap-2 shadow-md">
        <input
          type="text"
          className="grow"
          value={form.name}
          onChange={(e) => setForm({ name: e.target.value })}
          placeholder="输入你想要查找的人名"
        />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>

      {/* 查询按钮 */}
      <button
        onClick={() => goQueryPage(form)}
        className="btn flex items-center shadow-md"
      >
        <svg
          style={{
            width: '21px',
            height: '21px',
            color: 'gray',
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g stroke="currentColor" stroke-linecap="round" stroke-width="2">
            <path
              fill="none"
              stroke-dasharray="16"
              stroke-dashoffset="16"
              d="M10.5 13.5L3 21"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.4s"
                dur="0.2s"
                values="16;0"
              />
            </path>
            <path
              fill="currentColor"
              fill-opacity="0"
              stroke-dasharray="40"
              stroke-dashoffset="40"
              d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.4s"
                values="40;0"
              />
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="0.6s"
                dur="0.15s"
                values="0;0.3"
              />
            </path>
          </g>
        </svg>
      </button>
    </div>
  );
}
