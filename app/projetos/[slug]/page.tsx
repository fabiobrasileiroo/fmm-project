import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Award, Calendar, FileText, Github, Globe, Users, Youtube } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Aqui você poderia buscar os dados do projeto com base no slug
  // Por enquanto, vamos usar dados estáticos

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/projetos" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para projetos
          </Link>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image
                src="/placeholder.svg?height=800&width=1600"
                alt="EcoSense: Monitoramento Ambiental Inteligente"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <Badge className="bg-accent text-primary font-medium mb-3">Sustentabilidade</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">EcoSense: Monitoramento Ambiental Inteligente</h1>
                  <p className="text-white/80 max-w-3xl">
                    Sistema de monitoramento ambiental que utiliza sensores IoT para coletar dados sobre qualidade do
                    ar, água e solo em tempo real.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1 text-primary" />
                  <span>Ana Silva, Carlos Mendes, Juliana Lima</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-1 text-primary" />
                  <span>Turma 2023</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center text-sm bg-accent/20 text-primary px-3 py-1 rounded-full">
                  <Award className="h-4 w-4 mr-1" />
                  <span>1º Lugar Feira FMM</span>
                </div>
                <div className="flex items-center text-sm bg-accent/20 text-primary px-3 py-1 rounded-full">
                  <Award className="h-4 w-4 mr-1" />
                  <span>Menção Honrosa FEBRACE</span>
                </div>
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                  <TabsTrigger value="details">Detalhes Técnicos</TabsTrigger>
                  <TabsTrigger value="gallery">Galeria</TabsTrigger>
                  <TabsTrigger value="resources">Recursos</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h2 className="text-xl font-bold mb-3 text-primary">Sobre o Projeto</h2>
                        <p className="text-gray-600 mb-4">
                          O EcoSense é um sistema de monitoramento ambiental que utiliza sensores IoT para coletar dados
                          sobre qualidade do ar, água e solo em tempo real, auxiliando na preservação de áreas naturais
                          da Amazônia.
                        </p>
                        <p className="text-gray-600 mb-4">
                          Desenvolvido por estudantes do 3º ano da Fundação Matias Machline, o projeto surgiu da
                          necessidade de monitorar de forma eficiente e acessível áreas de preservação ambiental,
                          fornecendo dados precisos para pesquisadores, órgãos ambientais e comunidades locais.
                        </p>
                        <p className="text-gray-600">
                          O sistema utiliza sensores de baixo custo, energia solar e comunicação LoRaWAN para funcionar
                          em áreas remotas, enviando dados para uma plataforma online onde podem ser visualizados e
                          analisados.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-xl font-bold mb-3 text-primary">Problema</h2>
                        <p className="text-gray-600">
                          A falta de monitoramento contínuo em áreas de preservação ambiental dificulta a detecção
                          precoce de problemas como poluição, desmatamento e mudanças climáticas. Equipamentos
                          tradicionais de monitoramento são caros e muitas vezes inadequados para as condições da
                          floresta amazônica.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-xl font-bold mb-3 text-primary">Solução</h2>
                        <p className="text-gray-600">
                          O EcoSense oferece uma solução acessível e eficiente para o monitoramento ambiental,
                          utilizando tecnologia IoT, energia renovável e comunicação de longo alcance. Os dados
                          coletados permitem a identificação rápida de alterações ambientais, possibilitando
                          intervenções mais ágeis e eficazes.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-xl font-bold mb-3 text-primary">Impacto</h2>
                        <p className="text-gray-600">
                          O projeto já está sendo utilizado em uma área de preservação próxima a Manaus, ajudando
                          pesquisadores a monitorar a qualidade ambiental e detectar alterações. A tecnologia tem
                          potencial para ser expandida para outras áreas de preservação, contribuindo para a conservação
                          da biodiversidade amazônica.
                        </p>
                      </div>
                    </div>

                    <div>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold mb-4 text-primary">Informações do Projeto</h3>

                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold mb-1 text-gray-700">Categoria</h4>
                              <p className="text-gray-600">Sustentabilidade</p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold mb-1 text-gray-700">Ano</h4>
                              <p className="text-gray-600">2023</p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold mb-1 text-gray-700">Equipe</h4>
                              <p className="text-gray-600">Ana Silva, Carlos Mendes, Juliana Lima</p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold mb-1 text-gray-700">Orientador</h4>
                              <p className="text-gray-600">Prof. Dr. Roberto Almeida</p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold mb-1 text-gray-700">Premiações</h4>
                              <ul className="text-gray-600 space-y-1">
                                <li className="flex items-center">
                                  <Award className="h-4 w-4 mr-1 text-accent" />
                                  <span>1º Lugar Feira FMM 2023</span>
                                </li>
                                <li className="flex items-center">
                                  <Award className="h-4 w-4 mr-1 text-accent" />
                                  <span>Menção Honrosa FEBRACE 2023</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold mb-1 text-gray-700">Links</h4>
                              <div className="space-y-2">
                                <Button variant="outline" className="w-full justify-start" asChild>
                                  <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Globe className="h-4 w-4 mr-2" />
                                    Site do Projeto
                                  </a>
                                </Button>
                                <Button variant="outline" className="w-full justify-start" asChild>
                                  <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4 mr-2" />
                                    Repositório GitHub
                                  </a>
                                </Button>
                                <Button variant="outline" className="w-full justify-start" asChild>
                                  <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Youtube className="h-4 w-4 mr-2" />
                                    Vídeo de Apresentação
                                  </a>
                                </Button>
                                <Button variant="outline" className="w-full justify-start" asChild>
                                  <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FileText className="h-4 w-4 mr-2" />
                                    Artigo Científico
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-primary">Detalhes Técnicos</h2>
                      <p className="text-gray-600 mb-4">
                        O EcoSense é composto por uma rede de nós sensores distribuídos pela área de monitoramento, uma
                        estação base para coleta e transmissão de dados, e uma plataforma web para visualização e
                        análise.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-primary">Componentes do Sistema</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Sensores de qualidade do ar (CO2, CO, material particulado)</li>
                        <li>Sensores de qualidade da água (pH, turbidez, temperatura)</li>
                        <li>Sensores de solo (umidade, temperatura, nutrientes)</li>
                        <li>Microcontrolador ESP32 para processamento local</li>
                        <li>Módulo LoRaWAN para comunicação de longo alcance</li>
                        <li>Painel solar e bateria para alimentação autônoma</li>
                        <li>Caixa resistente a intempéries</li>
                        <li>Gateway LoRaWAN para recepção dos dados</li>
                        <li>Servidor para armazenamento e processamento</li>
                        <li>Interface web para visualização e análise</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-primary">Tecnologias Utilizadas</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Arduino</Badge>
                        <Badge variant="outline">ESP32</Badge>
                        <Badge variant="outline">LoRaWAN</Badge>
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                        <Badge variant="outline">TensorFlow</Badge>
                        <Badge variant="outline">Energia Solar</Badge>
                        <Badge variant="outline">IoT</Badge>
                        <Badge variant="outline">Análise de Dados</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-primary">Funcionamento</h3>
                      <p className="text-gray-600 mb-4">
                        Os nós sensores coletam dados ambientais a cada 15 minutos e os transmitem via LoRaWAN para o
                        gateway. O gateway encaminha os dados para o servidor, onde são processados, armazenados e
                        disponibilizados na plataforma web.
                      </p>
                      <p className="text-gray-600 mb-4">
                        A plataforma web permite visualizar os dados em tempo real, gerar gráficos históricos,
                        configurar alertas para valores fora dos parâmetros normais e exportar dados para análises mais
                        detalhadas.
                      </p>
                      <p className="text-gray-600">
                        Um algoritmo de aprendizado de máquina analisa os padrões dos dados e identifica anomalias,
                        ajudando a detectar problemas ambientais antes que se tornem críticos.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-primary">Desafios Técnicos</h3>
                      <p className="text-gray-600 mb-4">
                        Um dos principais desafios foi desenvolver um sistema que funcionasse de forma confiável em
                        ambientes remotos da Amazônia, com alta umidade, chuvas intensas e cobertura florestal densa que
                        dificulta a comunicação.
                      </p>
                      <p className="text-gray-600 mb-4">
                        A autonomia energética também foi um desafio, resolvido com painéis solares de alta eficiência e
                        um sistema inteligente de gerenciamento de energia que reduz o consumo em períodos de baixa
                        luminosidade.
                      </p>
                      <p className="text-gray-600">
                        A calibração dos sensores para as condições específicas da Amazônia exigiu testes extensivos e
                        comparação com equipamentos profissionais para garantir a precisão das medições.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Imagem do projeto 1"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Imagem do projeto 2"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Imagem do projeto 3"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Imagem do projeto 4"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Imagem do projeto 5"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Imagem do projeto 6"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="resources" className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-primary">Recursos do Projeto</h2>
                      <p className="text-gray-600 mb-4">
                        Aqui você encontra materiais adicionais sobre o projeto EcoSense, incluindo documentação
                        técnica, apresentações e publicações.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4 flex items-center">
                          <FileText className="h-8 w-8 text-primary mr-4" />
                          <div>
                            <h3 className="font-medium">Artigo Científico</h3>
                            <p className="text-sm text-gray-500">PDF - 2.4 MB</p>
                          </div>
                          <Button variant="outline" size="sm" className="ml-auto">
                            Download
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4 flex items-center">
                          <FileText className="h-8 w-8 text-primary mr-4" />
                          <div>
                            <h3 className="font-medium">Apresentação</h3>
                            <p className="text-sm text-gray-500">PPTX - 8.7 MB</p>
                          </div>
                          <Button variant="outline" size="sm" className="ml-auto">
                            Download
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4 flex items-center">
                          <FileText className="h-8 w-8 text-primary mr-4" />
                          <div>
                            <h3 className="font-medium">Manual Técnico</h3>
                            <p className="text-sm text-gray-500">PDF - 3.1 MB</p>
                          </div>
                          <Button variant="outline" size="sm" className="ml-auto">
                            Download
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4 flex items-center">
                          <FileText className="h-8 w-8 text-primary mr-4" />
                          <div>
                            <h3 className="font-medium">Esquemáticos</h3>
                            <p className="text-sm text-gray-500">ZIP - 5.2 MB</p>
                          </div>
                          <Button variant="outline" size="sm" className="ml-auto">
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Projetos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="AquaPure"
              description="Sistema de purificação de água de baixo custo para comunidades ribeirinhas, utilizando materiais sustentáveis e energia solar."
              image="/placeholder.svg?height=400&width=600"
              category="Sustentabilidade"
              year="2022"
              href="/projetos/aquapure"
            />
            <ProjectCard
              title="RecycleTech"
              description="Sistema de gestão de resíduos eletrônicos que facilita o descarte correto e incentiva a reciclagem de componentes."
              image="/placeholder.svg?height=400&width=600"
              category="Sustentabilidade"
              year="2023"
              href="/projetos/recycletech"
            />
            <ProjectCard
              title="BioPlastic"
              description="Desenvolvimento de plástico biodegradável a partir de resíduos da indústria de açaí, reduzindo o impacto ambiental."
              image="/placeholder.svg?height=400&width=600"
              category="Sustentabilidade"
              year="2022"
              href="/projetos/bioplastic"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
