import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Topnav() {
  return (
 
    <nav className="flex w-full items-center justify-between p-4 text-l bg-black/5 font-semibold">
      <a href="/">
        <img src="https://5o49s9j5d8.ufs.sh/f/AYfuaRWx9vQljOUCg6DxhMk4zdpDq71vaywFfGsnCHmclKZU" alt="Home" className="h-10 w-10" />
      </a>
      
        <div>WELCOME TO MOTOHUB</div>
      
      <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
        
      </div>
    </nav>
  );
}