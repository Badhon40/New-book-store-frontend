"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';

import { Button } from '../ui/button';
import { BaggageClaim, Menu, User, X } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { motion } from 'framer-motion';

const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const pageLinks = [
        { name: 'Home', link: '/' },
        { name: 'Books', link: '/books' },
        { name: 'Blogs', link: '/blogs' },
        { name: 'Contact Us', link: '/contact' },
        { name: 'About Us', link: '/about' },
        { name: 'Privacy Policy', link: '/privacy' },
    ];

    const user = {
        name: 'John Doe',
        image: ''
    };
    const userPlaceholder = '';

    return (
        <header className='w-full bg-white shadow-sm sticky top-0 z-50'>
            {/* Desktop Header */}
            <div className='max-w-7xl mx-auto hidden lg:flex justify-between items-center py-4 px-6'>
                <Link href='/' className='flex items-center'>
                    <Image
                        src={logo}
                        alt='Logo'
                        width={500}
                        height={100}
                        className='w-auto h-15'
                        priority
                    />
                </Link>
                <div className='flex items-center gap-6'>
                    {pageLinks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`text-sm font-semibold hover:text-green-500 transition-colors duration-200 ${
                                pathname === item.link ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className='flex items-center gap-4'>
                    <Link href='/cart' className='text-sm font-semibold text-gray-700 hover:text-blue-500'><BaggageClaim /></Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='ghost'>
                                <Avatar className='w-8 h-8 rounded-full'>
                                    {user?.image ? (
                                        <AvatarImage alt={user.name} className='w-8 h-8 rounded-full' />
                                    ) : userPlaceholder ? (
                                        <AvatarFallback className='w-8 h-8 rounded-full bg-gray-300 text-gray-700'>
                                            {user.name[0]}
                                        </AvatarFallback>
                                    ) : (
                                        <User className='ml-2 mt-2' />
                                    )}
                                </Avatar>
                                My Account
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-48'>
                            <DropdownMenuItem asChild>
                                <Link href='/dashboard'>Dashboard</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href='/logout'>Logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex border-b-2 py-4 px-6">
               <div className="flex items-center  w-full">
               <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size="24" /> : <Menu size="40" />}
                </Button>
                <Link href="/" className="flex items-center ml-2">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={120}
                        height={50}
                        className="w-auto"
                        priority
                    />
                </Link>
               </div>
                <div className='flex items-center gap-4'>
                    <Link href='/cart' className='text-sm font-semibold text-gray-700 hover:text-blue-500'><BaggageClaim /></Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='ghost'>
                                <Avatar className='w-8 h-8 rounded-full'>
                                    {user?.image ? (
                                        <AvatarImage alt={user.name} className='w-8 h-8 rounded-full' />
                                    ) : userPlaceholder ? (
                                        <AvatarFallback className='w-8 h-8 rounded-full bg-gray-300 text-gray-700'>
                                            {user.name[0]}
                                        </AvatarFallback>
                                    ) : (
                                        <User className='ml-2 mt-2' />
                                    )}
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-48'>
                            <DropdownMenuItem asChild>
                                <Link href='/dashboard'>Dashboard</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href='/logout'>Logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Slider Menu */}
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: isMenuOpen ? '0%' : '-100%' }}
                transition={{ duration: 0.3 }}
                className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-60 p-6 lg:hidden"
            >
                <div className="flex items-center justify-between mb-4">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={120}
                            height={50}
                            className="w-auto"
                            priority
                        />
                    </Link>
                    <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
                        <X size="24" />
                    </Button>
                </div>
                
                {pageLinks.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className="block text-sm font-semibold text-gray-700 hover:bg-gray-100 p-2"
                    >
                        {item.name}
                    </Link>
                ))}
            </motion.div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;

