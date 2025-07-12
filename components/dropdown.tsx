import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "../components/ui/dropdown-menu"
import Link from "next/link"
import { ChevronDown } from "lucide-react";
  
  export function DropdownMenuDemo() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <p className="hover:text-gray-400 cursor-pointer">
            CVMI History
            <ChevronDown className="inline-block ml-1" />
        </p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36 bg-white" sideOffset={5}>
            <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">
                <Link href="https://cvmi2024.iiita.ac.in/" target="_blank" rel="noopener noreferrer">
                    CVMI 2024   
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                <Link href="https://cvmi2023.iiitm.ac.in/" target="_blank" rel="noopener noreferrer">
                    CVMI 2023   
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                <Link href="https://cvmi.iiita.ac.in/" target="_blank" rel="noopener noreferrer">
                    CVMI 2022   
                </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  