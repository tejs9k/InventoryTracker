'use client';

import { useState } from 'react';
import { Box, Button, Stack, Typography, TextField } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      setError('Failed to log in. Please check your credentials.');
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
        Login
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
        <Button variant="contained" onClick={handleLogin}>Log In</Button>
        <Button variant="text" onClick={() => router.push('/signup')}>Sign Up</Button>
      </Stack>
    </Box>
  );
}
