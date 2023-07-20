import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { typeHandler } from './utils';

export default function PokemonCard({ name, image, types }) {
	return (
		<Card sx={{ maxWidth: 345, boxShadow: 3 }}>
			<CardActionArea>
				<CardMedia component="img" height={200} image={image} alt={name} />
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						style={{ textTransform: 'uppercase' }}
					>
						{name}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						{typeHandler(types)}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
