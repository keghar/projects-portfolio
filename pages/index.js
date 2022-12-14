import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import About from '../components/About'
import Skills from "../components/Skills";
import Projects from "../components/Projects"
import Contact from '../components/Contact'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Kegan | Full Stack Dev</title>
        <meta name="description" content="I am a full-stack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
      
    </div>
  )
}
