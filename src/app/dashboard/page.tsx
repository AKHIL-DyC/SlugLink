import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import CardContainer from "../_components/Card/CardContainer";
import { Suspense } from "react";

export default async function Page() {
  const session = await getServerAuthSession();
  const inputClass = "rounded-2xl bg-white/10 w-full mt-1 block px-3 py-2  border border-white/10 text-sm shadow-sm placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/10 disabled:shadow-none"

  if (!session) {
    redirect('/')
  }

  return (
    <section className="flex flex-col items-center pb-[7.60rem] lg:pb-[13.20rem] transition-all duration-100 bg-dark-midnight text-white">
      <div className="flex flex-col gap-5 container m-auto px-4 py-10">
        <h1 className="text-2xl font-bold tracking-wide">Dashboard Page</h1>
        <form action="">
          <input
            type="text"
            placeholder="Search..."
            className={inputClass} />
        </form>
        <Suspense fallback={<div>loading...</div>}> 
          <CardContainer/>
        </Suspense>
      </div>
    </section>
  )
}