export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-md rounded-xl bg-card p-8 shadow-soft">
        <h1 className="text-2xl font-semibold">Giriş</h1>
        <p className="mt-2 text-sm text-muted">CRM hesabınızla devam edin.</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-muted">E-posta</label>
            <input className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm text-muted">Şifre</label>
            <input type="password" className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" />
          </div>
          <button className="w-full rounded-full bg-text px-4 py-2 text-sm text-white">
            Giriş yap
          </button>
        </form>
      </div>
    </main>
  );
}
