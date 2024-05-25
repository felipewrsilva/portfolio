import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="relative mx-auto flex h-screen flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <h1 className="text-yellow">Hello portfolio!</h1>
        <Hero />
      </div>
    </main>
  )
}
