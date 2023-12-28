import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify, Globe } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <div className="flex flex-col items-start w-full mt-10 space-y-4 text-lg text-black">
                  <Link href={"/"} passHref>
                    Sign In
                  </Link>
                  <Link href={"/"} passHref>
                    Get Started
                  </Link>
                  <Link href={"/"} passHref>
                    Pricing
                  </Link>
                  <Link href={"/"} passHref>
                    Features
                  </Link>
                  <Link href={"/contact"} passHref>
                    Contact
                  </Link>
                  <Link href={"/"} passHref>
                    About
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="items-center hidden md:flex md:space-x-4">
        <div className="border-r border-black">
          <div className="mr-4">
            <Globe className="w-6 h-6 text-gray-700" />
          </div>
        </div>
        <Link href={"/contact"} passHref>
          Contact Sales
        </Link>

        <Button
          className="text-md hover:border hover:border-black"
          variant={"ghost"}
        >
          Sign In
        </Button>
        <Button
          className="text-white bg-black border text-md hover:border-black"
          variant={"ghost"}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
