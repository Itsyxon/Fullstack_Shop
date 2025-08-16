import { useQuery } from '@tanstack/react-query'
import { api } from '../api'
import { Product } from '@/types/Products'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      const { data } = await api.get<Product[]>('/products')
      return data
    },
  })
}

export function useProduct(id: string) {
  return useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: async (): Promise<Product> => {
      const { data } = await api.get<Product>(`/products/${id}`)
      return data
    },
    enabled: !!id,
  })
}
