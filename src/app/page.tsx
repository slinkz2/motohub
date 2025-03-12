import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <main 
      className="min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(https://5o49s9j5d8.ufs.sh/f/AYfuaRWx9vQlzaS5Q0PkPp3UmKquLrjoJASQ2RxHZd8ytXTi)` }}
    >
      <div className="flex flex-wrap gap-4 p-8">
        
        {images.map((image) => (
          <div key={image.id} className="w-60">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}

     
      
                
      </div>
    </main>
  );
}
