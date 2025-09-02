import Link from 'next/link';

export default function Pomodoro() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-600 mb-6">Our Pomodoro feature is under development. Stay tuned for updates!</p>
      <Link href="/" className="px-4 py-2 bg-zinc-500 text-white rounded hover:bg-zinc-600">
        Back to Home
      </Link>
    </div>
  )
}