import LoadingScreen from '@/components/layout/LoadingScreen';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import PathSelector from '@/components/sections/PathSelector';
import Stats from '@/components/sections/Stats';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main>
        <Hero />
        <PathSelector />
        <Stats />
      </main>
    </>
  );
}
