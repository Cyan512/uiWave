import { Outlet } from "react-router-dom";

import Navbar from "@/components/navbar";
import SidebarRight from "@/components/sidebar-right";
import { TocProvider } from "@/contexts/toc-context";

export default function BlockLayout() {
    return (
        <TocProvider>
            <div className="min-h-screen antialiased">
                <Navbar />

                <div className="w-full flex">
                    <aside className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto w-64 shrink-0 border-r py-6 px-4 hidden md:block">
                    </aside>

                    <main className="flex-1 min-w-0 px-6 py-8">
                        <div className="max-w-3xl mx-auto">
                            <Outlet />
                        </div>
                    </main>

                    <aside className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto w-64 shrink-0 border-l py-6 px-4 hidden lg:block">
                        <SidebarRight />
                    </aside>
                </div>
            </div>
        </TocProvider>
    );
}