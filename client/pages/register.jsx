function register() {
    return (
        <div className="h-screen w-screen bg-white flex items-center justify-center">
            <div>
                <label class="block text-sm font-medium text-gray-700">Username</label>
                <div class="mt-1 mb-2 relative rounded-md shadow-sm">
                    <input type="text" class="focus:ring-red-500 focus:border-red-500 block text-sm text-red-900 border-red-300 rounded-md pr-10" placeholder="" />
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </div>
                <label class="block text-sm font-normal text-red-600">This username has already been taken.</label>
            </div>
        </div>
    );
}

export default register;
