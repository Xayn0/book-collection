export type Book = {
  id: string;
  title: string;
  author: Author;

  genre: string;
  pageCount: number; // calculated with formula
  cover: string;
  source: string;
  description: string;
};

export type Author = {
  id: string;
  firstName: string;
  lastName: string;
  nationality: string;
  image: string;
  info: string;
};
