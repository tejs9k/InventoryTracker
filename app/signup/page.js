'use client';

import { useState } from 'react';
import { Box, Button, Stack, Typography, TextField } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      bgcolor="#333" // Dark background for the page
    >
       <Typography variant="h2" color="#FFD700"> {/* Bright yellow */}
        PANTRY TRACKER
      </Typography>
      <Typography variant="h4" color="#FFD700"> {/* Bright yellow */}
        Sign Up
      </Typography>
      <Stack spacing={2} width={300}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            style: { color: '#00FFFF' }, // Bright cyan for text
          }}
          InputLabelProps={{
            style: { color: '#00FFFF' }, // Bright cyan for label
          }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            style: { color: '#00FFFF' }, // Bright cyan for text
          }}
          InputLabelProps={{
            style: { color: '#00FFFF' }, // Bright cyan for label
          }}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" onClick={handleSignup}>Sign Up</Button>
        <Button variant="text" onClick={() => router.push('/login')}>Log In</Button>
      </Stack>
    </Box>
  );
}
