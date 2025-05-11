"use client"

import Link from "next/link"
import {
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  Home,
  LineChart,
  LogOut,
  Plus,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InstitutionDashboard() {
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
              href="/dashboard/institution"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-emerald-50 text-emerald-600"
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/institution/courses"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <BookOpen className="mr-3 h-5 w-5" />
              Cursos
            </Link>
            <Link
              href="/dashboard/institution/students"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Users className="mr-3 h-5 w-5" />
              Alunos
            </Link>
            <Link
              href="/dashboard/institution/calendar"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Calendário
            </Link>
            <Link
              href="/dashboard/institution/analytics"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <LineChart className="mr-3 h-5 w-5" />
              Análises
            </Link>
            <Link
              href="/dashboard/institution/profile"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <User className="mr-3 h-5 w-5" />
              Perfil
            </Link>
            <Link
              href="/dashboard/institution/settings"
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
            <h1 className="text-lg font-semibold text-gray-900">Dashboard da Instituição</h1>
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>CT</AvatarFallback>
              </Avatar>
              <span className="ml-2 text-sm font-medium text-gray-700">Centro Técnico Educacional</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Bem-vindo, Centro Técnico Educacional</h2>
              <p className="text-gray-500">Gerencie seus cursos e acompanhe o progresso dos alunos</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" />
                Novo Curso
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Cursos Ativos</CardTitle>
                <BookOpen className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-gray-500">+3 cursos nos últimos 60 dias</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Alunos Matriculados</CardTitle>
                <Users className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-gray-500">+42 alunos no último mês</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Conclusão</CardTitle>
                <GraduationCap className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-gray-500">+5% em relação ao trimestre anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Horas de Aula</CardTitle>
                <Clock className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">520h</div>
                <p className="text-xs text-gray-500">Nos últimos 30 dias</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Cursos Ativos</CardTitle>
                    <CardDescription>Gerencie seus cursos e turmas</CardDescription>
                  </div>
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Buscar cursos..." className="h-9" />
                    <Button size="sm" variant="ghost">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-medium">Desenvolvimento Web Frontend</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span className="mr-2">40 horas</span>
                          <span>•</span>
                          <span className="mx-2">25 alunos</span>
                          <span>•</span>
                          <span className="ml-2">Em andamento</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">HTML/CSS</Badge>
                          <Badge variant="outline">JavaScript</Badge>
                          <Badge variant="outline">React</Badge>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-medium mr-2">Progresso:</span>
                          <span className="text-sm text-gray-500">65%</span>
                        </div>
                        <Progress value={65} className="h-2 w-40" />
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-medium">Design UI/UX</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span className="mr-2">30 horas</span>
                          <span>•</span>
                          <span className="mx-2">18 alunos</span>
                          <span>•</span>
                          <span className="ml-2">Em andamento</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">Figma</Badge>
                          <Badge variant="outline">Prototipagem</Badge>
                          <Badge variant="outline">UX Research</Badge>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-medium mr-2">Progresso:</span>
                          <span className="text-sm text-gray-500">40%</span>
                        </div>
                        <Progress value={40} className="h-2 w-40" />
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-medium">Lógica de Programação</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span className="mr-2">20 horas</span>
                          <span>•</span>
                          <span className="mx-2">30 alunos</span>
                          <span>•</span>
                          <span className="ml-2">Em andamento</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">Algoritmos</Badge>
                          <Badge variant="outline">Pseudocódigo</Badge>
                          <Badge variant="outline">JavaScript</Badge>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-medium mr-2">Progresso:</span>
                          <span className="text-sm text-gray-500">80%</span>
                        </div>
                        <Progress value={80} className="h-2 w-40" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/institution/courses">Ver todos os cursos</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {/* Student Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Desempenho dos Alunos</CardTitle>
                <CardDescription>Visão geral do desempenho por curso</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="frontend">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="uiux">UI/UX</TabsTrigger>
                    <TabsTrigger value="logica">Lógica</TabsTrigger>
                  </TabsList>
                  <TabsContent value="frontend" className="pt-4">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Frequência</span>
                        <span className="text-sm text-gray-500">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Média de Notas</span>
                        <span className="text-sm text-gray-500">7.8/10</span>
                      </div>
                      <Progress value={78} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Projetos Entregues</span>
                        <span className="text-sm text-gray-500">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </TabsContent>
                  <TabsContent value="uiux" className="pt-4">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Frequência</span>
                        <span className="text-sm text-gray-500">88%</span>
                      </div>
                      <Progress value={88} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Média de Notas</span>
                        <span className="text-sm text-gray-500">8.2/10</span>
                      </div>
                      <Progress value={82} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Projetos Entregues</span>
                        <span className="text-sm text-gray-500">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </TabsContent>
                  <TabsContent value="logica" className="pt-4">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Frequência</span>
                        <span className="text-sm text-gray-500">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Média de Notas</span>
                        <span className="text-sm text-gray-500">7.5/10</span>
                      </div>
                      <Progress value={75} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Projetos Entregues</span>
                        <span className="text-sm text-gray-500">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/institution/analytics">Ver análise completa</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Upcoming Classes */}
            <Card>
              <CardHeader>
                <CardTitle>Próximas Aulas</CardTitle>
                <CardDescription>Aulas programadas para os próximos dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-800 p-2 rounded-md mr-4 text-center min-w-[60px]">
                      <div className="text-sm font-bold">14</div>
                      <div className="text-xs">Mai</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Desenvolvimento Web Frontend</h4>
                      <p className="text-sm text-gray-500">Módulo: Introdução ao React • 14:00 - 17:00</p>
                      <div className="flex mt-2">
                        <Badge variant="outline" className="mr-2">
                          Sala 3
                        </Badge>
                        <Badge variant="outline">25 alunos</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-800 p-2 rounded-md mr-4 text-center min-w-[60px]">
                      <div className="text-sm font-bold">15</div>
                      <div className="text-xs">Mai</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Design UI/UX</h4>
                      <p className="text-sm text-gray-500">Módulo: Prototipagem no Figma • 09:00 - 12:00</p>
                      <div className="flex mt-2">
                        <Badge variant="outline" className="mr-2">
                          Laboratório 2
                        </Badge>
                        <Badge variant="outline">18 alunos</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-800 p-2 rounded-md mr-4 text-center min-w-[60px]">
                      <div className="text-sm font-bold">15</div>
                      <div className="text-xs">Mai</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Lógica de Programação</h4>
                      <p className="text-sm text-gray-500">Módulo: Estruturas de Repetição • 14:00 - 16:00</p>
                      <div className="flex mt-2">
                        <Badge variant="outline" className="mr-2">
                          Sala 5
                        </Badge>
                        <Badge variant="outline">30 alunos</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/institution/calendar">Ver calendário completo</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Impact Metrics */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Métricas de Impacto</CardTitle>
              <CardDescription>Resultados e impacto social dos cursos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg border text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">85%</div>
                  <p className="text-sm text-gray-600">Taxa de Empregabilidade</p>
                  <p className="text-xs text-gray-500 mt-1">Alunos que conseguiram emprego após a conclusão</p>
                </div>
                <div className="bg-white p-4 rounded-lg border text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">92%</div>
                  <p className="text-sm text-gray-600">Satisfação dos Alunos</p>
                  <p className="text-xs text-gray-500 mt-1">Baseado em avaliações dos cursos</p>
                </div>
                <div className="bg-white p-4 rounded-lg border text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">78%</div>
                  <p className="text-sm text-gray-600">Aumento de Renda</p>
                  <p className="text-xs text-gray-500 mt-1">Média de aumento salarial após a conclusão</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/institution/impact">Ver relatório completo de impacto</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
