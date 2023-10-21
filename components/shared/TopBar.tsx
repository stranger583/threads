import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import LogoSvg from '../../public/logo.svg'
import LogoutSvg from '../../public/assets/logout.svg'
import { SignOutButton, SignedIn, OrganizationSwitcher } from '@clerk/nextjs'

function TopBar() {
  return (
    <nav className='topbar'>
      <Link href="./" className='flex gap-4 item-center'>
        <Image src={LogoSvg} alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
      </Link>
      <div className='flex item-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image
                  src={LogoutSvg}
                  alt='logOut'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
        appearance={{
          elements:{
            organizationSwitcherTrigger:"px-4 py-2"
          }
        }}
        />
      </div>
    </nav>
  )
}

export default TopBar