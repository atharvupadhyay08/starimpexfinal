"use client"

import React from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Home, Settings, User } from "lucide-react"
import Link from "next/link"

const Sidebar = () => {
  return (
    <aside className="h-full">
      {/* Mobile Sidebar (Sheet) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-4">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-white">
            <nav className="flex flex-col space-y-4 p-4">
              <SidebarLink href="/" icon={<Home className="mr-2 h-5 w-5" />}>
                Home
              </SidebarLink>
              <SidebarLink href="/profile" icon={<User className="mr-2 h-5 w-5" />}>
                Profile
              </SidebarLink>
              <SidebarLink href="/settings" icon={<Settings className="mr-2 h-5 w-5" />}>
                Settings
              </SidebarLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 md:h-full md:border-r md:bg-white">
        <nav className="flex flex-col space-y-4 p-6">
          <SidebarLink href="/" icon={<Home className="mr-2 h-5 w-5" />}>
            Home
          </SidebarLink>
          <SidebarLink href="/profile" icon={<User className="mr-2 h-5 w-5" />}>
            Profile
          </SidebarLink>
          <SidebarLink href="/settings" icon={<Settings className="mr-2 h-5 w-5" />}>
            Settings
          </SidebarLink>
        </nav>
      </div>
    </aside>
  )
}

const SidebarLink = ({ href, icon, children }) => {
  return (
    <Link
      href={href}
      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
    >
      {icon}
      {children}
    </Link>
  )
}

export default Sidebar