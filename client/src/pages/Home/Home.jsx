import styled from "styled-components";
import image from "./image/pexels-photo-7153908.png"
import Searcher from "../../components/pure/searcher/Searcher";
import Button from 'react-bootstrap/Button';


export default function Home() {
    const Wrapper = styled.div`
        background-image: url(${image});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 75%;
        height: 86vh;
        @media (max-width: 768px) {
            background-position: bottom;
        }
    `
    const Detail = styled.div`
        padding-top: 25vh;
        padding-left: 5vw;
        width: 35vw;
        @media (max-width: 768px) {
            padding-top: 10vh;
            width: 70vw;
            font-weight: 100;
            font-size: 1.2rem;
            line-height: normal;
        }
    `
    const Button = styled.button`
        width: 15vw;
        height: 8vh;
        color: #6F0000;
        border-style: solid;
        border-color: #6F0000;
        border-radius: 0;
        border-width: 1px;
        background-color: transparent;
        @media (max-width: 768px) {
            display: none;
        }
    `
    const SecondBlock = styled.div`
        height: 100vh;
        background-color: #F2F2F2;
    `
    const Title = styled.h2`
        text-align: center;
        padding: 5vh 0 5vh 0;
    `
    const ResponsiveSearcher = styled.div`
        display: none;
        @media (max-width: 768px) {
            display: flex;
            background-color: rgba(242, 242, 242, 0.5);
            padding: 5px 0 5px 25vw;
        }
    `

    return(
        <div> 
            <Wrapper>
                <ResponsiveSearcher>
                    <Searcher/>
                </ResponsiveSearcher>
                <Detail>
                    <h1><b>Algo</b></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident neque, eaque numquam minima nesciunt vero doloribus dolores ipsam esse? Esse error magnam accusamus laudantium assumenda beatae est in quia nemo!</p>
                    <Button >Ver productos</Button>
                </Detail>
            </Wrapper>
            <SecondBlock>
                <Title>
                    Más vendido
                </Title>
            </SecondBlock>
        </div>
       
    )
}