function AttractiveFooter() {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "1.2rem 2rem",
        backgroundColor: "#1a1a1a",
        color: "#aaa",
        textAlign: "center",
        fontSize: "0.9rem",
        borderTop: "1px solid #333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.4rem",
      }}
    >
      <span>© GymTracker 2026</span>
      <div>
        <a
          href="/privacy"
          style={{
            color: "#00d1b2",
            textDecoration: "none",
            margin: "0 0.5rem",
            fontSize: "0.9rem",
          }}
        >
          Privacy
        </a>
        <a
          href="/terms"
          style={{
            color: "#00d1b2",
            textDecoration: "none",
            margin: "0 0.5rem",
            fontSize: "0.9rem",
          }}
        >
          Terms
        </a>
        <a
          href="/contact"
          style={{
            color: "#00d1b2",
            textDecoration: "none",
            margin: "0 0.5rem",
            fontSize: "0.9rem",
          }}
        >
          Contact
        </a>
      </div>
    </footer>
  );
}

export default AttractiveFooter;
