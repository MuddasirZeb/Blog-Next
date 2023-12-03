'use client'

import { Dropdown } from 'flowbite-react';
import { HiCog, HiLogout } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'

export default function Profile() {

    const user = {
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }

    const userNavigation = [
        { name: 'Your Profile', href: '#', icon: CgProfile },
        { name: 'Settings', href: '#', icon: HiCog },
        { name: 'Sign out', href: '#', icon: HiLogout },
    ];

    return (
        <Dropdown 
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            label="Profile"
            dismissOnClick={false}
            renderTrigger={() => {
                return  (
                    <div>
                        <button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </button>
                    </div>
                )
            }}
        >
            <Dropdown.Header>
                <span className="block text-sm">{ user.name }</span>
                <span className="block truncate text-sm font-medium">{ user.email }</span>
            </Dropdown.Header>

            {
                userNavigation.map((item) => {
                    return <Dropdown.Item icon={item.icon} key={item.name}>{item.name}</Dropdown.Item>
                })
            }
        </Dropdown>
    );
}
