"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Calendar, Clock, GraduationCap, Home, LineChart, LogOut, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function StudentDashboard() {
  const [progress, setProgress] = useState(65)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-emerald-600">FMM Impact</h2>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="space-y-1 px-2">
            <Link
              href="/dashboard/student"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-emerald-50 text-emerald-600"
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/student/courses"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <BookOpen className="mr-3 h-5 w-5" />
              Meus Cursos
            </Link>
            <Link
              href="/dashboard/student/opportunities"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <GraduationCap className="mr-3 h-5 w-5" />
              Oportunidades
            </Link>
            <Link
              href="/dashboard/student/calendar"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Calendário
            </Link>
            <Link
              href="/dashboard/student/progress"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <LineChart className="mr-3 h-5 w-5" />
              Meu Progresso
            </Link>
            <Link
              href="/dashboard/student/profile"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <User className="mr-3 h-5 w-5" />
              Perfil
            </Link>
            <Link
              href="/dashboard/student/settings"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Settings className="mr-3 h-5 w-5" />
              Configurações
            </Link>
          </nav>
        </div>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900">Dashboard do Aluno</h1>
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="ml-2 text-sm font-medium text-gray-700">João da Silva</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Cursos em Andamento</CardTitle>
                <BookOpen className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-gray-500">+1 curso nos últimos 30 dias</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Certificados</CardTitle>
                <GraduationCap className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-gray-500">Cursos concluídos com sucesso</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Horas de Estudo</CardTitle>
                <Clock className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48h</div>
                <p className="text-xs text-gray-500">+12h na última semana</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Candidaturas</CardTitle>
                <LineChart className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-gray-500">2 em processo de seleção</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {/* Current Courses */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Meus Cursos</CardTitle>
                <CardDescription>Acompanhe seu progresso nos cursos atuais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Desenvolvimento Web Frontend</span>
                    <span className="text-sm text-gray-500">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="flex justify-between items-center mt-1 text-xs text-gray-500">
                    <span>Módulo 4 de 6</span>
                    <span>12h restantes</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Design UI/UX</span>
                    <span className="text-sm text-gray-500">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                  <div className="flex justify-between items-center mt-1 text-xs text-gray-500">
                    <span>Módulo 2 de 5</span>
                    <span>20h restantes</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Lógica de Programação</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                  <div className="flex justify-between items-center mt-1 text-xs text-gray-500">
                    <span>Módulo 5 de 5</span>
                    <span>3h restantes</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/student/courses">Ver todos os cursos</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Job Opportunities */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Oportunidades Recomendadas</CardTitle>
                <CardDescription>Baseadas no seu perfil e cursos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Estágio em Desenvolvimento Web</h4>
                      <p className="text-sm text-gray-500">TechSolutions</p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Novo</Badge>
                  </div>
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <span className="mr-2">Remoto</span>
                    <span>•</span>
                    <span className="mx-2">20h semanais</span>
                    <span>•</span>
                    <span className="ml-2">R$ 1.200,00</span>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button size="sm" variant="outline">
                      Candidatar-se
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Assistente de UI/UX</h4>
                      <p className="text-sm text-gray-500">DesignHub</p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <span className="mr-2">Híbrido</span>
                    <span>•</span>
                    <span className="mx-2">30h semanais</span>
                    <span>•</span>
                    <span className="ml-2">R$ 1.500,00</span>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button size="sm" variant="outline">
                      Candidatar-se
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/student/opportunities">Ver todas as oportunidades</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Recommended Courses */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Cursos Recomendados para Você</CardTitle>
              <CardDescription>Com base no seu perfil e interesses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-200"></div>
                  <div className="p-4">
                    <h4 className="font-medium">Desenvolvimento Mobile com React Native</h4>
                    <p className="text-sm text-gray-500 mt-1">Aprenda a criar aplicativos móveis multiplataforma</p>
                    <div className="flex items-center mt-2">
                      <Badge variant="outline" className="mr-2">
                        40h
                      </Badge>
                      <Badge variant="outline">Intermediário</Badge>
                    </div>
                    <Button className="w-full mt-4">Inscrever-se</Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-200"></div>
                  <div className="p-4">
                    <h4 className="font-medium">Banco de Dados SQL</h4>
                    <p className="text-sm text-gray-500 mt-1">Fundamentos de bancos de dados relacionais</p>
                    <div className="flex items-center mt-2">
                      <Badge variant="outline" className="mr-2">
                        30h
                      </Badge>
                      <Badge variant="outline">Básico</Badge>
                    </div>
                    <Button className="w-full mt-4">Inscrever-se</Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-200"></div>
                  <div className="p-4">
                    <h4 className="font-medium">Design Thinking</h4>
                    <p className="text-sm text-gray-500 mt-1">Metodologia de solução criativa de problemas</p>
                    <div className="flex items-center mt-2">
                      <Badge variant="outline" className="mr-2">
                        20h
                      </Badge>
                      <Badge variant="outline">Básico</Badge>
                    </div>
                    <Button className="w-full mt-4">Inscrever-se</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Próximos Eventos</CardTitle>
              <CardDescription>Aulas, workshops e prazos importantes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-800 p-2 rounded-md mr-4 text-center min-w-[60px]">
                    <div className="text-sm font-bold">15</div>
                    <div className="text-xs">Mai</div>
                  </div>
                  <div>
                    <h4 className="font-medium">Workshop: Portfólio para Desenvolvedores</h4>
                    <p className="text-sm text-gray-500 mt-1">19:00 - 21:00 • Online</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-800 p-2 rounded-md mr-4 text-center min-w-[60px]">
                    <div className="text-sm font-bold">18</div>
                    <div className="text-xs">Mai</div>
                  </div>
                  <div>
                    <h4 className="font-medium">Entrega do Projeto Final - Desenvolvimento Web</h4>
                    <p className="text-sm text-gray-500 mt-1">Até 23:59 • Via Plataforma</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-800 p-2 rounded-md mr-4 text-center min-w-[60px]">
                    <div className="text-sm font-bold">22</div>
                    <div className="text-xs">Mai</div>
                  </div>
                  <div>
                    <h4 className="font-medium">Feira de Oportunidades - Empresas de Tecnologia</h4>
                    <p className="text-sm text-gray-500 mt-1">14:00 - 18:00 • Centro de Convenções</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
