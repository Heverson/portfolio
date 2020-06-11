import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from "axios";
import { Container, Header, Cards } from './styles';
type Props = {
  repositories: {
    id:number;
    name:string;
    description:string;
  }
}

const Home : React.FC<Props> = ({repositories}) => {
  return (
    <>
      <Head>
        <title>Heverson Damasceno - Fullstack Developer</title>
        <meta name="description" content="Meu portifólio de trabalhos na web, conheça os projetos que participei e acesse meus contatos." />
      </Head>
      <Container>
      <Header>
        <h1>Heverson Damasceno</h1>
      </Header>
      <section>
        <h2>my bio</h2>
        <div>
          <p>Hi 👋  , welcome to my portfolio, you're know my works!</p>
          <p>I like web and mobile projects, with stacks <strong><i>ReactJS</i></strong>, <strong><i>React Native</i></strong> and <strong><i>NodeJS</i></strong> that is Full JavaScript, It’s these technologies that I’ve been working on for the past few years!</p>
          <p>I have a good journey with PHP programming, mainly working with the darling of <strong>Wordpress</strong></p>
          <p>
            <Link href="https://www.linkedin.com/in/heversondamasceno/">
                <img alt="Linkedin - Heverson Damasceno" src="https://camo.githubusercontent.com/5a189abd87746872a77aaa7404a3748ad8585d5c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d2d2532334638393532443f7374796c653d736f6369616c266c6f676f3d6c696e6b6564696e" />
            </Link>
          </p>
        </div>
      </section>  
      <section>
        <h2>github my repos </h2>
        <Cards>
          {repositories && repositories.map(repo =>(
            <div key={repo.id}>
              <h3>{repo.name}</h3>
              <p>
               {repo.description}
              </p>
              {repo.language && (<span>{repo.language}</span>)}
            </div>
          ))}
        </Cards>
      </section>
      <footer>
        Powered by Me and with NextJS
      </footer>  
    </Container>
    </>
  )
}

Home.getInitialProps = async() =>{
  const response  = await axios.get(
    'https://api.github.com/users/heverson/repos?sort=updated'
  );
  
  return {repositories: response.data}  
}
export default Home;