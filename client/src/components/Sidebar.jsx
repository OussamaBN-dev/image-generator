import { useUser , useClerk } from "@clerk/clerk-react"
import React from "react"
import { House, Hash, SquarePen, Eraser, FileText, Users, Scissors } from "lucide-react";

const navItems = [
    {to: '/ai', label: 'Dashboard', Icon: House},
    {to: '/ai/write-article', label: 'Write Article', Icon: SquarePen},
    {to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash},
    {to: '/ai/generate-images', label: 'Generate Images', Icon: Image},
    {to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser},
    {to: '/remove-object', label: 'Remove Object', Icon: Scissors},
    {to: '/ai/review-resume', label: 'Review Resume', Icon: FileText},
    {to: '/ai/community', label: 'Community', Icon: Users},
    

]

const Sidebar = ({sidebar, setSidebar}) => {
    const {user} = useUser();
    const {signOut, openUserPrifile} = useClerk()

  return (
    <div className={`w-60 bg-white border-r border-gray-200 flex
    flex-col justify-between items-center max-sm:absolute top-10
    bottom-0 ${sidebar ? 'translate-x-0' : 
    'max-sm:-translate-x-full' } transition-all duration-300 ease-in-out `}>
      <div className="my-7 w-full">
        <img src={user.imageUrl} alt="User avatar" className="w-13 rounded-full mx-auto"/>
        <h1 className="mt-1 text-center">{user.fullName}</h1>
        <div>
            {navItems.map(({to, label, Icon}) =>(
                <NavLink key={to} tp>

                </NavLink>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
