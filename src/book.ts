export interface Author {
  id: string
  firstName: string
  lastName: string
  nationality: string
  image: string
}

export interface Book {
  id: string
  title: string
  author: Author
  genre: string
  pageCount: number
  cover: string
  source: string
  description: string
}
//Book typedef