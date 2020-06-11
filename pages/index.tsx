import React, {useCallback} from 'react';
import {GetStaticPaths, GetStaticProps } from 'next';

import Link from 'next/link';
import Head from 'next/head';

import axios from "axios";

type Props = {
  repositories: {
    id:number;
    name:string;
    description:string;
  }
}| any;

export const getStaticProps: GetStaticProps = async({params}) => {
  const response  = await axios.get(
    'https://api.github.com/users/heverson/repos?sort=updated'
  );
 
  return {
    props:{
      repositories: response.data
    }
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
            <span>
            <Link href="https://www.linkedin.com/in/heversondamasceno/">
                <img alt="Linkedin - Heverson Damasceno" src="https://camo.githubusercontent.com/5a189abd87746872a77aaa7404a3748ad8585d5c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d2d2532334638393532443f7374796c653d736f6369616c266c6f676f3d6c696e6b6564696e" />
            </Link>
            </span> &nbsp;
            <span>
            <Link href="mailto:heversondamasceno@gmail.com">
                <img alt="Email - Heverson Damasceno" src="https://camo.githubusercontent.com/0d6b8470c85771ff00c3d4449aac198c05e2e72a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f456d61696c2d2d2532334638393532443f7374796c653d736f6369616c266c6f676f3d676d61696c"/>
            </Link>
            </span>
          </p>
        </div>
      </section>  
      <section>
        <h2>github my repos </h2>
        <Cards>
          {repositories.map(repo =>(
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

import styled from 'styled-components';

export const Container = styled.div`
section{
  & > h2{
    color: #1AE8AA;
  }
}  
footer{
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}
`;
export const Header = styled.header`
  flex:1;
  justify-content: space-between;
  flex-direction: row;
  img{
    max-width: 200px;
  }
  h1{
    font-weight: 'bold';
    font-size: 50px;
  }
`;

export const Cards = styled.div`
  flex-direction: row;
  align-items: stretch;
  justify-content: start;
  flex-wrap: wrap;
  display: flex;
  & > div{
    color: #303030;
    background: #fff;
    max-width:310px;
    width:100%;
    padding:10px;
    margin:10px;
    align-items: inherit;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    span{
      background: #1AE8AA;
      padding:5px;
      font-size: 14px;
      border-radius: 4px;
      display: flex;
    }
  }
  
`;

export default Home;