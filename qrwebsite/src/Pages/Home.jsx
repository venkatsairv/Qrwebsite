import { useMemo } from "react";
import "./home.css";

export default function Home() {
  // Generate particles data ONCE using useMemo
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 20,
      animationDuration: 15 + Math.random() * 10
    }));
  }, []); // Empty dependency array = runs only once

  return (
    <div className="page">
      {/* Animated Background Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div 
            key={particle.id} 
            className="particle" 
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="header">
        <h2>QR Code.io</h2>
      </div>

      {/* Title */}
      <h1 className="title">
        Easily create a QR code for any occasion in seconds!
      </h1>

      {/* Main Container */}
      <div className="container">

        {/* LEFT SIDE */}
        <div className="left">

          {/* Input Box */}
          <div className="input-box">
            <label>Enter or paste URL</label>
            <input type="text" placeholder="https://website.com" />
            <button>Download QR Code</button>
          </div>

          {/* Divider */}
          <p className="divider">Or select another type of QR code</p>

          {/* QR Type Grid */}
          <div className="grid">
            <div className="card">PDF</div>
            <div className="card">List of Links</div>
            <div className="card">vCard</div>
            <div className="card">Business</div>
            <div className="card">Video</div>
            <div className="card">Images</div>
            <div className="card">Facebook</div>
            <div className="card">Instagram</div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <div className="preview-box">
            QR Preview
          </div>

          <button className="download-btn">
            Download QR Code
          </button>
        </div>

      </div>
    </div>
  );
}