// component/navbar.js
export const navbarComponent = () => {
  return `
    <nav class="fixed w-full z-50 flex justify-center px-2 sm:px-6 lg:px-8 pt-4">
        <div class="w-full max-w-6xl bg-cyan-900/40 backdrop-blur-md rounded-full border border-cyan-800/50">
            <div class="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-6">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <a href="/index.html" class="flex items-center">
                            <i class="fas fa-play-circle text-cyan-400 text-2xl"></i>
                            <span class="ml-2 text-white font-semibold hidden md:block">SabyMer</span>
                        </a>
                    </div>
                </div>
                <div id="search-container" class="absolute left-1/2 -translate-x-1/2 w-0 max-w-md transition-all duration-300 ease-in-out overflow-hidden bg-cyan-900/95 backdrop-blur-md rounded-full shadow-lg z-10">
                    <div class="flex items-center h-14 sm:h-16 px-3 sm:px-6 whitespace-nowrap">
                        <input type="text" placeholder="Search movies..." class="w-full bg-transparent text-white focus:outline-none border-0 opacity-0 transition-opacity duration-300" id="search-input" aria-label="Search movies">
                        <div class="flex items-center space-x-2 ml-2">
                            <button id="search-close" class="text-white hover:text-cyan-300 transition-colors duration-300" aria-label="Close search">
                                <i class="fas fa-times text-lg"></i>
                            </button>
                            <button class="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" aria-label="Search">
                                <i class="fas fa-search text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-4 lg:ml-10 flex items-center space-x-4 lg:space-x-8">
                        <a href="/index.html" class="text-white hover:text-cyan-300 transition-colors duration-300 font-medium relative group pb-1">Home<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span></a>
                        <a href="/series.html" class="text-white hover:text-cyan-300 transition-colors duration-300 font-medium relative group pb-1">Series<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span></a>
                        <a href="/pages/animation.html" class="text-white hover:text-cyan-300 transition-colors duration-300 font-medium relative group pb-1">Animation<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span></a>
                        <a href="/aboutUs.html" class="text-white hover:text-cyan-300 transition-colors duration-300 font-medium relative group pb-1">About Us<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span></a>
                        <a href="/contact.html" class="text-white hover:text-cyan-300 transition-colors duration-300 font-medium relative group pb-1">Contact<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span></a>
                    </div>
                </div>
                <div class="flex items-center space-x-3 sm:space-x-6">
                    <button id="search-button" class="text-white hover:text-cyan-300 transition-colors duration-300" aria-label="Open search">
                        <i class="fas fa-search text-lg"></i>
                    </button>
                    <button class="text-white hover:text-cyan-300 transition-colors duration-300 relative" aria-label="Notifications">
                        <i class="fas fa-bell text-lg"></i>
                        <span class="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
                    </button>

                   <a href="/signin.html" class="text-white hover:text-cyan-300 transition-colors duration-300" aria-label="User profile">
  <i class="fas fa-user-circle text-lg"></i>
</a>

                    <button class="text-white hover:text-cyan-300 transition-colors duration-300" aria-label="Toggle theme">
                        <i class="fas fa-sun text-lg"></i>
                    </button>
                    <button type="button" class="md:hidden text-white hover:text-cyan-300" id="mobile-menu-button" aria-label="Toggle mobile menu" aria-controls="mobile-menu">
                        <i class="fas fa-bars text-lg"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="hidden bg-cyan-900/95 backdrop-blur-md rounded-2xl fixed left-0 right-0 top-20 mx-2 transition-all duration-300 shadow-lg z-20" id="mobile-menu" data-aos="fade-down" data-aos-duration="300">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/index.html" class="block px-3 py-2 text-white hover:bg-cyan-800/50 hover:text-cyan-300 transition-colors duration-300 rounded-md relative group">Home<span class="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span></a>
                <a href="/series.html" class="block px-3 py-2 text-white hover:bg-cyan-800/50 hover:text-cyan-300 transition-colors duration-300 rounded-md relative group">Series<span class="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span></a>
                <a href="/pages/animation.html" class="block px-3 py-2 text-white hover:bg-cyan-800/50 hover:text-cyan-300 transition-colors duration-300 rounded-md relative group">Animation<span class="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span></a>
                <a href="/aboutUs.html" class="block px-3 py-2 text-white hover:bg-cyan-800/50 hover:text-cyan-300 transition-colors duration-300 rounded-md relative group">About Us<span class="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span></a>
                <a href="/contact.html" class="block px-3 py-2 text-white hover:bg-cyan-800/50 hover:text-cyan-300 transition-colors duration-300 rounded-md relative group">Contact<span class="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span></a>
            </div>
        </div>
    </nav>`;
};
