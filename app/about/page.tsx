import { Download, Github, Linkedin, Mail, Building2 } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Juan Rodriguez Monti",
  description: "Software Engineering Manager with 20+ years leading high-impact teams and cloud architecture",
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/juanitalia-GzqfGetOvoJ9T1geth8cRYnNA5jDEU.png"
                alt="Juan Rodriguez Monti"
                width={400}
                height={400}
                className="profile-image"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-red-600" />
                <span className="text-red-600 dark:text-red-400 font-medium">Current: Software Engineering Manager @ RELP</span>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h1>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  I'm a seasoned Software Engineering Manager with over two decades of experience driving full-stack
                  technical strategy and leading high-impact teams. Currently at RELP, I lead a team of 10 engineers
                  with end-to-end ownership of architecture, backend, frontend, cloud infrastructure, and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sticky top-24 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Connect</h2>
                <div className="space-y-4">
                  <a
                    href="https://github.com/juanrodriguezmonti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/juanrodriguezmonti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:juan@example.com"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href="/JuanRodriguezMontiCV2025.pdf"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2 w-full justify-center"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                  I drive technical strategy, team development, and execution of scalable, secure solutions aligned with
                  business goals. My technical background spans AWS and cloud platforms, distributed architectures,
                  secure software development, and resilient systems design.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                  As a people-first leader, I focus on technical excellence, career growth, and creating a culture of
                  ownership, autonomy, and collaboration. I believe great systems start with great teams.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12 text-justify">
                  Throughout my career, I've founded companies, led technical transformations, taught at universities,
                  and written for international technical publications. I'm always open to meaningful adventures in
                  engineering, design, cloud transformation, and scaling modern infrastructures.
                </p>
              </div>

              {/* Experience */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Professional Experience</h2>
                <div className="space-y-12">
                  {/* RELP - Current */}
                  <div className="relative pl-8 border-l-2 border-red-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineering Manager</h3>
                      <p className="text-red-600 dark:text-red-400 font-medium">RELP</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-justify">March 2024 - Present</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                      Leading a high-performing engineering team of 10 engineers with end-to-end ownership of
                      architecture, backend, frontend, cloud infrastructure, and security. Driving technical strategy
                      and execution of scalable, secure solutions.
                    </p>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-4">
                      <li>• Defined and executed full-stack technical strategy including architecture decisions</li>
                      <li>• Led cloud-native platform migration improving performance and reducing costs</li>
                      <li>• Implemented security initiatives aligned with industry standards</li>
                      <li>• Improved delivery speed with automated testing and observability tools</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded-full">
                        Team Leadership
                      </span>
                      <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded-full">
                        FastAPI
                      </span>
                      <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded-full">
                        Cloud Architecture
                      </span>
                    </div>
                  </div>

                  {/* RELP - Head of Engineering */}
                  <div className="relative pl-8 border-l-2 border-amber-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Head of Software Engineering</h3>
                      <p className="text-amber-600 dark:text-amber-400 font-medium">RELP</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-justify">
                      May 2022 - March 2024 · Brussels, Belgium
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                      Designed and implemented full architecture for large-scale application with multiple asynchronous
                      microservices. Led company's cloud infrastructure transition to AWS.
                    </p>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-4">
                      <li>• Standardized backend development unifying all microservices under FastAPI</li>
                      <li>• Led AWS migration including first deployment of production workloads</li>
                      <li>• Introduced CI/CD pipelines via GitHub Actions with security testing</li>
                      <li>• Built and scaled team from initial developers to nearly 10 engineers</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-full">
                        AWS
                      </span>
                      <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-full">
                        Microservices
                      </span>
                      <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-full">
                        Kubernetes
                      </span>
                    </div>
                  </div>

                  {/* Fibona Software */}
                  <div className="relative pl-8 border-l-2 border-green-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">CEO and Founder</h3>
                      <p className="text-green-600 dark:text-green-400 font-medium">Fibona Software</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-justify">
                      February 2017 - September 2021 · Buenos Aires, Argentina
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                      Co-founded and led a software development firm focused on delivering tailored web and desktop
                      solutions for mid-size to large clients. Managed growing engineering team and client
                      relationships.
                    </p>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-4">
                      <li>• Led team of 10+ developers across backend, frontend, and infrastructure</li>
                      <li>• Designed full-stack applications using PHP, Python, and JavaScript</li>
                      <li>• Deployed and managed all infrastructure on AWS</li>
                      <li>• Defined application security practices addressing OWASP threats</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                        Entrepreneurship
                      </span>
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                        Python
                      </span>
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                        PyQt
                      </span>
                    </div>
                  </div>

                  {/* Lucnos Software */}
                  <div className="relative pl-8 border-l-2 border-blue-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Senior Software Engineering Manager
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Lucnos Software Development</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-justify">
                      December 2012 - December 2016 · Junín, Argentina
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                      Led full-cycle software development projects focusing on delivery of robust web applications.
                      Designed software architecture for over 20 medium to large-scale applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                        Project Management
                      </span>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                        Architecture
                      </span>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                        MongoDB
                      </span>
                    </div>
                  </div>

                  {/* Technical Writer */}
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Professional Technical Writer</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">Freelance</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-justify">January 2004 - August 2010</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                      Technical writer for international magazines including Linux User, Linux Magazine, Newsforge.
                      Published articles in ACM.org and served as technical reviewer for O'Reilly's "Knoppix Hacks 2nd
                      Edition".
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
                        Technical Writing
                      </span>
                      <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
                        Linux
                      </span>
                      <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
                        Publications
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Education & Teaching */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Education & Teaching</h2>
                <div className="space-y-8">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Professor Computer Science & Data Structures
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 text-justify">UNNOBA · 2017 - 2023 · 6 years</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-justify">
                      Taught Computer Science fundamentals, Data Structures, and advanced algorithms to undergraduate
                      students. Developed curriculum and conducted research in algorithm optimization.
                    </p>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Leadership & Management</h3>
                    <ul className="space-y-2">
                      <li><span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Team Leadership</span> Building, mentoring, and scaling high-performing teams.</li>
                      <li><span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Technical Strategy</span> Defining and executing technology roadmaps.</li>
                      <li><span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Project Management</span> Agile, Kanban, delivery and execution.</li>
                      <li><span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Mentoring</span> Coaching engineers and fostering growth.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Cloud & DevOps</h3>
                    <ul className="space-y-2">
                      <li><span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mr-2">AWS & Cloud</span> Architecting and operating scalable cloud platforms.</li>
                      <li><span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Kubernetes</span> Orchestrating containers and microservices.</li>
                      <li><span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mr-2">CI/CD & Automation</span> GitHub Actions, pipelines, infrastructure as code.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Frontend</h3>
                    <ul className="space-y-2">
                      <li><span className="inline-block bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Next.js</span> Fullstack React framework for modern web apps.</li>
                      <li><span className="inline-block bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-medium mr-2">React</span> Component-based UI development, hooks, state management.</li>
                      <li><span className="inline-block bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-medium mr-2">TypeScript</span> Type-safe JavaScript for scalable frontend codebases.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Backend</h3>
                    <ul className="space-y-2">
                      <li><span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mr-2">FastAPI</span> High-performance Python APIs and microservices.</li>
                      <li><span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Flask</span> Lightweight Python web applications and APIs.</li>
                      <li><span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Node.js</span> JavaScript runtime for scalable backend services.</li>
                      <li><span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Rust</span> Safe, fast, and modern backend systems.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Security</h3>
                    <ul className="space-y-2">
                      <li><span className="inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Security</span> Secure software development, compliance, best practices.</li>
                      <li><span className="inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium mr-2">OWASP</span> Threat modelling, secure coding, vulnerability management.</li>
                      <li><span className="inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Cloud Security</span> IAM, encryption, network security in AWS and Kubernetes.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Other Strengths</h3>
                    <ul className="space-y-2">
                      <li><span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Technical Writing</span> Articles, documentation, knowledge sharing.</li>
                      <li><span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Teaching</span> University-level courses, mentoring, workshops.</li>
                      <li><span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium mr-2">Entrepreneurship</span> Startups, business development, innovation.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
