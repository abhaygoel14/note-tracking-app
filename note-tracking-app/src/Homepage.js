import React from 'react';
import Logo from './images/Logo';
import { Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import { useStyles } from './styles/component.style';
import { MaterialEditor } from 'react-mui-editor';
import './App.css'
const Homepage = () => {
	const classes = useStyles();
	return (
		<div>
		<Grid >
			<Box
				component="nav"
				sx={{
					borderBottom: '0.5px solid #E6E6E6',
					display: 'flex',
					position: 'fixed',
					width: '100%',
				}}>
				<Logo />
				<Toolbar sx={{ mx: 12, borderLeft: '1px solid #E6E6E6' }}>
					<Typography
						variant="h5"
						className={classes.brand}
						sx={{ color: '#091E42', fontSize: '24px',}}>
						Data
					</Typography>
				</Toolbar>
			</Box>
			<Typography variant="h3" className={classes.title}>
				John Doe Interview
			</Typography>
			<Container className={classes.editor} sx={{width:'80%',border:0}}>
				<MaterialEditor />
			</Container>
		</Grid>
		</div>
	);
};

export default Homepage;
