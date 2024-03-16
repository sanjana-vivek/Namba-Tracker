import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // Redirect to /home
    window.location.href = '/home'; // Directly set the URL for simplicity
  };

  return (
    <Container maxWidth="xl" sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginTop: '1rem' }}>
      <Grid container spacing={8}>
        {/* Left half: Image */}
        <Grid item xs={6} sx={{ padding: 0 }}>
          <img src="./busimage.png" alt="Login Image" style={{ width: '46vw', height: '80vh', objectFit: 'cover' }} />
        </Grid>

        {/* Right half: Login Form */}
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome Back
          </Typography>
          <form onSubmit={handleSubmit} style={{ marginLeft: '3rem' }}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ backgroundColor: '#e6f7ea', fontSize: '1.2rem', mb: '1rem' }} // Increased font size and margin bottom
            />
            <TextField
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ backgroundColor: '#e6f7ea', fontSize: '1.2rem', mb: '1rem' }} // Increased font size and margin bottom
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, backgroundColor: '#388e3c', fontSize: '1.2rem', py: '0.75rem' }}>
              Login
            </Button>
            <Typography variant="body1" align="center" sx={{ mt: 4 }}>
              Don't have an account? <Link href="/signup" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" sx={{ borderRadius: '20px', backgroundColor: '#388e3c', fontSize: '1rem', px: '1rem', py: '0.5rem' }}>
                  Sign Up
                </Button>
              </Link>
            </Typography>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
