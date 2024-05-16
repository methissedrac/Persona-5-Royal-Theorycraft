const P5RTheorycraft = "Persona 5 Royal Theorycraft"
const assets = [
  "/",
  "/sssPers.html",
  "/Diz.css",
  "/MainScrtpForPerson.js",
  "/PictursForProject/youtube-1.png",
  "/PictursForProject/telegram.png",
  "/PictursForProject/vk.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(P5RTheorycraft).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
