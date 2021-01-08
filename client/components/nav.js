function Nav() {
  return (
    <div>
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
            <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>

          <a class="flex items-center hover:text-gray-400 space-x-1" href="/">
            <img class="h-5 w-5 rounded-full" src="https://avatars2.githubusercontent.com/u/36271434?s=60&v=4"/>
            <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </nav>

      <div class="flex items-center justify-between p-5">
        <div class="flex items-center">
          <svg class="h-4 w-4 mr-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
          </svg>

          <div class="flex items-center space-x-1">
            <a href="/" class="text-blue-600 hover:underline text-lg">
              tailwindlabs
            </a>

            <span class="text-lg">/</span>

            <a href="/" class="text-blue-600 hover:underline text-lg font-bold">
              tailwindcss
            </a>
          </div>
        </div>

        <div class="flex items-center text-xs space-x-2">
          <div class="flex items-center">
            <button class="flex items-center space-x-1 border border-gray-300 bg-gray-100 rounded rounded-r-none px-3 py-1 hover:bg-gray-200 focus:outline-none">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z" fill="currentColor" />
            </svg>
              <span>Watch</span>
              <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <a href="/" class="border border-gray-300 rounded rounded-l-none border-l-0 px-3 py-1 font-bold hover:text-blue-600">
              32.5K
            </a>
          </div>

          <div class="flex items-center">
            <button class="flex items-center space-x-1 border border-gray-300 bg-gray-100 rounded rounded-r-none px-3 py-1 hover:bg-gray-200 focus:outline-none">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>Star</span>
            </button>
            <a href="/" class="border border-gray-300 rounded rounded-l-none border-l-0 px-3 py-1 font-bold hover:text-blue-600">
              64.5K
            </a>
          </div>

          <div class="flex items-center">
            <button class="flex items-center space-x-1 border border-gray-300 bg-gray-100 rounded rounded-r-none px-3 py-1 hover:bg-gray-200 focus:outline-none">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z" fill="currentColor" />
              </svg>
              <span>Fork</span>
            </button>
            <a href="/" class="border border-gray-300 rounded rounded-l-none border-l-0 px-3 py-1 font-bold hover:text-blue-600">
              128.5K
            </a>
          </div>
        </div>
      </div>

      <div class="flex items-center border-b border-gray-200 px-5">
        <button class="flex items-center border-b-2 pb-3 px-4 border-red-500 space-x-1 focus:outline-none font-bold">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" />
            <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" />
          </svg>
          <span class="text-sm">Code</span>
        </button>
        <button class="flex items-center border-b-2 border-transparent pb-3 px-4 space-x-1 hover:border-gray-300 transition-ease-in-out duration-150 focus:outline-none">
          <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z" fill="currentColor" />
            <path d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" fill="currentColor" />
          </svg>
          <span class="text-sm">Issues</span>
          <div class="bg-gray-200 rounded-full py-0.5 px-1.5 text-xs">
            64
          </div>
        </button>
        <button class="flex items-center border-b-2 border-transparent pb-3 px-4 space-x-1 hover:border-gray-300 transition-ease-in-out duration-150 focus:outline-none">
          <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.34168 10.9143 5.66336 10.7633 5.9447H11.3438C13.5529 5.9447 15.3438 7.73556 15.3438 9.9447V11.2244C15.9301 11.5731 16.323 12.213 16.323 12.9447C16.323 14.0493 15.4276 14.9447 14.323 14.9447C13.2184 14.9447 12.323 14.0493 12.323 12.9447C12.323 12.1959 12.7345 11.5432 13.3438 11.2004V9.9447C13.3438 8.84013 12.4483 7.9447 11.3438 7.9447H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z" fill="currentColor" />
          </svg>
          <span class="text-sm">Pull requests</span>
          <div class="bg-gray-200 rounded-full py-0.5 px-1.5 text-xs">
            128
          </div>
        </button>
        <button class="flex items-center border-b-2 border-transparent pb-3 px-4 space-x-1 hover:border-gray-300 transition-ease-in-out duration-150 focus:outline-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
          <span class="text-sm">Discussions</span>
        </button>
        <button class="flex items-center border-b-2 border-transparent pb-3 px-4 space-x-1 hover:border-gray-300 transition-ease-in-out duration-150 focus:outline-none">
          <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" fill="currentColor" />
            <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
          </svg>
          <span class="text-sm">Actions</span>
        </button>
        <button class="flex items-center border-b-2 border-transparent pb-3 px-4 space-x-1 hover:border-gray-300 transition-ease-in-out duration-150 focus:outline-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
          </svg>
          <span class="text-sm">Security</span>
        </button>
        <button class="flex items-center border-b-2 border-transparent pb-3 px-4 space-x-1 hover:border-gray-300 transition-ease-in-out duration-150 focus:outline-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="text-sm">Insights</span>
        </button>
      </div>
    </div>
  );
}

export default Nav;
