import styled from "styled-components";
import NavBar from "../../components/container/Navbar/Navbar";

export default function Header() {
    const Wrapper = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: red;

    `
    const Text = styled.p`
        font-size: 1rem;
        color: white;
        text-align: center;
        margin-bottom: 0;
        padding-top: 0.5vh;
    `

    return(
        <Wrapper>
            asdas
            {/* <Text>
                sadasd
            </Text> */}
        </Wrapper>
        
    )
}