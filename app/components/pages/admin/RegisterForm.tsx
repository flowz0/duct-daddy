import Link from "next/link";

export default function RegisterForm() {
  return (
    <form className="w-full flex flex-col gap-4 md:w-1/2">
      <div className="flex flex-col">
        <label htmlFor="fname">First name</label>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="John"
          className="bg-[#E6E6E6] text-[#333333] mt-2 py-3 px-5 rounded-lg placeholder:text-[hsl(0,0%,60%)] focus:outline-2 focus:outline-offset-2 focus:outline-[#0080DB]"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lname">Last name</label>
        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Doe"
          className="bg-[#E6E6E6] text-[#333333] mt-2 py-3 px-5 rounded-lg placeholder:text-[hsl(0,0%,60%)] focus:outline-2 focus:outline-offset-2 focus:outline-[#0080DB]"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Identifier"
          className="bg-[#E6E6E6] text-[#333333] mt-2 py-3 px-5 rounded-lg placeholder:text-[hsl(0,0%,60%)] focus:outline-2 focus:outline-offset-2 focus:outline-[#0080DB]"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
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
        Register account
      </button>
      <p className="mt-2 text-center">
        Already have an account? {" "}
        <br className="sm:hidden" />
        <Link href="/admin" className="text-[#0080DB] hover:underline hover:text-[hsl(205,100%,33%)] active:text-[hsl(205,100%,23%)]">Sign in</Link>
      </p>
    </form>
  );
}