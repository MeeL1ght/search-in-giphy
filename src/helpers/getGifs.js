export const getGifs = async (category) => {
  const URI = 'https://api.giphy.com/v1/gifs/search?' +
  `q=${encodeURI(category)}&api_key=${import.meta.env.VITE_API_KEY}` +
  `&limit=${import.meta.env.VITE_GIFS_LIMIT}`
  
  const res      = await fetch(URI)
  const { data } = await res.json()
  const gifs     = data.map(img => (
    {
      id:    img.id,
      title: img.title,
      url:   img.images.downsized_medium.url
    }
  ))
  
  return gifs
}
