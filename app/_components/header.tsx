"use client";

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from 'next/image'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar} from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from 'next/link'
import SideMenu from "./side-menu";


const Header = () => {
   const {data}= useSession(); 

   const handleLogoutClick = () => signOut ();

   const handleLoginClick = () => signIn ("google");
    return(
                 
        <Card>
                <CardContent className="p-5 justify-between items-center flex flex-row">
                <Image src="/Logo.png" alt="FSW Barber" height={18} width={120} />
                
                <Sheet>
                    <SheetTrigger asChild>
                    {<Button variant="outline" size="icon" className="h-8 w-">
                    <MenuIcon size={18}/>
                 </Button>}
                    </SheetTrigger>

                    <SheetContent className="p-0">
                       <SideMenu/>
                    </SheetContent>
                </Sheet>
            </CardContent>
        
        </Card>
    ); 
}

export default Header;