import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiRequest, withAuth } from "../lib/api";
import "./home.css";

export default function Home() {
  const { token, user } = useAuth();
  const [savedCodes, setSavedCodes] = useState([]);
  const [error, setError] = useState("");
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 20,
      animationDuration: 15 + Math.random() * 10,
    }))
  );

  useEffect(() => {
    if (!token) {
      return;
    }

    apiRequest("/api/qr/my", {
      headers: withAuth(token),
    })
      .then((data) => {
        setSavedCodes(data);
      })
      .catch((requestError) => {
        setError(requestError.message);
      });
  }, [token]);

  return (
    <div className="dashboard-page">
      <div className="dashboard-particles">
        {particles.map((particle) => (
          <div 
            key={particle.id} 
            className="dashboard-particle" 
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      <div className="dashboard-header">
        <h2>EtherQR Dashboard</h2>
      </div>

      <h1 className="dashboard-title">
        Welcome back, {user?.email}. Your saved QR links are ready.
      </h1>

      <div className="dashboard-container">
        <div className="dashboard-left">
          <div className="dashboard-input-box">
            <label>Account Summary</label>
            <input type="text" readOnly value={user?.email ?? ""} />
            <Link className="dashboard-link-button" to="/qr-generator">
              Create a New QR Code
            </Link>
          </div>

          <p className="dashboard-divider">Saved QR Links</p>

          <div className="dashboard-grid">
            {savedCodes.length > 0 ? (
              savedCodes.slice(0, 8).map((code) => (
                <a key={code.id} className="dashboard-card" href={code.redirectUrl} target="_blank" rel="noreferrer">
                  {code.shortCode}
                </a>
              ))
            ) : (
              <>
                <div className="dashboard-card">No saved links yet</div>
                <div className="dashboard-card">Create your first QR</div>
              </>
            )}
          </div>
        </div>

        <div className="dashboard-right">
          <div className="dashboard-preview-box">
            <strong>{savedCodes.length}</strong>
            <br />
            saved QR codes
            <br />
            <br />
            {error ? error : "Generate from the QR page, then come back here for quick access."}
          </div>

          <Link className="dashboard-download-btn" to="/qr-generator">
            Open Generator
          </Link>
        </div>
      </div>
    </div>
  );
}
