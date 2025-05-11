import Image from "next/image"
import Link from "next/link"
import { Award } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface FeaturedProjectProps {
  title: string
  description: string
  image: string
  category: string
  team: string[]
  year: string
  awards: string[]
}

export function FeaturedProject({ title, description, image, category, team, year, awards }: FeaturedProjectProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-64 md:h-full w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <Badge className="absolute top-2 right-2 bg-accent text-primary font-medium">{category}</Badge>
        </div>
        <CardContent className="p-6 flex flex-col">
          <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-1 text-gray-700">Equipe:</h4>
            <div className="flex flex-wrap gap-2">
              {team.map((member) => (
                <Badge key={member} variant="outline" className="font-normal">
                  {member}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-1 text-gray-700">Premiações:</h4>
            <div className="space-y-1">
              {awards.map((award) => (
                <div key={award} className="flex items-center text-sm text-gray-600">
                  <Award className="h-4 w-4 mr-1 text-accent" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-500 mb-4">Turma {year}</div>

          <div className="mt-auto">
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/projetos/ecosense">Ver Projeto Completo</Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
