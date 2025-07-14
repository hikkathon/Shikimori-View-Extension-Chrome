import './index.css'

type PropsVideo = {
  videoId: number,
  hash: string,
}

export default function KodikPlayer({videoId, hash}: PropsVideo) {
  const src = `https://kodik.info/serial/${videoId}/${hash}/720p`;
  return (
    <div className="player-container">
      <iframe
        src={src}
        frameBorder="0"
        allowFullScreen
        className="kodik-iframe"
      />
    </div>
  )
}
