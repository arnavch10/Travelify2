import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import travel from "@/components/Dashboard/travelgraphic.jpg";
import Button from "@/components/LandingPage/Button";
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
const Hero = () => {
  return (
    <Container>
=======
import graphic1 from "@/components/Dashboard/graphic1.jpg";
import Navbar from "@/components/Dashboard/Navbar";
import Button from "@/components/LandingPage/Button";
const Hero = () => {
  return (
    <PageWrapper>
>>>>>>> 0e76531abd0b228ee570b4d2d2634a89fe2c7dd9

      <ContentWrapper>

        <FlexRow>
          <TextCard>
<<<<<<< HEAD
            <Header>
              Finding new places to visit has never been easier.
            </Header>

            <Slogan>
              Find out <strong>amazing</strong> places to visit in your city with our AI-powered recommendation system.
            </Slogan>
          </TextCard>

           
          <GraphicWrapper>
            <GraphicImage src={travel.src} alt="Travel graphic" />
          </GraphicWrapper>
        </FlexRow>

        {/* Main button - takes user to dashboard if logged in */}
=======
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

>>>>>>> 0e76531abd0b228ee570b4d2d2634a89fe2c7dd9
        <Button />

      </ContentWrapper>

<<<<<<< HEAD
    </Container>
=======
    </PageWrapper>
>>>>>>> 0e76531abd0b228ee570b4d2d2634a89fe2c7dd9
  );
};


<<<<<<< HEAD
const Container = styled.div`
=======
const PageWrapper = styled.div`
>>>>>>> 0e76531abd0b228ee570b4d2d2634a89fe2c7dd9
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

<<<<<<< HEAD
const ContentWrapper = styled.div`
  padding-top: 12rem;
=======

const ContentWrapper = styled.div`
  padding-top: 8rem;

  @media (min-width: 768px) {
    padding-top: 10rem;
  }

  @media (min-width: 1024px) {
    padding-top: 12rem;
  }
>>>>>>> 0e76531abd0b228ee570b4d2d2634a89fe2c7dd9
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const TextCard = styled.div`
  background-color: #e5e7eb;
  border-radius: 0.5rem;
<<<<<<< HEAD
  padding: 4rem;
  max-width: 42rem;
  margin-left: 12rem;
`;

const Header = styled.h1`
=======
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
>>>>>>> 0e76531abd0b228ee570b4d2d2634a89fe2c7dd9
  text-align: left;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
`;

<<<<<<< HEAD
const Slogan = styled.p`
=======
const Subtext = styled.p`
>>>>>>> 0e76531abd0b228ee570b4d2d2634a89fe2c7dd9
  margin-top: 1.25rem;
  font-size: 1.5rem;
  max-width: 24rem;
`;

const GraphicWrapper = styled.div`
  margin-right: 4rem;
<<<<<<< HEAD
  display: flex;
  margin-right: 4rem;
=======

  @media (min-width: 768px) {
    margin-right: 8rem;
  }

  @media (min-width: 1024px) {
    margin-right: 12rem;
  }
>>>>>>> 0e76531abd0b228ee570b4d2d2634a89fe2c7dd9
`;

const GraphicImage = styled.img`
  width: 32.5rem;
  max-width: none;
  object-fit: cover;
  border-radius: 0.5rem;
<<<<<<< HEAD
  box-shadow: 0 10px 15px -3px rgba(149, 112, 112, 0.1), 0 4px 6px -2px rgba(194, 57, 57, 0.05);
=======
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
>>>>>>> 0e76531abd0b228ee570b4d2d2634a89fe2c7dd9
`;

export default Hero;