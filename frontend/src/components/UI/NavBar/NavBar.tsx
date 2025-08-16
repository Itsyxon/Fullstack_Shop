import React from 'react';
import Container from '../../Container';
import Link from 'next/link';
import CartDisplay from './CartDisplay';

const NavBar = () => {
    return (
        <nav className='bg-white'>
            <Container>
                <div className='flex justify-between items-center h-16 text-lg font-liber'>
                    <ul className='flex gap-12 text-[var(--secondary)]'>
                        <li><Link href='/'>Главная</Link></li>
                        <li><Link href='/sales'>Акции</Link></li>
                    </ul>
                    <ul className='flex gap-12 text-[var(--secondary)] font-liber'>
                        <li><CartDisplay /></li>
                    </ul>
                </div>
            </Container>
        </nav >
    );
};

export default NavBar;