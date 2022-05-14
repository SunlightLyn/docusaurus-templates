import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import Information from '../contents/about.md'

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import CameraIcon from '@mui/icons-material/Camera';

const styles = {
  main: {
    maxWidth: "1500px",
    /* align-items: top; */
    /* justify-content: center; */
    // gap: "2em",
    padding: "2em 0",
    // margin: "0 auto",
    // overflow: "hidden"
  },
  sidebar: {
    padding: "2em",
    minWidth: '195px',
    position: "sticky",
    top: "80px"
  },
  avatar: {
    minWidth: 120,
    minHeight: 120,
    maxWidth: 200,
    maxHeight: 200,
    width: "100%",
    height: "100%",
    // aspectRatio: "1:1",
    margin: "0 auto 1em"
  }
}

function Sidebar() {
  return (
    <Paper sx={styles.sidebar} elevation={3}>
      <Avatar src={"img/profile.png"} sx={styles.avatar} />
      <h2> Lorem ipsum </h2>
      <p>
        Lorem ipsum College<br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
      </p>
      <Stack direction="row" sx={{ marginBottom: "1em" }}>
        <IconButton><GitHubIcon /></IconButton>
        <IconButton><TwitterIcon /></IconButton>
        <IconButton><GoogleIcon /></IconButton>
      </Stack>
      <Button variant="outlined" startIcon={<CameraIcon />}>Subscribe</Button>
    </Paper>
  );
}

function Contents() {
  return (
    <Box>
      <Information components={components} />
    </Box>
  );
}

const components = {
  em: props => <i {...props} />
}

export default function About() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="About" description="About myself">
      <Container>
        <Grid container spacing={4} sx={styles.main}>
          <Grid item xs={12} sm={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={12} md>
            <Contents />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}