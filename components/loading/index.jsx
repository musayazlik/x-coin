const Loading = () => {
  return (
    <div class="loading fixed top-0 left z-50 w-full bg-zinc-950/80">
      <div className="flex items-center flex-col gap-4 justify-center h-screen">
        <div className="relative">
          <div
            className="w-14 h-14  sm:h-24 sm:w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div
            className="absolute top-0 left-0 w-14 h-14  sm:h-24 sm:w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-white">Yükleniyor... </h1>
          <p>
            Lütfen bekleyiniz
          </p>
        </div>
      </div>
    </div>
  )
}

export default Loading