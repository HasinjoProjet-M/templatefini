import { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import FormModel from './FormModel';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const AppModels = () => {
  const [state, setState] = useState({ date: new Date() });
  const { marque_id, categorie_id, model } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Voiture', path: '/models' }, { name: 'Models' }]} />
      </Box>

      <SimpleCard title="Ajout de nouvelle modele de voiture par marque ">
        <FormModel />
      </SimpleCard>
    </Container>
  );
};

export default AppModels;
