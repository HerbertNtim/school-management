import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-y-auto">
        <Link href='/' className="flex items-center justify-center lg:justify-start gap-2">
          <Image src='/logo.png' alt={'logo'} width={34} height={34} />
          <span className="hidden lg:block text-2xl text-gray-600">School</span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT */}
      <div className="bg-[#F7F8FA] w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll">
        <Navbar />
        { children }
      </div>
    </main>
  )
}

export default DashboardLayout
