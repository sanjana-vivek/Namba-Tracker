import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Container maxWidth="xl" sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginTop: '1rem' }}>
      <Grid container spacing={8}>
        {/* Left half: Image */}
        <Grid item xs={6} sx={{ padding: 0 }}>
          <img src="./travelbuddy.png" alt="Login Image" style={{ width: '46vw', height: '80vh', objectFit: 'cover', marginTop: '5rem' }} />
        </Grid>

        {/* Right half: Login Form */}
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '-5vw' }}>
          <Typography variant="body2" align="center" sx={{ mb: 2 }}>
            <p style={{ fontSize: '0.8rem' }}>
              <b style={{ fontSize: '1.2rem' }}>Virtual Buddy</b>
            </p>
            Find Virtual buddies with similar interests or travel plans. Connect and foster a sense of community!
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 2 }}>
            Start Connecting
          </Typography>
          <form onSubmit={handleSubmit} style={{ marginLeft: '3rem', width: '80%' }}>
            <TextField
              fullWidth
              id="language"
              label="Language"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: '#e6f7ea', fontSize: '1.2rem', mb: '1rem' }}
            />
            <TextField
              fullWidth
              id="age"
              label="Age"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: '#e6f7ea', fontSize: '1.2rem', mb: '1rem' }}
            />
            <TextField
              fullWidth
              id="hobbies"
              label="Hobbies"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: '#e6f7ea', fontSize: '1.2rem', mb: '1rem' }}
            />
            <TextField
              fullWidth
              id="gender"
              label="Gender"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: '#e6f7ea', fontSize: '1.2rem', mb: '1rem' }}
            />
            <TextField
              fullWidth
              id="destination"
              label="Destination"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: '#e6f7ea', fontSize: '1.2rem', mb: '1rem' }}
            />
            <Button component={RouterLink} to="/home" variant="outlined" style={{ color: '#388e3c', width: '30%', left: '35%' }} fullWidth>
              Connect
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
