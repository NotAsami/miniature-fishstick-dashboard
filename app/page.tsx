"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { LayoutDashboard, UserCog, Settings, LogOut } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Page() {
    const links = [
        {
            label: "Dashboard",
            href: "#",
            icon: <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />,
        },
        {
            label: "Profile",
            href: "#",
            icon: <UserCog className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />,
        },
        {
            label: "Settings",
            href: "#",
            icon: <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />,
        },
        {
            label: "Logout",
            href: "#",
            icon: <LogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />,
        },
    ];
    const [open, setOpen] = useState(false);
    
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div className="h-full w-full overflow-hidden">
                <BackgroundPaths title="Background Paths" />
            </div>
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-2 overflow-y-auto overflow-x-hidden">
                        <div className="mt-8 flex flex-col gap-5">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Manu Arora",
                                href: "#",
                                icon: (
                                    <Image
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&w=256&h=256"
                                        className="h-7 w-7 shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
        </div>
    );
}
