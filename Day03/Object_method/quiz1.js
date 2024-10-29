const getDomain = (email) => {
  return email.split("@")[1].split(".")[0];
};

const newsUpper = (article) => {
  return article.toUpperCase();
};

const news = (article) => {
  const arr = article.split(" ");
  return [arr[0], arr[1], arr[2]];
};
