const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5"
              floodColor="#796dd4" />
          </filter>
        </defs>
        <circle className="spinner"
          // style="fill:transparent;stroke:#dd2476;stroke-width: 7px;stroke-linecap: round;filter:url(#shadow);"
          style={{ filter: "url(#shadow)" }}
          cx="50" cy="50" r="45" />
      </svg>
    </div>
  )
}

export default LoadingSpinner;
