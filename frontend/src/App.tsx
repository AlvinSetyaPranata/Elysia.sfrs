function App() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-slate-800'>

      <div className="flex items-center gap-6">
        <h1 className="font-primary text-5xl text-fuchsia-400">yōkoso</h1>
        
          <h1 className="font-primary text-5xl text-fuchsia-400 text-shadow-[2px_2px_0px_rgb(255_255_255_/_1)]">senseigata, minasama</h1>
      </div>

        <img src="/banner.png" alt="banner" className="size-[350px]" />

    <div className="mt-24 flex flex-col gap-6">
      <button className="bg-fuchsia-400 text-white w-[300px] py-2 rounded-full">Masuk sebagai siswa</button>
      <button className="border border-fuchsia-400 text-white w-[300px] py-2 rounded-full">Masuk sebagai administrator</button>
    </div>

    </div>
  )
}

export default App
