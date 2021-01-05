function Nav() {
  return (
    <nav class="bg-gray-900 text-white flex items-center justify-between p-4">
      <div class="flex items-center text-sm space-x-4">
        <a href="/" class="hover:text-gray-400">
          <svg class="h-8 w-8 fill-current" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>

        <div class="relative flex items-center">
          <div class="absolute right-0 mr-2">
            <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input type="text" class="pr-8 h-8 w-72 text-sm rounded bg-gray-800 placeholder-gray-400 focus:ring-blue-600 focus:border-blue-600" placeholder="Search or jump to...">
          </input>
        </div>
        
        <a href="/" class="font-bold hover:text-gray-400">
          Pull requests
        </a>

        <a href="/" class="font-bold hover:text-gray-400">
          Issues
        </a>

        <a href="/" class="font-bold hover:text-gray-400">
          Marketplace
        </a>

        <a href="/" class="font-bold hover:text-gray-400">
          Explore
        </a>
      </div>

      <div class="flex items-center text-sm space-x-4">
        <a class="flex items-center hover:text-gray-400" href="/">
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        <a class="flex items-center hover:text-gray-400 space-x-1" href="/">
          <img class="h-5 w-5 rounded-full" src="https://avatars2.githubusercontent.com/u/36271434?s=60&v=4"/>
          <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
