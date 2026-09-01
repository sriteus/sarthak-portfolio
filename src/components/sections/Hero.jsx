import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import HeroImg from "../../images/HeroImage.jpg";

import { Instagram, Facebook, Github, Linkedin } from "lucide-react";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  position: relative;
  width: 100%;

  /* Keep icons horizontal on mobile, but allow wrapping if needed */
  @media (max-width: 640px) {
    flex-wrap: wrap; /* Allow wrapping of items if they don't fit in a row */
    gap: 16px; /* Adjust gap if necessary */
    margin-bottom: 24px;
    justify-content: center; /* Center the icons if they wrap */
  }
`;

const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primary + "20"};
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.primary};

  &:hover {
    transform: scale(1.2);
    background: ${({ theme }) => theme.primary + "40"};
  }

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
  }
`;

const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 640px) {
    width: 90px;
    height: 90px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 800px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  text-align: center;

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

const RoleText = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  justify-content: center;

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 30px;
  }
`;

const AnimatedText = styled.span`
  color: ${({ theme }) => theme.primary};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: translateY(${(props) => (props.visible ? "0" : "20px")});
  transition: all 0.5s ease;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  text-align: center;
  max-width: 650px;

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 24px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  display: inline-block; /* Make it an inline block to respect min-width */
  width: 150px;
  min-width: 150px; /* Prevent shrinking */
  padding: 10px 0;
  background: #018afc;
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 25px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  text-align: center;
  box-sizing: border-box; /* Include padding in total width */
  white-space: nowrap; /* Prevent text from wrapping inside the button */

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    width: 130px;
    min-width: 130px; /* Maintain minimum width on mobile */
    font-size: 14px;
    padding: 8px 0;
    margin-top: 16px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.primary};
`;

const AnimatedRole = ({ roles }) => {
  const [currentRole, setCurrentRole] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return <AnimatedText visible={visible}>{roles[currentRole]}</AnimatedText>;
};

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <ImageSection>
              <SocialIcon href={Bio.insta} target="_blank">
                <Instagram size={24} />
              </SocialIcon>
              <SocialIcon href={Bio.facebook} target="_blank">
                <Facebook size={24} />
              </SocialIcon>

              <ImageContainer>
                <motion.div {...headContentAnimation}>
                  <Tilt>
                    <Img src={HeroImg} alt="Hero Image" />
                  </Tilt>
                </motion.div>
              </ImageContainer>

              <SocialIcon href={Bio.github} target="_blank">
                <Github size={24} />
              </SocialIcon>
              <SocialIcon href={Bio.linkedin} target="_blank">
                <Linkedin size={24} />
              </SocialIcon>
            </ImageSection>

            <ContentContainer>
              <motion.div {...headTextAnimation}>
                <Title>{Bio.name}</Title>
                <RoleText>
                  <AnimatedRole roles={Bio.roles} />
                </RoleText>
              </motion.div>

              {/* Place buttons below image for mobile only */}
              <div className="buttons-container">
                <ResumeButton
                  href={Bio.resume}
                  target="_blank"
                  style={{ margin: "10px" }}
                >
                  Resume
                </ResumeButton>
                <ResumeButton href={Bio.github} target="_blank">
                  Github
                </ResumeButton>
              </div>
              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
            </ContentContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
