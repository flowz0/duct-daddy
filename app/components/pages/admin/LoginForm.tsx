import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="w-full flex flex-col gap-4 md:w-1/2">
      <div className="flex flex-col">
        <label htmlFor="username" className="text-[#333333]">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Identifier"
          className="bg-[#E6E6E6] text-[#333333] mt-2 py-3 px-5 rounded-lg placeholder:text-[hsl(0,0%,60%)] focus:outline-2 focus:outline-offset-2 focus:outline-[#0080DB]"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-[#333333]">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="••••••••"
          className="bg-[#E6E6E6] text-[#333333] mt-2 py-3 px-5 rounded-lg placeholder:text-[hsl(0,0%,60%)] focus:outline-2 focus:outline-offset-2 focus:outline-[#0080DB]"
        />
      </div>
      <button 
        type="button"
        className="bg-[#0080DB] text-[#E6E6E6] mt-4 py-2 px-4 rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
      >
        Access Blog CMS
      </button>
      <p className="mt-2 text-center">
        Don&apos;t have an account? <Link href="/register" className="text-[#0080DB] hover:text-[hsl(205,100%,33%)] active:text-[hsl(205,100%,23%)]">Sign up</Link>
      </p>
    </form>
  );
}