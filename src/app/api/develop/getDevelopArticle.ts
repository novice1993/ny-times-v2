export const getDevelopArticle = async () => {
  const response = await fetch('https://techblogposts.com/api/v1/posts');

  if (response.ok) {
    const result = await response.json();
    return result;
  }

  throw new Error(
    `[Error] status :${response.status}, statusText: ${response.statusText}`
  );
};
