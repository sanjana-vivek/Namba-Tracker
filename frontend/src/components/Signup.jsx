import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link, Checkbox } from '@mui/material';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [connectToBuddy, setConnectToBuddy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    if (connectToBuddy) {
      // Redirect to travel buddy page
      window.location.href = '/travelbuddy';
    } else {
      // Redirect to home page
      window.location.href = '/home';
    }
  };

  return (
    <Container maxWidth="xl" sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginTop: '1rem' }}>
      <Grid container spacing={2}>
        {/* Left half: Image */}
        <Grid item xs={6} sx={{ padding: 0 }}>
          <img src="./busimage.png" alt="Sign Up Image" style={{ width: '46vw', height: '80vh', objectFit: 'cover' }} />
        </Grid>

        {/* Right half: Sign Up Form */}
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '-2rem' }}> {/* Adjusted margin left */}
          <Typography variant="h4" align="center" gutterBottom>
            Get Started
          </Typography>
          <form onSubmit={handleSubmit} style={{ marginLeft: '3rem' }}>
            <TextField
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ backgroundColor: '#e6f7ea', fontSize: '1.2rem', mb: '1rem' }} // Increased font size and margin bottom
            />
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
            <TextField
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ backgroundColor: '#e6f7ea', fontSize: '1.2rem', mb: '1rem' }} // Increased font size and margin bottom
            />
            <Grid container alignItems="center" sx={{ mb: '1rem' }}>
              <Checkbox
                checked={connectToBuddy}
                onChange={(e) => setConnectToBuddy(e.target.checked)}
              />
              <Typography variant="body1" sx={{ mr: '22vw' }}>Connect me to a virtual buddy</Typography>
              <Link href="#" sx={{ color: '#388e3c' }}>Learn More</Link> {/* Added hyperlink styled in green color */}
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, backgroundColor: '#388e3c', fontSize: '1.2rem', py: '0.75rem' }}>
              Sign Up
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
