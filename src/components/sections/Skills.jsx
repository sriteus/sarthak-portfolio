import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 12px;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 56px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  background: #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 40px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid rgba(1, 138, 242, 0.5); /* Set a transparent solid border */
  border-radius: 24px;
  padding: 28px 36px;
  box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 20px 28px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    border-radius: 4px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  // background: rgba(255, 255, 255, 0.08);
  border: 3px solid #fff2;
  border-radius: 8px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  filter: brightness(0.95);
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index_x) => (
                  <SkillItem key={`skill-item-${index_x}`}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
