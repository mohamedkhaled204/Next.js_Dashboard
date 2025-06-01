import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import CardList from "@/components/ui/CardList"
import { BadgeCheck, Candy, Citrus } from "lucide-react"
import { Shield } from "iconsax-reactjs"

export default function Page() {
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
          <div className="bg-primary-foreground p-4 rounded-lg"> info</div>
          {/* card list */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transections" />
          </div>
        </div>
        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/*  user card */}
          <div className="bg-primary-foreground p-4 rounded-lg"> user card</div>

          <div className="bg-primary-foreground p-4 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}
