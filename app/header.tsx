'use client'

import { usePathname } from "next/navigation";
import routes from "./routes";

export default function Header() {

    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    {
                        routes.filter((route) => {
                            return usePathname() == route.href;
                        })[0].header
                    }
                </h1>
            </div>
        </header>
    )
}