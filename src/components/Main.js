import React from 'react';

function Main() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <section id="home">
        <h2>Welcome to Capybara Electronics</h2>
        <p>Your local store for CPUs, GPUs, RAM, and more computer electronics.</p>
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Electronics Store" style={{ width: '100%', maxWidth: '800px' }} />
      </section>
      <section id="products" style={{ marginTop: '2rem' }}>
        <h2>Our Products</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div style={{ margin: '1rem', textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="CPU" style={{ width: '200px', height: '150px' }} />
            <h3>CPUs</h3>
            <p>High-performance processors for all your computing needs.</p>
          </div>
          <div style={{ margin: '1rem', textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="GPU" style={{ width: '200px', height: '150px' }} />
            <h3>GPUs</h3>
            <p>Powerful graphics cards for gaming and professional work.</p>
          </div>
          <div style={{ margin: '1rem', textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="RAM" style={{ width: '200px', height: '150px' }} />
            <h3>RAM</h3>
            <p>Fast memory modules to boost your system's performance.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;