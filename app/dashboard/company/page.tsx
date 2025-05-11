"use client"

import Link from "next/link"
import { Building2, Clock, FileText, Home, LineChart, LogOut, Mail, Plus, Search, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompanyDashboard() {
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
              href="/dashboard/company"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-emerald-50 text-emerald-600"
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/company/jobs"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <FileText className="mr-3 h-5 w-5" />
              Vagas
            </Link>
            <Link
              href="/dashboard/company/candidates"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Users className="mr-3 h-5 w-5" />
              Candidatos
            </Link>
            <Link
              href="/dashboard/company/analytics"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <LineChart className="mr-3 h-5 w-5" />
              Análises
            </Link>
            <Link
              href="/dashboard/company/profile"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Building2 className="mr-3 h-5 w-5" />
              Perfil da Empresa
            </Link>
            <Link
              href="/dashboard/company/settings"
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
            <h1 className="text-lg font-semibold text-gray-900">Dashboard da Empresa</h1>
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <span className="ml-2 text-sm font-medium text-gray-700">TechSolutions</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Bem-vinda, TechSolutions</h2>
              <p className="text-gray-500">Gerencie suas vagas e encontre talentos qualificados</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" />
                Nova Vaga
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Vagas Ativas</CardTitle>
                <FileText className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-gray-500">+2 vagas nos últimos 30 dias</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Candidatos</CardTitle>
                <Users className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-gray-500">+12 candidatos na última semana</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Entrevistas Agendadas</CardTitle>
                <Clock className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-gray-500">Próximos 7 dias</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Contratações</CardTitle>
                <LineChart className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-gray-500">Nos últimos 90 dias</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Vagas Recentes</CardTitle>
                    <CardDescription>Gerencie suas vagas ativas</CardDescription>
                  </div>
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Buscar vagas..." className="h-9" />
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
                        <h3 className="font-medium">Desenvolvedor Frontend</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span className="mr-2">Remoto</span>
                          <span>•</span>
                          <span className="mx-2">Tempo Integral</span>
                          <span>•</span>
                          <span className="ml-2">Publicada há 5 dias</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">React</Badge>
                          <Badge variant="outline">JavaScript</Badge>
                          <Badge variant="outline">Tailwind CSS</Badge>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center">
                        <div className="mr-4 text-center">
                          <div className="text-lg font-bold">12</div>
                          <div className="text-xs text-gray-500">Candidatos</div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-medium">Analista de Dados</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span className="mr-2">Híbrido</span>
                          <span>•</span>
                          <span className="mx-2">Tempo Integral</span>
                          <span>•</span>
                          <span className="ml-2">Publicada há 7 dias</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">SQL</Badge>
                          <Badge variant="outline">Python</Badge>
                          <Badge variant="outline">Power BI</Badge>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center">
                        <div className="mr-4 text-center">
                          <div className="text-lg font-bold">8</div>
                          <div className="text-xs text-gray-500">Candidatos</div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-medium">Estágio em Design UI/UX</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span className="mr-2">Presencial</span>
                          <span>•</span>
                          <span className="mx-2">Meio Período</span>
                          <span>•</span>
                          <span className="ml-2">Publicada há 3 dias</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">Figma</Badge>
                          <Badge variant="outline">Adobe XD</Badge>
                          <Badge variant="outline">Prototipagem</Badge>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center">
                        <div className="mr-4 text-center">
                          <div className="text-lg font-bold">5</div>
                          <div className="text-xs text-gray-500">Candidatos</div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/company/jobs">Ver todas as vagas</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {/* Recent Candidates */}
            <Card>
              <CardHeader>
                <CardTitle>Candidatos Recentes</CardTitle>
                <CardDescription>Candidatos que se aplicaram às suas vagas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>MS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Maria Silva</h4>
                        <p className="text-sm text-gray-500">Desenvolvedor Frontend</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        Ver Perfil
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>PS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Pedro Santos</h4>
                        <p className="text-sm text-gray-500">Analista de Dados</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        Ver Perfil
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>LC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Luiza Costa</h4>
                        <p className="text-sm text-gray-500">Estágio em Design UI/UX</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        Ver Perfil
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/company/candidates">Ver todos os candidatos</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Upcoming Interviews */}
            <Card>
              <CardHeader>
                <CardTitle>Próximas Entrevistas</CardTitle>
                <CardDescription>Entrevistas agendadas para os próximos dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-800 p-2 rounded-md mr-4 text-center min-w-[60px]">
                      <div className="text-sm font-bold">14</div>
                      <div className="text-xs">Mai</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Carlos Oliveira</h4>
                      <p className="text-sm text-gray-500">Desenvolvedor Frontend • 14:00 - 15:00</p>
                      <div className="flex mt-2">
                        <Badge variant="outline" className="mr-2">
                          Online
                        </Badge>
                        <Badge variant="outline">Google Meet</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-800 p-2 rounded-md mr-4 text-center min-w-[60px]">
                      <div className="text-sm font-bold">15</div>
                      <div className="text-xs">Mai</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Ana Beatriz</h4>
                      <p className="text-sm text-gray-500">Analista de Dados • 10:00 - 11:00</p>
                      <div className="flex mt-2">
                        <Badge variant="outline" className="mr-2">
                          Presencial
                        </Badge>
                        <Badge variant="outline">Sala de Reuniões</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-800 p-2 rounded-md mr-4 text-center min-w-[60px]">
                      <div className="text-sm font-bold">16</div>
                      <div className="text-xs">Mai</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Rafael Mendes</h4>
                      <p className="text-sm text-gray-500">Estágio em Design UI/UX • 15:30 - 16:30</p>
                      <div className="flex mt-2">
                        <Badge variant="outline" className="mr-2">
                          Online
                        </Badge>
                        <Badge variant="outline">Zoom</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Gerenciar Agenda
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Analytics */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Análise de Desempenho</CardTitle>
              <CardDescription>Estatísticas das suas vagas e candidaturas</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="applications">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="applications">Candidaturas</TabsTrigger>
                  <TabsTrigger value="views">Visualizações</TabsTrigger>
                  <TabsTrigger value="hires">Contratações</TabsTrigger>
                </TabsList>
                <TabsContent value="applications" className="pt-4">
                  <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de candidaturas por vaga</p>
                  </div>
                </TabsContent>
                <TabsContent value="views" className="pt-4">
                  <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de visualizações por vaga</p>
                  </div>
                </TabsContent>
                <TabsContent value="hires" className="pt-4">
                  <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de contratações por período</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
