import { AddSquare } from "iconsax-reactjs";
import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export default function CustomButton({ disabled, isRounded }: { disabled?: boolean, isRounded?:boolean }) {
    return (
        <div>
            <Button
                className={cn("text-white cursor-pointer px-4 py-2", disabled ? "bg-black" : "bg-amber-500", isRounded? "rounded-xl": "rounded-md")}
            >
                <AddSquare size="32" color="#ffffff" />
                Click Me
            </Button>
        </div>
    );
}
