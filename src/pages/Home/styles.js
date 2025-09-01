
import styled from "styled-components";

export const Container = styled.div`
    h1{
    text-align: center; 
    margin: 4rem 0;
    }
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

    
`

export const Movie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    img{
    width: 250px;
    border-radius: 1rem;

    }

    span{
    font-wheight: bold;
    font-size: 150%;
    margin-top: 1rem;
    text-align: center; 
    }

    a:hover{
    transform: scale(1.1);
    transition: all 0.3s;
    }
`
