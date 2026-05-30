const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-8xl font-black text-white/10 mb-4">404</h1>
    <p className="text-2xl font-bold mb-2">Page not found</p>
    <p className="text-gray-400 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
    >
      Go Home
    </button>
  </div>
)

export default NotFound
