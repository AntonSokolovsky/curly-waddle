import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  margin: 16px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 500px) {
    max-width: 100%;
    margin: 16px 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media (max-width: 500px) {
    height: 250px;
  }
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const InfoContainer = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #333;
`;

export const Origin = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #666;
`;

export const PriceCard = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
`;
