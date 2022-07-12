import "./Hero.scss";
import React from 'react'

const Hero = (hero) => {
  return (
    <section className='Hero'>
      <div className='Hero__info'>
        <h2>
          {hero.name} {hero.surnames}
        </h2>
        <p>{hero.city}</p>
        <p>{hero.birthDate}</p>
        <p>{hero.phone}</p>
        <p>
          <a href={"mailito:" + hero.email}>rasahernan@hotmail.com</a>
        </p>
        <p>
          <a href={hero.gitHub}>GitHub</a>
        </p>
        <p>
          <a href={hero.linkedin}>Linkedin</a>
        </p>
      </div>
    </section>
  );
  
}

export default Hero;

// function Hero({ hero }) {
//   return (
//     <section className='Hero'>
//       <div className='Hero__info'>
//         <h2>
//           {hero.name} {hero.surnames}
//         </h2>
//         <p>{hero.city}</p>
//         <p>{hero.birthDate}</p>
//         <p>{hero.phone}</p>
//         <p>
//           <a href={"mailito:" + hero.email}>rasahernan@hotmail.com</a>
//         </p>
//         <p>
//           <a href={hero.gitHub}>GitHub</a>
//         </p>
//         <p>
//           <a href={hero.linkedin}>Linkedin</a>
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Hero;
