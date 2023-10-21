"use client";

import React from 'react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignOutButton, useAuth } from '@clerk/nextjs';
import LogoutSvg from '../../public/assets/logout.svg'



function LeftSideBar() {
  const pathname = usePathname()
  const router = useRouter()
  const {userId} = useAuth()

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1  flex-col gap-6 px-6'>
        {sidebarLinks.map((link) => {
          const isActive = (
            pathname.includes(link.route) &&
            link.route.length > 1) ||
            pathname === link.route

            if(link.route === "/profile") link.route = `/profile/${userId}`

          return (
            <Link
              key={link.route}
              href={link.route}
              className={`leftsidebar_link ${isActive && 'bg-primary-500'} `}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className='text-light-1 max-lg:hidden'>
                {link.label}
              </p>
            </Link>
          )
        })}
      </div>

      <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton
          signOutCallback={()=>{
            router.push('/sign-in')
          }}
          >
            <div className='flex cursor-pointer gap-4 px-4'>
              <Image
                src={LogoutSvg}
                alt='logOut'
                width={24}
                height={24}
              />
              <p className='text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftSideBar