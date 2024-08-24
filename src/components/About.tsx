const About: React.FC = () => {
  return (
    <div className='bg-primary pt-24 pb-52 text-center md:h-screen md:py-36'>
      <h2
        className='mx-auto text-2xl font-extrabold text-white md:text-3xl'
        // style={{ fontFamily: 'font-family: &quot;eurostile&quot;, sans-serif;' }}
      >
        Hi, I’m Shivam. Nice to meet you.
      </h2>
      <p
        className='mx-[6%] pt-7 text-lg font-semibold text-white md:mx-auto md:whitespace-pre-line md:text-xl font-europa'
      >
        {`With over 7 years of experience in software development, I’ve built and optimized digital products for various industries,
         I’m always curious, constantly learning, and dedicated to honing my skills with every new project.
          Collaborating with teams to create solutions that are both functional and user-friendly.`}
      </p>
    </div>
  );
};

export default About;
