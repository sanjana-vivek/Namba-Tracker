import React from 'react';
import { Container, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginTop: '1rem', marginLeft:'13vw' }}>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="./firstpage.png" alt="Login Image" style={{ width: '100%', height: '70vh', objectFit: 'cover' }} />
        <Button variant="outlined" style={{color: '#388e3c',borderColor: '#388e3c'}} sx={{ mt: 3, fontSize: '1.2rem', py: '0.75rem', width: '25%', borderRadius: '20px' }}>
          Start Tracking
        </Button>
      </div>
    </Container>
  );
}

