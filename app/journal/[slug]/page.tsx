import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import articles from "@/data/articles.json";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <nav className="p-6">
        <Link href="/journal" className="text-stone-500 hover:text-stone-900 transition-colors">
          ← Back to journal
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <header className="text-center mb-12">
          <div className="text-amber-700 font-bold mb-4">{article.date}</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            {article.title}
          </h1>
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-stone-200">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <div className="prose prose-stone prose-lg mx-auto">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6">{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
