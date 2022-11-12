import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
brand: {
		position: '',
		left: '7%',
		right: '95%',
		top: '4%',
		bottom: '94%',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500px',
		lineHeight: '28px',
	},
	title: {
		position: 'fixed',
		left: '9.38%',
		right: '48.48%',
		top: '15.2%',
		bottom: '70.71%',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '36px',
		lineHeight: '42px',
		color: '#091E42',
		opacity: '0.7',
		textShadow: ' 0px 10px 40px rgba(1, 0, 39, 0.25)',
	},
	editor: {
		position: 'fixed',
		left: '8.38%',
		right: '48.48%',
		top: '28.2%',
		bottom: '78.71%',
	},
}))