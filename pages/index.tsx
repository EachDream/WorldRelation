import Question from '@/components/question';
import dynamic from 'next/dynamic';

const RelationMap = dynamic(() => import('@/components/relation-map'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex items-center flex-col justify-center">
      <Question />
      <RelationMap />
    </div>
  );
}
