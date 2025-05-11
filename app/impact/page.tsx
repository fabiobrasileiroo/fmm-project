import Link from "next/link"
import { ArrowRight, BarChart3, Building2, GraduationCap, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-emerald-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Nosso Impacto Social</h1>
            <p className="text-lg md:text-xl mb-8">
              Transformando vidas através da educação e empregabilidade no bairro Viver Melhor e comunidades próximas.
            </p>
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Link href="/register">Faça Parte dessa Transformação</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Impact Numbers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Números</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Users className="h-7 w-7 text-emerald-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">250+</div>
                  <p className="text-gray-600">Jovens Capacitados</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <GraduationCap className="h-7 w-7 text-emerald-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
                  <p className="text-gray-600">Cursos Técnicos</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Building2 className="h-7 w-7 text-emerald-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">30+</div>
                  <p className="text-gray-600">Empresas Parceiras</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <BarChart3 className="h-7 w-7 text-emerald-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">85%</div>
                  <p className="text-gray-600">Taxa de Empregabilidade</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Métricas de Impacto</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Acompanhamos de perto o impacto de nossas ações para garantir que estamos realmente transformando vidas e
              comunidades.
            </p>

            <Tabs defaultValue="employment" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="employment">Empregabilidade</TabsTrigger>
                <TabsTrigger value="education">Educação</TabsTrigger>
                <TabsTrigger value="community">Comunidade</TabsTrigger>
              </TabsList>
              <TabsContent value="employment">
                <Card>
                  <CardHeader>
                    <CardTitle>Impacto na Empregabilidade</CardTitle>
                    <CardDescription>Acompanhamento da inserção dos jovens no mercado de trabalho</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
                        <h3 className="text-lg font-medium mb-2">Taxa de Empregabilidade por Curso</h3>
                        <p className="text-gray-600 text-sm">
                          Nossos cursos de tecnologia apresentam as maiores taxas de empregabilidade, com destaque para
                          Desenvolvimento Web (92%) e Análise de Dados (88%).
                        </p>
                      </div>
                      <div>
                        <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
                        <h3 className="text-lg font-medium mb-2">Tempo Médio para Contratação</h3>
                        <p className="text-gray-600 text-sm">
                          Após a conclusão dos cursos, nossos alunos levam em média 3,5 meses para conseguir sua
                          primeira oportunidade de trabalho na área.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <CardTitle>Impacto Educacional</CardTitle>
                    <CardDescription>Métricas de desempenho e desenvolvimento dos alunos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
                        <h3 className="text-lg font-medium mb-2">Taxa de Conclusão dos Cursos</h3>
                        <p className="text-gray-600 text-sm">
                          Mantemos uma taxa média de conclusão de 78%, significativamente acima da média nacional para
                          cursos técnicos gratuitos, que é de 45%.
                        </p>
                      </div>
                      <div>
                        <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
                        <h3 className="text-lg font-medium mb-2">Desenvolvimento de Habilidades</h3>
                        <p className="text-gray-600 text-sm">
                          Avaliações antes e depois dos cursos mostram um aumento médio de 65% nas habilidades técnicas
                          e 45% nas habilidades socioemocionais.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="community">
                <Card>
                  <CardHeader>
                    <CardTitle>Impacto na Comunidade</CardTitle>
                    <CardDescription>Transformações sociais e econômicas nas comunidades atendidas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
                        <h3 className="text-lg font-medium mb-2">Aumento de Renda Familiar</h3>
                        <p className="text-gray-600 text-sm">
                          As famílias dos jovens que concluíram nossos cursos e ingressaram no mercado de trabalho
                          registraram um aumento médio de 40% na renda familiar.
                        </p>
                      </div>
                      <div>
                        <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
                        <h3 className="text-lg font-medium mb-2">Desenvolvimento Local</h3>
                        <p className="text-gray-600 text-sm">
                          Observamos um aumento de 25% no número de pequenos negócios locais iniciados por ex-alunos,
                          contribuindo para o desenvolvimento econômico da região.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Histórias de Sucesso</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Conheça algumas das histórias inspiradoras de jovens que transformaram suas vidas através da nossa
              plataforma.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <CardTitle className="text-center">Carlos Silva</CardTitle>
                  <CardDescription className="text-center">Desenvolvedor Web</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    "Antes do curso, eu não tinha perspectiva de carreira. Hoje trabalho como desenvolvedor em uma
                    startup e posso ajudar minha família financeiramente."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <CardTitle className="text-center">Ana Beatriz</CardTitle>
                  <CardDescription className="text-center">Analista de Dados</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    "A plataforma me conectou com um curso de análise de dados e depois com meu emprego atual. Minha
                    renda aumentou 3x em apenas um ano."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <CardTitle className="text-center">Pedro Oliveira</CardTitle>
                  <CardDescription className="text-center">Designer UI/UX</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    "Descobri minha paixão pelo design através do curso. Hoje trabalho remotamente para uma empresa
                    internacional e posso me sustentar."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/testimonials">
                  Ver Mais Histórias <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Parceiros que Transformam</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Empresas e instituições que acreditam no potencial dos jovens e no poder da educação para transformar
              vidas.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="h-24 bg-white rounded-lg border flex items-center justify-center">
                <div className="text-gray-400 font-medium">Empresa 1</div>
              </div>
              <div className="h-24 bg-white rounded-lg border flex items-center justify-center">
                <div className="text-gray-400 font-medium">Empresa 2</div>
              </div>
              <div className="h-24 bg-white rounded-lg border flex items-center justify-center">
                <div className="text-gray-400 font-medium">Empresa 3</div>
              </div>
              <div className="h-24 bg-white rounded-lg border flex items-center justify-center">
                <div className="text-gray-400 font-medium">Empresa 4</div>
              </div>
              <div className="h-24 bg-white rounded-lg border flex items-center justify-center">
                <div className="text-gray-400 font-medium">Empresa 5</div>
              </div>
              <div className="h-24 bg-white rounded-lg border flex items-center justify-center">
                <div className="text-gray-400 font-medium">Empresa 6</div>
              </div>
              <div className="h-24 bg-white rounded-lg border flex items-center justify-center">
                <div className="text-gray-400 font-medium">Empresa 7</div>
              </div>
              <div className="h-24 bg-white rounded-lg border flex items-center justify-center">
                <div className="text-gray-400 font-medium">Empresa 8</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/partners">Torne-se um Parceiro</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Faça Parte dessa Transformação</h2>
            <p className="text-lg mb-8">
              Junte-se a nós para transformar a realidade de jovens através da educação e oportunidades de trabalho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/register?type=student">Sou Aluno</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/register?type=institution">Sou Instituição</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/register?type=company">Sou Empresa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">FMM Impact</h3>
              <p className="text-gray-400">
                Conectando talentos a oportunidades e transformando vidas através da educação e empregabilidade.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-white">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link href="/companies" className="text-gray-400 hover:text-white">
                    Empresas Parceiras
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="text-gray-400 hover:text-white">
                    Impacto Social
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@fmmimpact.org</li>
                <li>(92) 3XXX-XXXX</li>
                <li>Av. Fundação Matias Machline, 1000</li>
                <li>Manaus, AM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 FMM Impact. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
