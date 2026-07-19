export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Welcome to the ExpressMaids Content Management System.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Total Articles</p>
          <h2 className="mt-3 text-4xl font-bold">0</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Published</p>
          <h2 className="mt-3 text-4xl font-bold text-green-600">0</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Drafts</p>
          <h2 className="mt-3 text-4xl font-bold text-orange-500">0</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Categories</p>
          <h2 className="mt-3 text-4xl font-bold text-blue-600">0</h2>
        </div>
      </div>

      <div className="rounded-xl bg-white shadow">
        <div className="border-b p-5">
          <h3 className="text-xl font-semibold">
            Recent Articles
          </h3>
        </div>

        <div className="p-10 text-center text-slate-500">
          No articles have been created yet.
        </div>
      </div>
    </div>
  );
}