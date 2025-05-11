import Link from "next/link"
import { ArrowRight, Award, BookOpen, Lightbulb, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { FeaturedProject } from "@/components/featured-project"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary to-[#0a7ea8] text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Projetos de Inovação FMM</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl">
            Conheça os projetos desenvolvidos pelos alunos do 3º ano da Fundação Matias Machline
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-primary-foreground hover:bg-accent/90">
              <Link href="/projetos">Ver Projetos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/sobre">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Featured Project */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Projeto em Destaque</h2>
            <p className="text-gray-600 max-w-2xl">
              Conheça o projeto que mais se destacou na última feira de tecnologia da FMM
            </p>
          </div>

          <FeaturedProject
            title="EcoSense: Monitoramento Ambiental Inteligente"
            description="Sistema de monitoramento ambiental que utiliza sensores IoT para coletar dados sobre qualidade do ar, água e solo em tempo real, auxiliando na preservação de áreas naturais da Amazônia."
            image="/placeholder.svg?height=600&width=1200"
            category="Sustentabilidade"
            team={["Ana Silva", "Carlos Mendes", "Juliana Lima"]}
            year="2023"
            awards={["1º Lugar Feira FMM", "Menção Honrosa FEBRACE"]}
          />
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Projetos Recentes</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore os projetos mais recentes desenvolvidos pelos alunos do 3º ano
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/projetos">
                Ver Todos os Projetos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Categorias de Projetos</h2>
            <p className="text-gray-600 max-w-2xl">
              Os projetos são desenvolvidos em diversas áreas do conhecimento, com foco em soluções inovadoras para
              problemas reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/20 p-4 rounded-full mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Inovação Tecnológica</h3>
              <p className="text-gray-600">
                Projetos que desenvolvem novas tecnologias ou aplicam tecnologias existentes de maneiras inovadoras.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/20 p-4 rounded-full mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Sustentabilidade</h3>
              <p className="text-gray-600">
                Soluções que promovem o desenvolvimento sustentável e a preservação do meio ambiente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/20 p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Educação</h3>
              <p className="text-gray-600">
                Projetos que buscam melhorar o acesso à educação e tornar o aprendizado mais eficiente e inclusivo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/20 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Impacto Social</h3>
              <p className="text-gray-600">
                Iniciativas que visam resolver problemas sociais e melhorar a qualidade de vida das comunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">150+</div>
              <p className="text-white/80">Projetos Desenvolvidos</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">450+</div>
              <p className="text-white/80">Alunos Participantes</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">35+</div>
              <p className="text-white/80">Premiações Nacionais</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">12+</div>
              <p className="text-white/80">Patentes Registradas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Quer conhecer mais sobre os projetos?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-primary-foreground">
            Visite a Fundação Matias Machline e conheça de perto os projetos desenvolvidos pelos nossos alunos.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link href="/contato">Agende uma Visita</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Portfólio FMM</h3>
              <p className="text-gray-400">
                Projetos de inovação desenvolvidos pelos alunos do 3º ano da Fundação Matias Machline.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/sobre" className="text-gray-400 hover:text-white">
                    Sobre a Iniciativa
                  </Link>
                </li>
                <li>
                  <Link href="/projetos" className="text-gray-400 hover:text-white">
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link href="/categorias" className="text-gray-400 hover:text-white">
                    Categorias
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-gray-400 hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@fmm.org.br</li>
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
            <p>© 2025 Fundação Matias Machline. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
