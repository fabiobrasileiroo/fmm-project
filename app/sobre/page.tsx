import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Award, BookOpen, Lightbulb, Rocket, Target, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a página inicial
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sobre a Iniciativa</h1>
          <p className="text-gray-600 max-w-3xl">
            Conheça mais sobre o portfólio de projetos da Fundação Matias Machline e como ele contribui para o
            desenvolvimento dos alunos e da sociedade.
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4 text-primary">O Portfólio de Projetos FMM</h2>
              <p className="text-gray-600 mb-4">
                O Portfólio de Projetos da Fundação Matias Machline é uma iniciativa que centraliza e divulga os
                projetos desenvolvidos pelos alunos do 3º ano do Ensino Médio Técnico, como parte de seu trabalho de
                conclusão de curso.
              </p>
              <p className="text-gray-600 mb-4">
                Anualmente, os alunos são desafiados a desenvolver soluções inovadoras para problemas reais, aplicando
                os conhecimentos técnicos adquiridos durante o curso e desenvolvendo habilidades essenciais para o
                mercado de trabalho.
              </p>
              <p className="text-gray-600">
                Os projetos abrangem diversas áreas do conhecimento, como tecnologia, sustentabilidade, saúde, educação
                e mobilidade, sempre com foco na inovação e no impacto social positivo.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Alunos trabalhando em projetos"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="bg-accent/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Missão</h2>
            <p className="text-gray-600">
              Promover o desenvolvimento de projetos inovadores que apliquem conhecimentos técnicos para resolver
              problemas reais, contribuindo para a formação integral dos alunos e para o desenvolvimento sustentável da
              região amazônica.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="bg-accent/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Visão</h2>
            <p className="text-gray-600">
              Ser referência nacional em projetos de inovação desenvolvidos por estudantes do ensino médio técnico,
              inspirando jovens talentos a criar soluções que transformem positivamente a sociedade e o meio ambiente.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Objetivos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">Educacional</h3>
              <p className="text-gray-600">
                Proporcionar aos alunos a oportunidade de aplicar conhecimentos teóricos em projetos práticos,
                desenvolvendo habilidades técnicas e socioemocionais essenciais para o mercado de trabalho.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">Inovação</h3>
              <p className="text-gray-600">
                Estimular o desenvolvimento de soluções inovadoras para problemas reais, incentivando a criatividade, o
                empreendedorismo e a busca por novas tecnologias e metodologias.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">Social</h3>
              <p className="text-gray-600">
                Promover o desenvolvimento de projetos com impacto social positivo, contribuindo para a solução de
                problemas da comunidade local e para o desenvolvimento sustentável da região amazônica.
              </p>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">História</h2>
          <div className="space-y-6">
            <p className="text-gray-600">
              A iniciativa de desenvolvimento de projetos de conclusão de curso na Fundação Matias Machline teve início
              em 2010, como parte da formação técnica dos alunos. Inicialmente, os projetos eram apresentados apenas
              internamente, para professores e colegas.
            </p>
            <p className="text-gray-600">
              Em 2015, foi realizada a primeira Feira de Projetos FMM, aberta ao público, onde os alunos puderam
              apresentar suas criações para a comunidade, empresas e instituições parceiras. O sucesso do evento levou à
              sua institucionalização como parte do calendário anual da Fundação.
            </p>
            <p className="text-gray-600">
              A partir de 2018, os projetos passaram a participar de feiras e competições nacionais e internacionais,
              conquistando diversas premiações e reconhecimentos. Em 2020, foi criado o Portfólio de Projetos FMM, uma
              plataforma online para centralizar e divulgar os projetos desenvolvidos pelos alunos.
            </p>
            <p className="text-gray-600">
              Hoje, o Portfólio de Projetos FMM é uma referência em inovação estudantil, reunindo mais de 150 projetos
              desenvolvidos ao longo dos anos, muitos dos quais geraram patentes, publicações científicas e até mesmo
              startups fundadas pelos próprios alunos.
            </p>
          </div>
        </div>

        {/* Recognition */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Reconhecimentos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">Premiações Nacionais</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">FEBRACE - Feira Brasileira de Ciências e Engenharia</p>
                    <p className="text-sm text-gray-600">Mais de 15 premiações em diferentes categorias</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">MOSTRATEC - Mostra Internacional de Ciência e Tecnologia</p>
                    <p className="text-sm text-gray-600">8 premiações em diferentes edições</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Prêmio Jovem Cientista</p>
                    <p className="text-sm text-gray-600">3 projetos finalistas e 1 vencedor</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">Reconhecimentos Internacionais</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">ISEF - International Science and Engineering Fair</p>
                    <p className="text-sm text-gray-600">2 projetos finalistas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Google Science Fair</p>
                    <p className="text-sm text-gray-600">1 projeto semifinalista</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Genius Olympiad</p>
                    <p className="text-sm text-gray-600">3 medalhas (1 ouro, 1 prata, 1 bronze)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Equipe</h2>
          <p className="text-gray-600 mb-6">
            O Portfólio de Projetos FMM é coordenado por uma equipe multidisciplinar de professores e profissionais da
            Fundação Matias Machline, que orientam e apoiam os alunos no desenvolvimento de seus projetos.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-bold mb-1">Dr. Ricardo Oliveira</h3>
              <p className="text-sm text-gray-600">Coordenador Geral</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-bold mb-1">Dra. Camila Santos</h3>
              <p className="text-sm text-gray-600">Coordenadora Pedagógica</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-bold mb-1">Prof. André Lima</h3>
              <p className="text-sm text-gray-600">Orientador Técnico</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-bold mb-1">Profa. Juliana Costa</h3>
              <p className="text-sm text-gray-600">Orientadora de Inovação</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-xl shadow-sm p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Quer conhecer mais sobre os projetos?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Visite a Fundação Matias Machline e conheça de perto os projetos desenvolvidos pelos nossos alunos, ou entre
            em contato para mais informações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-accent text-primary hover:bg-accent/90">
              <Link href="/projetos">Ver Projetos</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contato">Entrar em Contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
