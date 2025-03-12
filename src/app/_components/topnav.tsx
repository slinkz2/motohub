import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
export default function Topnav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-l bg-black/5 font-semibold">
      <a href="/">
        <img
          src="https://5o49s9j5d8.ufs.sh/f/AYfuaRWx9vQljOUCg6DxhMk4zdpDq71vaywFfGsnCHmclKZU"
          alt="Home"
          className="h-10 w-10"
        />
      </a>
      <div>WELCOME TO MOTOHUB</div>
      <div>
        <SignedOut>
          <SignInButton>
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}