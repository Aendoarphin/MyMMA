import { ref, onMounted } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  onMounted(async () => {
    loading.value = true

    try {
      const res = await fetch(url)

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`)
      }

      data.value = (await res.json()) as T
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  })

  return { data, error, loading }
}
