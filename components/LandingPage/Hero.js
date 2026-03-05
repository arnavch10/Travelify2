/*
This is the Hero component for the landing page.

The component includes a header, a slogan, and graphic.

The component also includes a button component that takes the user to the dashboard 
if they are logged in by utilizing the StateContext functionality.
*/

import React from "react";
import styled from "styled-components";
import travel from "@/components/Dashboard/travelgraphic.jpg";
import Button from "@/components/LandingPage/Button";
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
const Hero = () => {
  return (
    <Container>

      <ContentWrapper>

        <FlexRow>
          <TextCard>
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
  gap: 3rem;
`;

const TextCard = styled.div`
  background-color: #e5e7eb;
  border-radius: 0.5rem;
  padding: 4rem;
  max-width: 42rem;
  margin-left: 12rem;
`;

const Header = styled.h1`
  text-align: left;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Slogan = styled.p`
  margin-top: 1.25rem;
  font-size: 1.5rem;
  max-width: 24rem;
`;

const GraphicWrapper = styled.div`
  margin-right: 4rem;
  display: flex;
  margin-right: 4rem;
`;

const GraphicImage = styled.img`
  width: 32.5rem;
  max-width: none;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(149, 112, 112, 0.1), 0 4px 6px -2px rgba(194, 57, 57, 0.05);
`;

export default Hero;