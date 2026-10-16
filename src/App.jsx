import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import EventInfo from './components/EventInfo/EventInfo';
import Speakers from './components/Speakers/Speakers';
import Schedule from './components/Schedule/Schedule';
import Sponsors from './components/Sponsors/Sponsors';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer/Footer';

/**
 * Root application component — composes all sections in order.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <EventInfo />
        <Speakers />
        <Schedule />
        <Sponsors />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
