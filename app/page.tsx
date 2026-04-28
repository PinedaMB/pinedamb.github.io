"use client"
import MeInfo from "@/components/me-info"
import SocialInfo from "@/components/social-info"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="relative mb-12 flex w-full max-w-full flex-col overflow-hidden rounded-2xl border border-gray-600 bg-black shadow-2xl md:mb-4 md:max-w-7xl md:flex-row">
      <div className="flex w-full flex-col justify-between border-b border-gray-600 p-8 md:w-2/5 md:border-r md:border-b-0 md:p-6">
        <MeInfo />
        <SocialInfo />
      </div>
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        col 2 test!
      </div>
    </main>
  )
}
