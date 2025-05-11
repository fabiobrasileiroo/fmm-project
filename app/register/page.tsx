"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Building2, GraduationCap, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get("type")
  const [userType, setUserType] = useState(typeParam || "student")

  return (
    <div className="container mx-auto px-4 py-10 md:py-20">
      <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para a página inicial
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Crie sua conta</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Junte-se à plataforma FMM Impact e faça parte da transformação social através da educação e empregabilidade.
          </p>
        </div>

        <Tabs defaultValue={userType} onValueChange={setUserType} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="student" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>Aluno</span>
            </TabsTrigger>
            <TabsTrigger value="institution" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Instituição</span>
            </TabsTrigger>
            <TabsTrigger value="company" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>Empresa</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="student">
            <Card>
              <CardHeader>
                <CardTitle>Cadastro de Aluno</CardTitle>
                <CardDescription>
                  Crie sua conta para acessar cursos gratuitos e oportunidades de emprego.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-name">Nome Completo</Label>
                    <Input id="student-name" placeholder="Digite seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input id="student-email" type="email" placeholder="seu.email@exemplo.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-cpf">CPF</Label>
                    <Input id="student-cpf" placeholder="000.000.000-00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-birth">Data de Nascimento</Label>
                    <Input id="student-birth" type="date" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-phone">Telefone</Label>
                    <Input id="student-phone" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-neighborhood">Bairro</Label>
                    <Input id="student-neighborhood" placeholder="Digite seu bairro" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Áreas de Interesse</Label>
                  <RadioGroup defaultValue="tecnologia" className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tecnologia" id="tecnologia" />
                      <Label htmlFor="tecnologia">Tecnologia</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="administracao" id="administracao" />
                      <Label htmlFor="administracao">Administração</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="design" id="design" />
                      <Label htmlFor="design">Design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="marketing" id="marketing" />
                      <Label htmlFor="marketing">Marketing</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="student-password">Senha</Label>
                  <Input id="student-password" type="password" placeholder="Crie uma senha segura" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Criar Conta</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="institution">
            <Card>
              <CardHeader>
                <CardTitle>Cadastro de Instituição</CardTitle>
                <CardDescription>Cadastre sua instituição para oferecer cursos e capacitações.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="institution-name">Nome da Instituição</Label>
                    <Input id="institution-name" placeholder="Digite o nome da instituição" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution-email">Email Institucional</Label>
                    <Input id="institution-email" type="email" placeholder="contato@instituicao.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="institution-cnpj">CNPJ</Label>
                    <Input id="institution-cnpj" placeholder="00.000.000/0000-00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution-phone">Telefone</Label>
                    <Input id="institution-phone" placeholder="(00) 0000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution-address">Endereço Completo</Label>
                  <Input id="institution-address" placeholder="Rua, número, bairro, cidade, estado" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution-description">Descrição da Instituição</Label>
                  <Input id="institution-description" placeholder="Descreva brevemente sua instituição" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution-password">Senha</Label>
                  <Input id="institution-password" type="password" placeholder="Crie uma senha segura" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Cadastrar Instituição</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle>Cadastro de Empresa</CardTitle>
                <CardDescription>
                  Cadastre sua empresa para encontrar talentos e publicar oportunidades.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Nome da Empresa</Label>
                    <Input id="company-name" placeholder="Digite o nome da empresa" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-email">Email Corporativo</Label>
                    <Input id="company-email" type="email" placeholder="contato@empresa.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-cnpj">CNPJ</Label>
                    <Input id="company-cnpj" placeholder="00.000.000/0000-00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-phone">Telefone</Label>
                    <Input id="company-phone" placeholder="(00) 0000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-address">Endereço Completo</Label>
                  <Input id="company-address" placeholder="Rua, número, bairro, cidade, estado" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-industry">Setor de Atuação</Label>
                  <RadioGroup defaultValue="tecnologia" className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tecnologia" id="company-tecnologia" />
                      <Label htmlFor="company-tecnologia">Tecnologia</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="industria" id="company-industria" />
                      <Label htmlFor="company-industria">Indústria</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="servicos" id="company-servicos" />
                      <Label htmlFor="company-servicos">Serviços</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comercio" id="company-comercio" />
                      <Label htmlFor="company-comercio">Comércio</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-password">Senha</Label>
                  <Input id="company-password" type="password" placeholder="Crie uma senha segura" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Cadastrar Empresa</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Já possui uma conta?{" "}
            <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
