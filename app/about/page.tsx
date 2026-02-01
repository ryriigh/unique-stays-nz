import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans py-20 px-6">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-6">About Unique Stays NZ</h1>
        <p className="text-xl text-stone-600 mb-8 leading-relaxed">
          We believe the accommodation should be the destination, not just a place to sleep.
        </p>
        
        <div className="prose prose-stone prose-lg">
          <p>
            New Zealand is home to some of the world's most incredible architecture—from glass pods suspended in the Southern Alps to off-grid yurts in native bush. But finding them is often buried under pages of standard motels and hotels.
          </p>
          <p>
            <strong>Unique Stays NZ</strong> is a curated directory dedicated entirely to the extraordinary. We manually review every listing to ensure it offers a truly memorable experience.
          </p>
          <p>
            Whether you're looking for a romantic escape, a digital detox, or an architectural marvel, we've done the hunting for you.
          </p>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8">
          <Link href="/" className="text-amber-700 font-medium hover:underline">
            ← Explore the collection
          </Link>
        </div>
      </main>
    </div>
  );
}
