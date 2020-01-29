import styled from 'styled-components';

export const Image = styled.img`
    width: 400px;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

export const Header = styled.div`
    width: 100%;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
`;
