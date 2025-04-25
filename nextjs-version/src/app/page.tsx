import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Facilities from '@/components/Facilities'
import Hero from '@/components/Hero'
import Review from '@/components/Review'
import Trainers from '@/components/Trainers'
import Trainings from '@/components/Trainings'
import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Facilities />
      <Welcome />
      <Trainings />
      <Trainers />
      <Review />
      <Footer />
    </>
  );
}
