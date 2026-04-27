import React from "react";
import styled from "styled-components";
import Button from "@/components/LandingPage/Button";

const Hero = () => {
  return (
    <Container>
      <ContentWrapper>
        <FlexRow>
          <TextCard>
            <Header>
              Own, Trade, and Create Your Own Digital Trading Cards.
            </Header>

            <Slogan>
              Mint unique fantasy cards, build your collection, and trade securely using blockchain technology.
            </Slogan>
          </TextCard>

          <GraphicWrapper>
            <GraphicBox>
              {/* Placeholder graphic */}
              🎴
            </GraphicBox>
          </GraphicWrapper>
        </FlexRow>

        {/* Connect wallet / navigate */}
        <Button />
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-top: 12rem;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`;

const TextCard = styled.div`
  background-color: #1f2937;
  color: white;
  border-radius: 0.75rem;
  padding: 4rem;
  max-width: 42rem;
  margin-left: 10rem;
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Slogan = styled.p`
  margin-top: 1.25rem;
  font-size: 1.5rem;
`;

const GraphicWrapper = styled.div`
  margin-right: 6rem;
`;

const GraphicBox = styled.div`
  width: 320px;
  height: 420px;
  background: linear-gradient(135deg, #3b82f6, #9333ea);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
`;

export default Hero;