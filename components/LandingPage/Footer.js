// import React, { useState, useRef } from 'react';
// import styled from 'styled-components';

// const Footer = () => {
//   const [count, setCount] = useState(0);
//   const numb = useRef(0);

//   function changeNum() {
//     setCount(count + 1);
//   }

//   function changeNumRef() {
//     numb.current++;
//   }

//   return (
//     <FooterSection>
//       <FooterContainer>
//         <LeftContainer>
//           © {new Date().getFullYear()} CMPSC 263
//         </LeftContainer>

//         <CenterContainer>
//           <FooterLink href="#">Privacy Policy</FooterLink>
//           <Separator>|</Separator>
//           <FooterLink href="#">Terms of Service</FooterLink>
//         </CenterContainer>

//         <RightContainer>
//           <SocialIcon href="#" aria-label="Facebook">FB</SocialIcon>
//           <SocialIcon href="#" aria-label="Twitter">TW</SocialIcon>
//           <SocialIcon href="#" aria-label="Instagram">IG</SocialIcon>
//         </RightContainer>
//       </FooterContainer>

//     </FooterSection>
//   );
// };


// // ---------------- STYLED COMPONENTS ---------------- //

// const FooterSection = styled.footer`
//   width: 100%;
//   background: #0a2540; 
//   padding: 1.5rem 0;
//   color: #ffffff;
//   margin-top: 4rem;
// `;

// const FooterContainer = styled.div`
//   max-width: 1100px;
//   margin: auto;
//   padding: 0 1rem;

//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media(max-width: 768px) {
//     flex-direction: column;
//     gap: 1rem;
//   }
// `;

// const LeftContainer = styled.div`
//   font-size: 0.9rem;
// `;

// const CenterContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.6rem;
// `;

// const Separator = styled.span`
//   opacity: 0.5;
// `;

// const RightContainer = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

// const FooterLink = styled.a`
//   color: #d0d4db;
//   text-decoration: none;
//   font-size: 0.9rem;

//   &:hover {
//     color: #4f80ff;
//   }
// `;

// const SocialIcon = styled.a`
//   color: #fff;
//   font-size: 1.2rem;
//   text-decoration: none;

//   &:hover {
//     color: #4f80ff;
//   }
// `;

// export default Footer;


import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LeftContainer>
          © {new Date().getFullYear()} Travelify
        </LeftContainer>

        <CenterContainer>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <Separator>|</Separator>
          <FooterLink href="#">Terms of Service</FooterLink>
        </CenterContainer>

        <RightContainer>
          <SocialIcon href="#" aria-label="Facebook">FB</SocialIcon>
          <SocialIcon href="#" aria-label="Twitter">TW</SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">IG</SocialIcon>
        </RightContainer>
      </FooterContainer>
    </FooterSection>
  );
};

// ---------------- STYLED COMPONENTS ---------------- //

const FooterSection = styled.footer`
  width: 100%;
  background-color: #e5e7eb;
  border-top: 1px solid #d1d5db;
  padding: 1.5rem 0;
  color: #374151;
`;

const FooterContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LeftContainer = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #374151;
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const Separator = styled.span`
  opacity: 0.4;
  color: #374151;
`;

const RightContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.15s ease;

  &:hover {
    color: #93c5fd;
  }
`;

const SocialIcon = styled.a`
  color: #6b7280;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: #93c5fd;
  }
`;

export default Footer;