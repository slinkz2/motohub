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
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id}className="w-60">
              <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
