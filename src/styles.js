import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("https://static.vecteezy.com/system/resources/previews/006/126/691/original/abstract-landscape-posters-modern-background-flat-design-contemporary-boho-mountains-minimalist-wall-decor-vector.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Content = styled.div`
    background-color: #a99f93;
    width: 50%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

