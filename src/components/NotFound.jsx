import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #000;
        }

        .container {
          width: 100%;
          height: 88vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top, #141414 40%, #000 100%);
          font-family: 'Bebas Neue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Floating Netflix Red Glow */
        .glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(229,9,20,0.15), transparent 70%);
          animation: pulse 5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        /* Decorative Moving Stripes */
        .stripe {
          position: absolute;
          width: 200%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #e50914, transparent);
          opacity: 0.3;
          animation: slide 8s linear infinite;
        }

        .stripe:nth-child(1) { top: 25%; animation-delay: 0s; }
        .stripe:nth-child(2) { top: 50%; animation-delay: 2s; }
        .stripe:nth-child(3) { top: 75%; animation-delay: 4s; }

        @keyframes slide {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }

        /* Core Content */
        .content {
          position: relative;
          text-align: center;
          z-index: 10;
          color: #fff;
          padding: 2rem;
          width: 100%;
          max-width: 900px;
        }

        .logo {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          color: #e50914;
          letter-spacing: 0.08em;
          text-shadow: 0 0 30px rgba(229, 9, 20, 0.6);
          animation: glow 2.5s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 30px rgba(229, 9, 20, 0.4); }
          50% { text-shadow: 0 0 60px rgba(229, 9, 20, 0.8), 0 0 90px rgba(229, 9, 20, 0.5); }
        }

        .error-code {
          font-size: clamp(8rem, 25vw, 18rem);
          color: #e50914;
          letter-spacing: 0.1em;
          line-height: 1;
          text-shadow: 0 5px 25px rgba(229,9,20,0.4);
          margin: 1rem 0;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #fff;
          margin: 1.2rem 0;
        }

        .message {
          font-size: clamp(1.3rem, 2.2vw, 1.3rem);
          color: #b3b3b3;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .btn {
          display: inline-block;
          padding: 1rem 3rem;
          background: #e50914;
          color: #fff;
          font-size: 1.6rem;
          font-weight: 700;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
          text-decoration: none;
          letter-spacing: 0.05em;
        }

        .btn:hover {
          background: #f40612;
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(229,9,20,0.4);
        }

        .vignette {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.7) 100%);
          pointer-events: none;
          z-index: 5;
        }

        /* SVG Movie Reel */
        .film-svg {
          position: absolute;
          bottom: -10%;
          width: 120%;
          opacity: 0.05;
          transform: rotate(5deg);
          z-index: 1;
        }

        @media (max-width: 768px) {
          .content {
            padding: 1rem;
          }
          .btn {
            padding: 0.9rem 2.2rem;
          }
        }
      `}</style>

      {/* Background Animations */}
      <div className="glow"></div>
      <div className="stripe"></div>
      <div className="stripe"></div>
      <div className="stripe"></div>

      {/* SVG Film Reel Decoration */}
      <svg
        className="film-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#e50914"
          d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,58.7C960,53,1056,75,1152,90.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* Overlay vignette */}
      <div className="vignette"></div>

      {/* Content */}
      <div className="content">
        <div className="logo">NETFLIX</div>
        <h1 className="error-code">404</h1>
        <h2 className="title">Lost your way?</h2>
        <p className="message">
          Sorry, we can’t find that page. You’ll find loads to explore on the home page.
        </p>
        <button className="btn" onClick={() => (window.location.href = "/netflixHome")}>
          Netflix Home 🎬
        </button>
      </div>
    </div>
  );
};

export default NotFound;
