import Link from "next/link";

const mockUrls = [
  "https://5o49s9j5d8.ufs.sh/f/AYfuaRWx9vQliuFquAamPFXcUezlCH19IOLq87tryNpbJjAo",
]

const mockImages = mockUrls.map((url, index) => ({
   id: index + 1,
   url,
}))
export default function HomePage() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(https://5o49s9j5d8.ufs.sh/f/AYfuaRWx9vQlzaS5Q0PkPp3UmKquLrjoJASQ2RxHZd8ytXTi)` }}
    >
      <div className="flex flex-wrap gap-4 p-8">
        {mockImages.map((image) => (
          <div key={image.id} className="w-60">
            <img src={image.url} alt="" className="w-full h-auto" />
          </div>
        ))}
      </div>
    </main>
  );
}
