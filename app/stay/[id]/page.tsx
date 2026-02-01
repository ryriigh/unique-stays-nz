import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import stays from "../../data/stays.json";

interface Props {
  params: { id: string };
}

// Generate static params for all known stays
export async function generateStaticParams() {
  return stays.map((stay) => ({
    id: stay.id,
  }));
}

export default function StayPage({ params }: Props) {
  const stay = stays.find((s) => s.id === params.id);

  if (!stay) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <nav className="p-6">
        <Link href="/" className="text-stone-500 hover:text-stone-900 transition-colors">
          ← Back to directory
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative aspect-[3/4] md:aspect-square overflow-hidden rounded-3xl bg-stone-200">
            <Image
              src={stay.image}
              alt={stay.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col h-full justify-center">
            <div className="mb-6">
              <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {stay.type}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">{stay.title}</h1>
              <p className="text-xl text-stone-500">{stay.location}</p>
            </div>

            <div className="prose prose-stone prose-lg mb-8">
              <p>{stay.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold mb-3 uppercase tracking-wide text-sm text-stone-400">Highlights</h3>
              <ul className="flex flex-wrap gap-2">
                {stay.amenities.map((item) => (
                  <li key={item} className="border border-stone-200 px-4 py-2 rounded-lg text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-8 flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold">{stay.price}</p>
                <p className="text-stone-400 text-sm">per night</p>
              </div>
              <a 
                href={stay.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-stone-800 transition-all hover:scale-105 active:scale-95"
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
