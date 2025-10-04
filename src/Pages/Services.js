import './App.css';

function Services() {
  return (
    <div className="page services-bg">
      <h1>Our Adventure Services</h1>
      <ul>
        <li>🚙 4x4 Jeep Safaris – Conquer rugged landscapes</li>
        <li>🏍️ Dirt Bike Trails – For speed lovers</li>
        <li>⛺ Camping & Trekking – Sleep under the stars</li>
        <li>🌄 Guided Expeditions – Explore hidden trails</li>
      </ul>
      <p>
        From beginners to pros, we have adventures waiting for you.
      </p>
      <img className='image4' src='/images/img4.jpg' alt='4x4 jeep'/>
      <img className='image5' src='/images/img5.jpg' alt='trail bikes'/>
      <img className='image6' src='/images/img6.webp' alt='Camping & Trecking'/>
      
    </div>
  );
}

export default Services;