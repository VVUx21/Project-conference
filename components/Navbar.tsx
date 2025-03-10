'use client';
import Link from 'next/link';
import {Menu} from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../components/ui/sheet';
import Image from 'next/image';

const navigation = [
    { name: 'Committee', href: '/'},
    { name: 'Keynote', href: '/'},
    { name: 'Call for Papers', href: '/'},
    { name: 'Paper Submission', href: '/'},
    { name: 'Accepted Papers', href: '/'},
    { name: 'Registration', href: '/'},
    { name: 'PhD Colloquium', href: '/'},
    { name: 'Sponsors', href: '/'},
  ];

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full rounded-b-3xl z-50 top-0 left-0">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://res.cloudinary.com/dgtdkqfsx/image/upload/v1741620262/IEEE_CVMI_2025_npl4o2.png"
                alt="Logo"
                width={200}
                height={200}
                className=""
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary px-3 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-white sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-6">
                  {navigation.map((item) => {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}