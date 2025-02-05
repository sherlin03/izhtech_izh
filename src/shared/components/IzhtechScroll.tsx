import ParallaxText from "../animation/paralax";



export default function IzhtechScroll() {
  return (
    <section className="py-16">


<ParallaxText baseVelocity={-1} className="font-bold text-8xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">Izhtech</ParallaxText>
<ParallaxText baseVelocity={1} className="text-xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">Innovation Ahead</ParallaxText>
  
    </section>

  );
}