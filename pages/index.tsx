import React from 'react';
import {GetStaticProps } from 'next';
import styled from 'styled-components';
import {FiGithub, FiArrowUpRight} from 'react-icons/fi';
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
  const res = await fetch('https://api.github.com/users/heverson/repos?sort=updated')
  const repositories = await res.json()
 
  return {
    props:{
      repositories,
      revalidate: 1
    }
  }
}

const Home : React.FC<Props> = ({repositories}) => {
  return (
    <>
      <Strip />
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
          <p>I'm brazilian 🇧🇷 and like web and mobile projects, with stacks <strong><i>ReactJS</i></strong>, <strong><i>React Native</i></strong> and <strong><i>NodeJS</i></strong> that is Full JavaScript, It’s these technologies that I’ve been working on for the past few years!</p>
          <p>I have a good journey with PHP programming, mainly working with the darling of <strong>Wordpress</strong></p>
          <p>
            <span>
              <a href="https://www.linkedin.com/in/heversondamasceno/" target="blank"><img alt="Linkedin - Heverson Damasceno" src="https://camo.githubusercontent.com/5a189abd87746872a77aaa7404a3748ad8585d5c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d2d2532334638393532443f7374796c653d736f6369616c266c6f676f3d6c696e6b6564696e"/></a>
            </span> &nbsp;
            <span>
               <a href="mailto:heversondamasceno@gmail.com" target="blank"><img alt="Email - Heverson Damasceno" src="https://camo.githubusercontent.com/0d6b8470c85771ff00c3d4449aac198c05e2e72a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f456d61696c2d2d2532334638393532443f7374796c653d736f6369616c266c6f676f3d676d61696c"/></a>
            </span>
          </p>
        </div>
      </section>  
      <section>
        <h2>github my repos <FiGithub /> </h2>
        <Cards>
          {repositories.map(repo =>(
            <div key={repo.id}>
              <h3><FiGithub />  {repo.name}</h3>
              <p>
              {repo.description}
              </p>
              <p>
              {repo.language && (<span>{repo.language}</span>)}
              </p>
              <p>
                <a title={`Visite o repositório ${repo.name}`} href={repo.html_url}>view<FiArrowUpRight /></a>
              </p>
            </div>
          ))}
        </Cards>
      </section>
      <footer>
        Powered by Me ⚡️
      </footer>  
    </Container>
    </>
  )
}



export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
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

export const Strip = styled.div`
    background: rgb(26, 232, 170);
    width: 100px;
    height:67%;
    opacity: 0.9;
    position: absolute;
    z-index: -10;
    transform: skew(-23deg) translateX(-200px);
    right: 0;
    top: 0;
    content: " ";
    &::before{
      background: rgb(26, 232, 170);
      width: 100px;
      height:100%;
      opacity: 0.6;
      position: absolute;
      z-index: -10;
      transform:  translateX(-150px);
      right: 0;
      top: 0;
      content: " ";
    }
    &::after{
      background: rgb(26, 232, 170);
      width: 100px;
      height:100%;
      opacity: 0.3;
      position: absolute;
      z-index: -10;
      transform: translateX(-50px);
      right: 0;
      top: 0;
      content: " ";
    }
`

export const Cards = styled.div`
  flex-direction: row;
  align-items: stretch;
  justify-content: start;
  flex-wrap: wrap;
  display: flex;
  & > div{
    width:100%;
    color: #303030;
    background: #fff;
    padding:10px;
    flex:1 1 auto;
    margin:5px; 
    align-items: inherit;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      width:45%;
    }
    @media (min-width: 980px) {
      width:32%;
    }
    
    h3{
      align-items: center;
      display: inline-flex;
      
      svg{
        margin-right: 10px;
      }
    }
    
    a{
      color: #FFF;
      background: #303030;
      padding: 2px 5px;
      border-radius: 5px;
      font-size: 14px;
      text-decoration: none;
      align-items: center;
      display: inline-flex;
    }
    
    span{
      background: #1AE8AA;
      padding:5px;
      font-size: 13px;
      border-radius: 4px;
    }
    
  }
  
`;

export default Home;