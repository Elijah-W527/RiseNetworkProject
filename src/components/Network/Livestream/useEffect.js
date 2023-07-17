useEffect(() => {
  const script = document.createElement('script');

  script.src = "livestream_no_zoom.js";
  script.async = true;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  }
}, []);
