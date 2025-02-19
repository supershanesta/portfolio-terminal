import { ProjectsWrapper } from '../Projects/ProjectsWrapper';
import { SkillsWrapper } from '../Skills/SkillsWrapper';
import ContactComponent from '../ContactComponent/ContactComponent';
import { Section } from '../Section/Section';
import About from '../About/About';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      <Section delay={0.2}>
        <ContactComponent />
      </Section>
      <Section title="About Me" delay={0.1}>
        <About />
      </Section>

      <Section title="Technical Skills" delay={0.3}>
        <SkillsWrapper />
      </Section>
      <Section title="Work / Projects" delay={0.4}>
        <ProjectsWrapper />
      </Section>
    </div>
  );
};
