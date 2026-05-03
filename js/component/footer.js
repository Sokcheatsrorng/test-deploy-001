export const footerComponent = () => {
    return`
    <!-- Footer Section -->
<footer class="bg-gradient-to-r from-blue-900 to-bg-[#050a1c] text-white py-8">
  <div class="container mx-auto px-4">
    <!-- Logo and Navigation -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
      <!-- Logo with spin animation on hover -->
      <div class="mb-6 md:mb-0">
        <a href="#" class="flex items-center group">
          <div class="transform transition-transform duration-500 group-hover:rotate-[360deg]">
            <i class="fas fa-play-circle text-cyan-400 text-2xl"></i>
          </div>
          <span class="ml-2 text-xl font-bold text-blue-400">SabyMer</span>
        </a>
      </div>
      
      <!-- Navigation Links -->
      <nav class="flex space-x-8">
        <a href="#" class="hover:text-blue-400 transition-colors duration-300 text-sm md:text-base">Home</a>
        <a href="#" class="hover:text-blue-400 transition-colors duration-300 text-sm md:text-base">About</a>
        <a href="#" class="hover:text-blue-400 transition-colors duration-300 text-sm md:text-base">Service</a>
        <a href="#" class="hover:text-blue-400 transition-colors duration-300 text-sm md:text-base">Contact Us</a>
      </nav>
    </div>
    
    <!-- Social Media Icons with hover effects -->
    <div class="flex justify-center space-x-6 my-8">
      <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group hover:bg-blue-800 transition-all duration-300">
        <i class="fab fa-facebook-f text-gray-300 group-hover:text-white group-hover:scale-125 transition-all duration-300"></i>
      </a>
      <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group hover:bg-pink-600 transition-all duration-300">
        <i class="fab fa-instagram text-gray-300 group-hover:text-white group-hover:scale-125 transition-all duration-300"></i>
      </a>
      <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group hover:bg-blue-700 transition-all duration-300">
        <i class="fab fa-linkedin-in text-gray-300 group-hover:text-white group-hover:scale-125 transition-all duration-300"></i>
      </a>
      <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group hover:bg-red-600 transition-all duration-300">
        <i class="fab fa-youtube text-gray-300 group-hover:text-white group-hover:scale-125 transition-all duration-300"></i>
      </a>
      <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group hover:bg-blue-500 transition-all duration-300">
        <i class="fab fa-telegram-plane text-gray-300 group-hover:text-white group-hover:scale-125 transition-all duration-300"></i>
      </a>
    </div>
    
    <!-- Divider -->
    <div class="border-t border-gray-700 my-6"></div>
    
    <!-- Copyright -->
    <div class="text-center text-gray-400 text-sm">
      <p>Copyright © 2025 SabyMer. All rights reserved.</p>
      <p class="mt-2">The home for movie lovers</p>
    </div>
  </div>
</footer>
    `;
};