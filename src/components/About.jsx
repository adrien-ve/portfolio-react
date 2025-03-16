export default function About() {
  const mainText = "Howdy ! I'm Adrien.";
  const subText = "I'm a web developer based in France.";
  const description =
    "I'm passionate about web development and learning new technologies, testing new things, or simply reading in my free time.";

  return (
    <>
      <h1 className="text-4xl">{mainText}</h1>
      <h2 className="text-2xl">{subText}</h2>
    </>
  );
}
