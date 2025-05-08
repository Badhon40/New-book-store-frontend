"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { BaggageClaim, Menu, Search, User, X } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { motion } from 'framer-motion';





const Header= () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = {
        name: 'John Doe',
        image : ''
    };
    const userPlaceholder = ""

    const menuItems = [
        ...user && user ? [
            { name : "Dashboard", link: '/dashboard' },
            { name: 'Logout', link: '/logout' },
        ] : [
            { name: 'Login', link: '/login' },
            { name: 'Register', link: '/register' },
        ],

       
    
    ]
    return (
        <header className='border-b text-black bg-white sticky top-0 z-50'>
            {/* Header */}
            <div className='container border-b-2 w-[80%] mx-auto hidden lg:flex justify-between items-center py-4 px-6'>
                <Link href='/' className='flex items-center'>
                   <Image
                   src={logo}
                     alt='Logo'
                        width={500}
                        height={100}
                        className='w-auto h-15'
                        priority
                   
                   ></Image>
                </Link>
                <div className='flex flex-1 justify-center max-w-xl px-4'>
                    <div className='relative w-full'>
                        <Input
                            type='text'
                            placeholder='Book Name / Author / Subject / Publisher'
                            className='w-full h-12 px-4 border border-black rounded-lg '
                            value=""
                            onChange={() => {}}
                        />
                        <Button size="icon" 
                        variant='ghost'
                         className='absolute right-0 top-2 -tranlate-y-1/2'>
                            <Search className='h-10 w-10'/>
                         </Button>
                    </div>    

                </div>
                <div className='flex items-center gap-4'>
                    <Link href='/cart' className='text-sm font-semibold text-gray-700 hover:text-blue-500'><BaggageClaim /></Link>
                 

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='ghost'>
                                <Avatar className='w-8 h-8 rounded-full'>
                                   {
                                    user?.image ? (
                                        <AvatarImage alt={user.name} className='w-8 h-8 rounded-full' />
                                    ) : userPlaceholder ? (
                                        <AvatarFallback className='w-8 h-8 rounded-full bg-gray-300 text-gray-700'>
                                            ds
                                        </AvatarFallback> 
                                    ) : (
                                        <User className='ml-2 mt-2' />
                                    )}
                                  
                                </Avatar>    
                                My Account
                             </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-48'>
                            {menuItems.map((item, index) => (
                                <DropdownMenuItem key={index} asChild>
                                    <Link href={item.link} className='flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100'>
                                        {item.name}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Mobile Header */}
                        <div className="lg:hidden flex items-center justify-between border-b-2 py-4 px-6">
                    <div className="flex items-center">
                    <Button
                        variant="ghost"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
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
                </div>

                {/* Slider Menu */}
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: isMenuOpen ? '0%' : '-100%' }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 p-6 lg:hidden"
                >
                   <div className='flex items-center justify-between mb-4'>
                   <Button
                        variant="ghost"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size="24" /> : <Menu size="24" />}
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

                    <nav className="space-y-4">
                    <Link href="/cart" className="block text-sm font-semibold text-gray-700 hover:text-blue-500">
                        Cart
                    </Link>
                    <Link href="/login" className="block text-sm text-gray-700 hover:bg-gray-100 p-2">
                        Login
                    </Link>
                    <Link href="/register" className="block text-sm text-gray-700 hover:bg-gray-100 p-2">
                        Register
                    </Link>
                    <Link href="/dashboard" className="block text-sm text-gray-700 hover:bg-gray-100 p-2">
                        Dashboard
                    </Link>
                    <Link href="/logout" className="block text-sm text-gray-700 hover:bg-gray-100 p-2">
                        Logout
                    </Link>
                    </nav>
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