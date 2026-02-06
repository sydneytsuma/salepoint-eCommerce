'use client'
import { useUser, UserButton} from "@clerk/nextjs"
import Link from "next/link"

const StoreNavbar = () => {

    const {user} = useUser()

    return (
        <div className="flex items-center justify-between px-12 py-3 border-b border-slate-200 transition-all">
            <Link href="/" className="relative text-4xl font-semibold text-slate-700">
                        <span className="text-black">sale</span>
                        <span className="text-orange-500">point</span>
                        <span className="text-orange-500 text-5xl leading-none">.</span>
            </Link>
            <div className="flex items-center gap-3">
                <p>Hi, {user?.firstName}</p>
                <UserButton />
            </div>
        </div>
    )
}

export default StoreNavbar