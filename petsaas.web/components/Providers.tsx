"use client";

import React, { useState } from "react";
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query"

import { Toaster } from "@/components/ui/sonner"

export function Providers({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const [queryClient] = useState(
        () => new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 60_000,
                    refetchOnWindowFocus: false
                }
            }
        })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster 
                richColors
                position="top-right"/>
        </QueryClientProvider>
    )
}