
type InviteLayoutProps = {
  token: string
}

export const InviteLayout = ({ token }: InviteLayoutProps) => {
  return (
    <div class="min-h-screen flex items-center justify-center p-3 sm:p-4 md:py-12">
      <div class="max-w-2xl w-full">

        <div class="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden opacity-0 animate-fadeInUp">

          <div class="bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 px-5 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-black opacity-10"></div>
            <div class="relative z-10">
              <div class="text-5xl sm:text-6xl md:text-7xl mb-3 md:mb-4 animate-float">🎉</div>
              <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                ¡Recibiste una invitación!
              </h1>
              <p class="text-purple-100 text-sm sm:text-base md:text-lg px-2">
                Has recibido una invitación para unirte a nuestra aplicación
              </p>
            </div>
            <div class="hidden md:block absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div class="hidden md:block absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-x-20 translate-y-20"></div>
          </div>

          <div class="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 space-y-6 md:space-y-8">

            <div class="opacity-0 animate-fadeInUp delay-100">
              <div class="flex flex-col items-center text-center gap-3 md:gap-4">
                <div class="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg">
                  1
                </div>

                <div class="flex-1">
                  <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                    Descarga la aplicación
                  </h2>
                  <p class="text-sm sm:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
                    Descarga la aplicación para aceptar la invitación y vuelve a abrir este enlace para unirte a nosotros.
                  </p>
                  <a href="#"
                    class="inline-block md:w-auto px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center text-sm sm:text-base">
                    <span class="flex items-center justify-center gap-2">
                      <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Descargar aplicación
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3 md:gap-4 opacity-0 animate-fadeInUp delay-200">
              <div class="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
              <div class="text-gray-400 text-xs md:text-sm font-medium">Y LUEGO</div>
              <div class="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            <div class="opacity-0 animate-fadeInUp delay-300">
              <div class="flex flex-col items-center text-center gap-3 md:gap-4">
                <div class="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg">
                  2
                </div>

                <div class="flex-1">
                  <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                    Acepta la invitación
                  </h2>
                  <p class="text-sm sm:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
                    Acepta la invitación para ser parte de nuestra comunidad.
                  </p>
                  <a href={`chowi://invite/${token}`}
                    class="inline-block md:w-auto px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center text-sm sm:text-base">
                    <span class="flex items-center justify-center gap-2">
                      <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Aceptar invitación
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div class="bg-gray-50 px-5 py-4 sm:px-8 sm:py-6 text-center border-t border-gray-100">
            <p class="text-black font-medium text-base md:text-lg">
              chowi
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
