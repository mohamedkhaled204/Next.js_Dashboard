
"use client"
import React from "react";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";
import { Checkbox } from "./checkbox";
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar1 } from "iconsax-reactjs";

export default function TodoList() {
    const tags = [
        {
            label: "Jokester began sneaking into the castle in the middle of the night",
            checked: true,
        },
        {
            label: "Jokester began sneaking into the castle in the middle of the night",
            checked: true,
        },
        {
            label: "Jokester began sneaking into the castle in the middle of the night",
            checked: false,
        },
        {
            label: "Jokester began sneaking into the castle in the middle of the night",
            checked: true,
        },
        {
            label: "Jokester began sneaking into the castle in the middle of the night",
            checked: false,
        },
        {
            label: "Jokester began sneaking into the castle in the middle of the night",
            checked: false,
        },
        {
            label: "Jokester began sneaking into the castle in the middle of the night",
            checked: true,
        },
        {
            label: "Jokester began sneaking into the castle in the middle of the night",
            checked: true,
        },
        {
            label: "Jokester began sneaking into the castle in the middle of the night",
            checked: false,
        },

    ];
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [open , setOpen] = useState(false);

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-md font-medium mb-3">ToDo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger className="w-full">
                    <Button className="w-full">
                        <Calendar1 />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-50 bg- shadow-md rounded-md">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date)=>{
                            setDate(date)
                            setOpen(false)
                        }}
                        className="rounded-md border bg-primary-foreground"
                    />
                </PopoverContent>
            </Popover>

            {/* ✅ Scrollable task list */}
            <ScrollArea className="h-[400px] rounded-md border">
                <div className="p-4">
                    {tags.map((tag, index) => (
                        <React.Fragment key={index}>
                            <div className="flex gap-3 items-center pt-2">
                                <Checkbox defaultChecked={tag.checked} />
                                <span className="flex-1 text-muted-foreground">{tag.label}</span>
                            </div>
                            <Separator className="my-2" />
                        </React.Fragment>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
