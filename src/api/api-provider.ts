import { supabase } from '../lib/supabase'
import type { Book} from '../book'

export const api = {
  getAllBooks: async (): Promise<Book[]> => {
    const { data, error } = await supabase
      .from('books')
      .select(`
        *,
        authors (*)
      `)
      .order('title')
    
    if (error) throw new Error(error.message)
    
    // Transform the flat data back to nested structure for your React components
    return data.map(item => ({
      id: item.id,
      title: item.title,
      author: {
        id: item.authors.id,
        firstName: item.authors.first_name,
        lastName: item.authors.last_name,
        nationality: item.authors.nationality,
        image: item.authors.image
      },
      genre: item.genre,
      pageCount: item.page_count,
      cover: item.cover,
      source: item.source,
      description: item.description
    }))
  },

  getBookById: async (bookId: string): Promise<Book | null> => {
    const { data, error } = await supabase
      .from('books')
      .select(`
        *,
        authors (*)
      `)
      .eq('id', bookId)
      .single()
    
    if (error) throw new Error(error.message)
    
    return data ? {
      id: data.id,
      title: data.title,
      author: {
        id: data.authors.id,
        firstName: data.authors.first_name,
        lastName: data.authors.last_name,
        nationality: data.authors.nationality,
        image: data.authors.image
      },
      genre: data.genre,
      pageCount: data.page_count,
      cover: data.cover,
      source: data.source,
      description: data.description
    } : null
  }
}