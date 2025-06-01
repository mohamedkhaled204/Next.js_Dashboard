import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./card";
import Image from "next/image";
import { Badge } from "./badge";


const popularUsers = [
    {
        id: 11,
        name: "Ethan Walker",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        badge: "New",
        title: "Cloud Architect",
    },
    {
        id: 12,
        name: "Liam Turner",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        badge: "Team Lead",
        title: "Project Manager",
    },
    {
        id: 13,
        name: "Noah Baker",
        image: "https://randomuser.me/api/portraits/men/13.jpg",
        badge: "Pro",
        title: "AI Engineer",
    },
    {
        id: 14,
        name: "Mason Carter",
        image: "https://randomuser.me/api/portraits/men/14.jpg",
        badge: "Admin",
        title: "Cybersecurity Analyst",
    },
    {
        id: 15,
        name: "Logan Scott",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        badge: "Support",
        title: "Systems Administrator",
    },
];

const latestUsers = [
    {
        id: 2,
        name: "Michael Lee",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        badge: "Admin",
        title: "Product Manager",
    },
    {
        id: 4,
        name: "Daniel Smith",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        badge: "Pro",
        title: "Full Stack Developer",
    },
    {
        id: 6,
        name: "James Parker",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        badge: "Support",
        title: "DevOps Engineer",
    },
    {
        id: 8,
        name: "Carlos Martinez",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
        badge: "Pro",
        title: "Backend Developer",
    },
    {
        id: 10,
        name: "Henry Wilson",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        badge: "Pro",
        title: "Data Scientist",
    },
];

export default function CardList({ title }: { title: string }) {
    const list = title === "popularUsers" ? popularUsers : latestUsers;

    return (
        <div className="">
            <h1 className="text-lg font-medium mb-5">{title}</h1>
            <div className="flex flex-col gap-2">
                {list.map((user) => (
                    <Card key={user.id} className="p-4 flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="mt-2 mx-1 px-0 flex-1">
                                <CardTitle className="text-sm font-medium">{user.title}</CardTitle>
                                <Badge variant="outline">{user.badge}</Badge>
                            </CardContent>
                        </div>
                        <CardFooter className="mx-1 px-0">
                            {user.id}K
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
