import styled from "styled-components";

export default function Header() {
    const Wrapper = styled.div`
        height: 5vh;
        background-color: #6F0000;
        position: fixed;
        z-index:1000;
        width: 100%;
        @media (max-width: 768px) {
            height: 4vh;
        }
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
            <Text>
                Hoy 50% de descuento
            </Text>
        </Wrapper>
        
    )
}