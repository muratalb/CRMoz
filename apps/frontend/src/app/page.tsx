import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-8 py-10">
      <section className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Alb Enerji CRM</h1>
            <p className="mt-2 text-sm text-muted">Gerçek CRM akışına hızlı erişim.</p>
          </div>
          <Link
            href="/login"
            className="rounded-full bg-text px-5 py-2 text-sm text-white"
          >
            Giriş yap
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Pipeline", desc: "Fırsat ve aşama takibi." },
            { title: "Lead’ler", desc: "Yeni lead akışları ve dönüşüm." },
            { title: "Partner Programı", desc: "Bayi performans görünümü." }
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
