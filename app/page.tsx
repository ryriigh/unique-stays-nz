import Image from "next/image";
import Link from "next/link";
import stays from "../data/stays.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Hero Section */}
      <header className="px-6 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
          Unique Stays <span className="text-amber-600">NZ</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
          Curated collection of New Zealand's most extraordinary getaways. 
          From glass pods to treehouses, find your escape.
        </p>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <Link 
              key={stay.id} 
              href={`/stay/${stay.id}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-stone-200">
                <Image
                  src={stay.image}
                  alt={stay.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
                  ★ {stay.rating}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-amber-700 transition-colors">
                {stay.title}
              </h3>
              <p className="text-stone-500 text-sm mb-2">{stay.location} • {stay.type}</p>
              <p className="font-medium text-stone-900">
                {stay.price} <span className="text-stone-400 font-normal">/ night</span>
              </p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-stone-200 py-12 text-center text-stone-500 text-sm">
        <p>© 2026 Unique Stays NZ. Curated by AI.</p>
      </footer>
    </div>
  );
}
