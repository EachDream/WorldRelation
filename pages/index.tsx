import { useState } from 'react';

export default function Home() {
  const [timeRes, setTimeRes] = useState<string | undefined>('none');
  const getTime = async () => {
    setTimeRes('loading...');
    const res = await fetch('/api/middleware');
    const data = await res.json();
    setTimeRes(data.currentTime);
  };

  return (
    <main>
      <h1>你好</h1>
      <button onClick={getTime}>测试middleware</button>
      <p>当前时间为: {timeRes}</p>
    </main>
  );
}
