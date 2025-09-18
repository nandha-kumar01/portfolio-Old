import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'
import Education from './Education'

export default function MainContent() {
  return (
    <main
      className="lg:w-2/3 space-y-12 h-screen overflow-y-auto p-6 custom-scroll rounded-xl"
      style={{backgroundColor:"#343152" }}
    >
      <Skills />
      <Projects />
      <Experience />
      <Education/>
      <Contact />
    </main>
  )
}
