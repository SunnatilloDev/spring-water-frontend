import React from "react";
import { useTranslation } from "react-i18next";

// Import video files
import video1 from "../../assets/imgs/IMG_7040-Czn9OlZc.mp4";
import video2 from "../../assets/imgs/IMG_6976-xkSezMbL.mp4";
import video3 from "../../assets/imgs/IMG_7828-DPWcEs5J.mp4";

const VideoCards = () => {
  const { t } = useTranslation();

  // Video sources with actual files
  const videos = [
    {
      id: 1,
      source: video1,
    },
    {
      id: 2,
      source: video3,
    },
    {
      id: 3,
      source: video2,
    },
  ];

  return (
    <section className="video-cards">
      <div className="container">
        <div className="video-cards__title">
          <h2>{t("deliveryTitle") || "Bizda yetkazib berish bepul!"}</h2>
        </div>
        <div className="video-cards__container">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-card__wrapper">
                <video
                  className="video-card__video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={video.source} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCards;
