import styled from 'styled-components';
import device from '../../styles/device';

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }

    @media ${device.fromTablet} {
        width: 270px;
    }
`;

export const Header = styled.div`
    width: 100%;
    color: #fff;
    font-size: 25px;
    line-height: 20px;
`;
