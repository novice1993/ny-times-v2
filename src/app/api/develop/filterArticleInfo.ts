interface RawArticle {
  _source: {
    title: string;
    company: string;
    publishDate: number;
    id: string;
  };
}

interface FilteredArticle {
  title: string;
  company: string;
  date: number;
  url: string;
}

export const filterArticleInfo = (rawData: RawArticle[]): FilteredArticle[] => {
  return rawData.map((data) => {
    return {
      title: data._source.title,
      company: data._source.company,
      date: data._source.publishDate,
      url: data._source.id,
    };
  });
};
