export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">Product Docs</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="/docs/getting-started"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Getting Started
                </a>
                <a
                  href="/docs/api"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  API Reference
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Documentation
              </h3>
              <a
                href="/docs/getting-started"
                className="text-gray-700 hover:bg-gray-100 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                Getting Started
              </a>
              <a
                href="/docs/api"
                className="text-gray-700 hover:bg-gray-100 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                API Reference
              </a>
            </nav>
          </aside>

          <main className="flex-1 max-w-4xl">
            <div className="prose prose-slate max-w-none">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}