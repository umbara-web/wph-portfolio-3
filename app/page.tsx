import Navbar from './Home/partials/navbar';
import HeroSection from './Home/partials/hero-section';
import ImpactStatistics from './Home/partials/impact-statistic';
import Experience from './Home/partials/experience';
import QualityResults from './Home/partials/quality-results';
import BuildExperiance from './Home/partials/build-experience';
import Project from './Home/partials/projects';
import Projects from './Home/partials/projects';
import Trusted from './Home/partials/trusted';
import FAQ from './Home/partials/faq';
import ContactForm from './Home/partials/contact-form';
import Footer from './Home/partials/footer';
// import HeroSection from '../components/hero-section';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ImpactStatistics />
      <Experience />
      <QualityResults />
      <BuildExperiance />
      <Projects />
      <Trusted />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
