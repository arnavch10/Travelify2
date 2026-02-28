import React from "react";
import styled from "styled-components";
import graphic1 from "@/components/Dashboard/graphic1.jpg";
import Navbar from "@/components/Dashboard/Navbar";
import Button from "@/components/LandingPage/Button";
const Hero = () => {
  return (
    <PageWrapper>

      <ContentWrapper>

        {/* Flex Row */}
        <FlexRow>
          <TextCard>
            <Heading>
              Finding new places to visit has never been easier.
            </Heading>

            <Subtext>
              Find out <strong>amazing</strong> places to visit in your city with our AI-powered recommendation system.
            </Subtext>
          </TextCard>

          {/* Graphic */}
          <GraphicWrapper>
            <GraphicImage src={graphic1.src} alt="Travel graphic" />
          </GraphicWrapper>
        </FlexRow>

        <Button />

      </ContentWrapper>

    </PageWrapper>
  );
};


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #ffffff;
`;

const ContentWrapper = styled.div`
  padding-top: 8rem;

  @media (min-width: 768px) {
    padding-top: 10rem;
  }

  @media (min-width: 1024px) {
    padding-top: 12rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const TextCard = styled.div`
  background-color: #e5e7eb;
  border-radius: 0.5rem;
  padding: 2.5rem;
  max-width: 42rem;
  margin-left: 4rem;

  @media (min-width: 768px) {
    padding: 3rem;
    margin-left: 8rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem;
    margin-left: 12rem;
  }
`;

const Heading = styled.h1`
  text-align: left;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Subtext = styled.p`
  margin-top: 1.25rem;
  font-size: 1.5rem;
  max-width: 24rem;
`;

const GraphicWrapper = styled.div`
  margin-right: 4rem;

  @media (min-width: 768px) {
    margin-right: 8rem;
  }

  @media (min-width: 1024px) {
    margin-right: 12rem;
  }
`;

const GraphicImage = styled.img`
  width: 32.5rem;
  max-width: none;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export default Hero;