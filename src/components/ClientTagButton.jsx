'use client'

import React, { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ClientTagButton = ({ title, isActive }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )
    return (
        <button
            className={
                " py-3 rounded-md px-4 transition-all duration-300 ease-in-out " +
                (
                    isActive ? "bg-[#1B8733] text-white" : "hover:bg-[#1B8733] hover:text-white"
                )
            }
            onClick={() => {
                router.push(pathname + '?' + createQueryString('type', `${title}`))
            }}
        >
            {title}
        </button>
    )
}

export default ClientTagButton