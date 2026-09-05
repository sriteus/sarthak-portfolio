import React, { useState } from "react";
import styled from "styled-components";
import { FaPlay, FaStar } from "react-icons/fa";

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
  border: ${({ $starred }) =>
    $starred ? "2px solid #FFD700" : "1px solid #fff7"};
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  position: relative;
  box-shadow: ${({ $starred }) =>
    $starred ? "0 0 20px rgba(255, 215, 0, 0.3)" : "none"};
`;

const StarBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.5);
  z-index: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Video = styled.video`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const MediaFrame = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
`;
const PlayIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  pointer-events: none;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Tag = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;

const ProjectCard = ({ project, setOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePreviewTime = (event) => {
    if (event.currentTarget.currentTime >= 3) {
      event.currentTarget.pause();
    }
  };

  const resetPreview = (event) => {
    event.currentTarget.pause();
    event.currentTarget.currentTime = 0;
  };

  return (
    <Card
      onClick={() => setOpenModal({ state: true, project: project })}
      $starred={project.starred}
    >
      {project.starred && (
        <StarBadge>
          <FaStar color="#fff" size={16} />
        </StarBadge>
      )}
      {project.video ? (
        <MediaFrame
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={(event) => {
            setIsHovered(false);
            const video = event.currentTarget.querySelector("video");
            if (video) resetPreview({ currentTarget: video });
          }}
        >
          {isHovered ? (
            <Video
              src={project.video}
              muted
              playsInline
              autoPlay
              preload="metadata"
              onTimeUpdate={handlePreviewTime}
            />
          ) : (
            <>
              <Image src={project.image} alt={project.title} />
              <PlayIndicator aria-label="Video available">
                <FaPlay size={18} />
              </PlayIndicator>
            </>
          )}
        </MediaFrame>
      ) : (
        <Image src={project.image} alt={project.title} />
      )}
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar src={member.img} />
        ))}
      </Members>
    </Card>
  );
};

export default ProjectCard;
