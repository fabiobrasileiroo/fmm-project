import Link from "next/link"
import { ArrowLeft, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProjectCard } from "@/components/project-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a página inicial
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Projetos</h1>
          <p className="text-gray-600 max-w-3xl">
            Explore os projetos desenvolvidos pelos alunos do 3º ano da Fundação Matias Machline ao longo dos anos.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Buscar projetos..." className="pl-10" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  <SelectItem value="tech">Inovação Tecnológica</SelectItem>
                  <SelectItem value="sustainability">Sustentabilidade</SelectItem>
                  <SelectItem value="education">Educação</SelectItem>
                  <SelectItem value="social">Impacto Social</SelectItem>
                  <SelectItem value="health">Saúde</SelectItem>
                  <SelectItem value="mobility">Mobilidade</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os anos</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Mais filtros
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="EcoSense: Monitoramento Ambiental Inteligente"
            description="Sistema de monitoramento ambiental que utiliza sensores IoT para coletar dados sobre qualidade do ar, água e solo em tempo real, auxiliando na preservação de áreas naturais da Amazônia."
            image="/placeholder.svg?height=400&width=600"
            category="Sustentabilidade"
            year="2023"
            href="/projetos/ecosense"
          />
          <ProjectCard
            title="SmartHealth"
            description="Aplicativo de monitoramento de saúde que conecta pacientes e médicos, permitindo acompanhamento remoto de condições crônicas."
            image="/placeholder.svg?height=400&width=600"
            category="Saúde"
            year="2023"
            href="/projetos/smarthealth"
          />
          <ProjectCard
            title="EduTech"
            description="Plataforma educacional que utiliza realidade aumentada para tornar o aprendizado de ciências mais interativo e acessível."
            image="/placeholder.svg?height=400&width=600"
            category="Educação"
            year="2023"
            href="/projetos/edutech"
          />
          <ProjectCard
            title="AgroSmart"
            description="Sistema de automação para pequenos produtores rurais, otimizando o uso de recursos e aumentando a produtividade."
            image="/placeholder.svg?height=400&width=600"
            category="Agricultura"
            year="2023"
            href="/projetos/agrosmart"
          />
          <ProjectCard
            title="CityMobility"
            description="Solução de mobilidade urbana que integra diferentes meios de transporte para reduzir congestionamentos e emissões de carbono."
            image="/placeholder.svg?height=400&width=600"
            category="Mobilidade"
            year="2023"
            href="/projetos/citymobility"
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
            title="SafeGuard"
            description="Dispositivo de segurança pessoal que utiliza IA para identificar situações de risco e acionar autoridades automaticamente."
            image="/placeholder.svg?height=400&width=600"
            category="Segurança"
            year="2023"
            href="/projetos/safeguard"
          />
          <ProjectCard
            title="AquaPure"
            description="Sistema de purificação de água de baixo custo para comunidades ribeirinhas, utilizando materiais sustentáveis e energia solar."
            image="/placeholder.svg?height=400&width=600"
            category="Sustentabilidade"
            year="2022"
            href="/projetos/aquapure"
          />
          <ProjectCard
            title="IncluTech"
            description="Conjunto de dispositivos assistivos para pessoas com deficiência, facilitando a interação com tecnologias digitais."
            image="/placeholder.svg?height=400&width=600"
            category="Acessibilidade"
            year="2022"
            href="/projetos/inclutech"
          />
          <ProjectCard
            title="BioPlastic"
            description="Desenvolvimento de plástico biodegradável a partir de resíduos da indústria de açaí, reduzindo o impacto ambiental."
            image="/placeholder.svg?height=400&width=600"
            category="Sustentabilidade"
            year="2022"
            href="/projetos/bioplastic"
          />
          <ProjectCard
            title="SolarBoat"
            description="Embarcação movida a energia solar para transporte sustentável em rios amazônicos, reduzindo a poluição e os custos."
            image="/placeholder.svg?height=400&width=600"
            category="Mobilidade"
            year="2022"
            href="/projetos/solarboat"
          />
          <ProjectCard
            title="MedAlert"
            description="Sistema de alerta para administração de medicamentos, ajudando idosos e cuidadores a manter o controle dos horários."
            image="/placeholder.svg?height=400&width=600"
            category="Saúde"
            year="2022"
            href="/projetos/medalert"
          />
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-1">
            <Button variant="outline" size="icon" disabled>
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              4
            </Button>
            <Button variant="outline" size="sm">
              5
            </Button>
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="sr-only">Próxima página</span>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  )
}
