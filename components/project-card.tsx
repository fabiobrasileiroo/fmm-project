import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  year: string
  href: string
}

export function ProjectCard({ title, description, image, category, year, href }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <Badge className="absolute top-2 right-2 bg-accent text-primary font-medium">{category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-2">{description}</p>
        <div className="text-xs text-gray-500">Turma {year}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={href} className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center">
          Ver detalhes
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  )
}
