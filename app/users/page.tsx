"use client"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import CardList from "@/components/ui/CardList"
import { BadgeCheck, Candy, Citrus } from "lucide-react"
import { Shield } from "iconsax-reactjs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import EditUser from "@/components/ui/EditUser"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from '@/app/logo.jpeg'
import { AddLineChart } from "@/components/ui/AddLineChart"

type FormData = {
  username: string
  email: string
  phone: string
  location: string
  role: string
}

export default function YourComponent() {
  const [formData, setFormData] = useState<FormData>({
    username: "Mohamed Khaled",
    email: "MohamedKhaled@gmail.com",
    phone: "01210374619",
    location: "El Mansoura",
    role: "Admin",
  })

  function handleFormData(data: FormData) {
    setFormData(data)
  }
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>User Name</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* user badge */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badge</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck size={36} className="rounded-full bg-blue-500/50 p-2 border-1" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Verified User</h1>
                  <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Citrus size={36} className="rounded-full bg-orange-500/50 p-2 border-1" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Popular</h1>
                  <p className="text-sm text-muted-foreground">This user has been popular in the community</p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Candy size={36} className="rounded-full bg-yellow-500/50 p-2 border-1" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Awarded</h1>
                  <p className="text-sm text-muted-foreground">This user has been awarded in their contributions</p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Shield size={36} className="rounded-full bg-green-500/50 p-2 border-1" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Admin</h1>
                  <p className="text-sm text-muted-foreground">Admin users have access to all features and can manage users.</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* info */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-xl font-semibold">User Information</h1>
              <div>
                <Sheet>
                  <SheetTrigger>
                    <Button>Edit User</Button>
                  </SheetTrigger>
                  <EditUser onSubmitForm={handleFormData} />
                </Sheet>
              </div>
            </div>
            <div className="mb-2">
              <p className="text-muted-foreground text-sm mb-2">Profile Completion</p>
              <Progress value={66} />
            </div>
            <div className="my-3">
              <span className="text-md">Username: </span>
              <span className="text-muted-foreground text-sm">{formData.username}</span>
            </div>
            <div className="my-3">
              <span className="text-md">E-mail: </span>
              <span className="text-muted-foreground text-sm">{formData.email}</span>
            </div>
            <div className="my-3">
              <span className="text-md">Phone: </span>
              <span className="text-muted-foreground text-sm">{formData.phone}</span>
            </div>
            <div className="my-3">
              <span className="text-md">Location: </span>
              <span className="text-muted-foreground text-sm">{formData.location}</span>
            </div>
            <div className="my-3">
              <span className="text-md">Role: </span>
              <Badge>{formData.role}</Badge>
            </div>
          </div>
          {/* card list */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transections" />
          </div>
        </div>
        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/*  user card */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Avatar>
                <AvatarImage src={logo.src} />
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <h1>Mohamed Khaled</h1>
            </div>
            <p className="text-muted-foreground text-sm font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, minus. Repellat rerum in dignissimos. Reiciendis, modi. Reprehenderit quasi laborum eveniet, vel expedita obcaecati quis fuga voluptatem rem ipsum facilis amet.</p>
          </div>

          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold mb-4">User Activity</h1>

            <AddLineChart />
          </div>
        </div>
      </div>
    </div>
  )
}
