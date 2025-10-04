import './App.css';

function Home() {
  return (
    <div className="page home-bg">
      <h1>Welcome to Off-Road Adventure</h1>
      <p style={{ fontWeight: "bold" }}>
        Discover the thrill of nature, trails, and untamed terrains.
      </p>
      <p>
        Whether it’s mountain trails, desert dunes, or muddy forests, our
        off-road adventures are designed to give you unforgettable experiences.
      </p>
       <img className="image1" src='/images/img1.jpg' alt='off road bike' />
      <img className="image2" src='/images/img2.jpg' alt='off road'/>
      <img className="image3" src='/images/img3.jpg' alt='off road'/>
    </div>
  );
}

export default Home;