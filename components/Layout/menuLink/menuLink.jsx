"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {

  const pathname = usePathname()

  return (
    <Link
    href={item?.path}
    className={`flex items-center gap-10 p-5 rounded-lg text-white ${pathname === item?.path ? 'bg-[#bc3ef7] text-black' : 'hover:text-white hover:bg-[#bc3ef7]'}`}
    >
    {item?.icon}
    {item?.title}
  </Link>
  
  
  )
}

export default MenuLink