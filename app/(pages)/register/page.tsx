import RegisterForm from "@/app/components/pages/admin/RegisterForm";
import Image from "next/image";

import DuctDaddyLogo from "@/public/Duct-Daddy-03.png";

export default function RegisterPage() {
  return (
    <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] py-12 px-6 rounded-xl md:p-16">
        <div className="flex items-center gap-6">
          <Image
            src={DuctDaddyLogo}
            alt="Duct Daddy Logo"
            className="h-12 w-auto object-cover"
            draggable={false}
          />
          <p className="text-lg font-semibold md:text-xl">Blog CMS</p>
        </div>
        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          <header className="w-full md:w-1/2">
            <h1 className="text-4xl font-semibold text-center md:text-5xl md:text-start">
              Sign up
            </h1>
            <p className="mt-4 text-center md:text-start">
              Register to access the blog content management system
            </p>
          </header>

          <RegisterForm />
        </div>
      </div>
    </main>
  );
}