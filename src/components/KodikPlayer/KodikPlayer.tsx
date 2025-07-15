import './index.css'

export default function KodikPlayer({kodikLink}: { kodikLink: string }) {
  const src = `https:${kodikLink}`;

  return (
    <div className="player-container">
      <iframe
        src={src}
        frameBorder="0"
        allowFullScreen
        className="kodik-iframe"
      />
    </div>
  );
}