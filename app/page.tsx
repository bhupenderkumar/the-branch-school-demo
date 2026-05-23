export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Empowering Minds in Houston's Heart</h1>
        <p>The Branch School is a private school in Houston, TX, dedicated to fostering a love of learning in its students. Our experienced faculty and staff provide a supportive environment that encourages academic excellence, creativity, and personal growth.</p>
        <a href="/download" className="cta-btn" style={{ padding: '14px 32px', fontSize: '18px' }}>
          Get the Parent App
        </a>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>📱 Parent App</h3>
          <p>Stay connected with real-time updates on homework, attendance, and school events.</p>
        </div>
        <div className="feature-card">
          <h3>📝 Homework Tracker</h3>
          <p>Never miss an assignment. Parents see homework posted by teachers instantly.</p>
        </div>
        <div className="feature-card">
          <h3>💳 Fee Payment</h3>
          <p>Pay school fees online securely. No more checks or cash.</p>
        </div>
        <div className="feature-card">
          <h3>📊 Attendance</h3>
          <p>Real-time attendance tracking with instant notifications to parents.</p>
        </div>
      </section>
      <section className="section"><blockquote>"The Branch School has been a game-changer for our family - the small class sizes and individualized attention have really helped our child thrive."<cite>— Sarah Thompson</cite></blockquote></section>
    </>
  );
}
