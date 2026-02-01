import Link from "next/link";
import Image from "next/image";
import articles from "@/data/articles.json";

export default function JournalIndex() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <header className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Journal</h1>
        <p className="text-stone-600 max-w-xl mx-auto">
          Stories from the road less traveled. Guides, inspiration, and spotting the next big thing in New Zealand travel.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid gap-12">
          {articles.map((article) => (
            <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
              <article className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-stone-200">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="text-sm text-amber-700 font-bold mb-2">{article.date}</div>
                  <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-amber-800 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-stone-900 font-medium border-b border-stone-900 pb-0.5 group-hover:border-transparent transition-all">
                    Read Story
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
