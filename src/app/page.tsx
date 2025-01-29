import { Article } from '@/components/article';

interface DummyType {
  title: string;
  company: string;
  date: string;
}

const dummy: Array<DummyType> = [
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
  {
    title: '신문 기사 제목입니다.',
    company: '매일 경제',
    date: '2025.01.29 (수)',
  },
];

export default function Home() {
  return (
    <div className="home-container">
      <ul className="article-list">
        {dummy.map((info, index) => (
          <Article {...info} key={index} />
        ))}
      </ul>
    </div>
  );
}
