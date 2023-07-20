import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Skeletons() {
	return (
		<Stack
			display={'flex'}
			flexDirection={'row'}
			flexWrap={'wrap'}
			gap={5}
			justifyContent={'center'}
		>
			{/* For variant="text", adjust the height via font-size */}
			{/* For other variants, adjust the size with `width` and `height` */}
			<Skeleton variant="rectangular" width={210} height={180} />
			<Skeleton variant="rectangular" width={210} height={180} />
			<Skeleton variant="rectangular" width={210} height={180} />
			<Skeleton variant="rectangular" width={210} height={180} />
			<Skeleton variant="rectangular" width={210} height={180} />
			<Skeleton variant="rectangular" width={210} height={180} />
			<Skeleton variant="rectangular" width={210} height={180} />
			<Skeleton variant="rectangular" width={210} height={180} />
			<Skeleton variant="rectangular" width={210} height={180} />

			{/* <Skeleton variant="rounded" width={210} height={60} /> */}
		</Stack>
	);
}
