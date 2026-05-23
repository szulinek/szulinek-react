import Hero from '../components/Hero.jsx';
import OpsTerminal from '../components/OpsTerminal.jsx';
import Services from '../components/Services.jsx';
import Technologies from '../components/Technologies.jsx';
import Skills from '../components/Skills.jsx';
import Process from '../components/Process.jsx';
import Packages from '../components/Packages.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <OpsTerminal />
      <Services compact />
      <Technologies compact />
      <Skills compact />
      <Process />
      <Packages />
    </>
  );
}
