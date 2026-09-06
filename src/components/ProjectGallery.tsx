import {
  ChevronLeft,
  ChevronRight,
  X,
  ImageOff,
} from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectGalleryProps {
  projectTitle: string;
  screenshots: string[];
  onClose: () => void;
}

function ProjectGallery({
  projectTitle,
  screenshots,
  onClose,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasScreenshots = screenshots.length > 0;

  const nextImage = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === screenshots.length - 1
        ? 0
        : previousIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? screenshots.length - 1
        : previousIndex - 1
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [screenshots]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (hasScreenshots && event.key === "ArrowRight") {
        nextImage();
      }

      if (hasScreenshots && event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasScreenshots, onClose, screenshots.length]);

  return (
    <div
      className="gallery-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="gallery-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${projectTitle} screenshot gallery`}
      >
        {/* HEADER */}
        <div className="gallery-header">
          <div>
            <p className="gallery-label">
              PROJECT GALLERY
            </p>

            <h2>{projectTitle}</h2>
          </div>

          <button
            className="gallery-close"
            onClick={onClose}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>
        </div>

        {!hasScreenshots ? (
          /* EMPTY STATE */
          <div className="gallery-empty">
            <ImageOff size={50} />

            <h3>Project Screenshots Coming Soon</h3>

            <p>
              This project is currently being developed.
              Screenshots will be added as major features
              are completed.
            </p>
          </div>
        ) : (
          <>
            {/* MAIN IMAGE */}
            <div className="gallery-main">
              <img
                key={screenshots[currentIndex]}
                src={screenshots[currentIndex]}
                alt={`${projectTitle} screenshot ${
                  currentIndex + 1
                }`}
              />

              {screenshots.length > 1 && (
                <>
                  <button
                    className="gallery-arrow gallery-left"
                    onClick={previousImage}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={28} />
                  </button>

                  <button
                    className="gallery-arrow gallery-right"
                    onClick={nextImage}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
            </div>

            {/* IMAGE COUNTER */}
            <div className="gallery-footer">
              <p className="gallery-counter">
                Screenshot {currentIndex + 1} of{" "}
                {screenshots.length}
              </p>
            </div>

            {/* THUMBNAILS */}
            {screenshots.length > 1 && (
              <div className="gallery-thumbnails">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={`${screenshot}-${index}`}
                    className={
                      currentIndex === index
                        ? "gallery-thumbnail active-thumbnail"
                        : "gallery-thumbnail"
                    }
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`View screenshot ${
                      index + 1
                    }`}
                  >
                    <img
                      src={screenshot}
                      alt={`${projectTitle} thumbnail ${
                        index + 1
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectGallery;