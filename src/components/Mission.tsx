import Container from "./Container";

export default function Mission() {
  return (
    <section
      id="mission"
      className="bg-tertiary w-full py-12 text-white md:py-24 lg:py-32"
    >
      <Container>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Nossa Missão
              </h2>
              <p className="mx-auto max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Através de experiências imersivas e autênticas, revelamos
                curiosidades, contamos histórias com pessoas reais e nos
                desafiamos a vivenciar na prática os mais inusitados aspectos
                dessas realidades. É uma jornada de descoberta coletiva, onde
                cada imersão nos aproxima da verdadeira essência do Espírito
                Santo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
