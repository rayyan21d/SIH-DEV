import { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import { useNavigate } from 'react-router-dom';



export default function MakeRequest() {
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);


  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  function handleAddClick() {
    setShowForm(false);
    setShowAddForm(true);
    setShowUpdateForm(false);
    setShowDeleteForm(false);
  }

  function handleUpdateClick() {
    setShowForm(false);
    setShowAddForm(false);
    setShowUpdateForm(true);
    setShowDeleteForm(false);
  }

  function handleDeleteClick() {
    setShowForm(false);
    setShowAddForm(false);
    setShowUpdateForm(false);
    setShowDeleteForm(true);
  }









  //   const [values, setValues] = useState({ firstName: '', lastName: '' });

  // function handleChange(event) {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value
  //   });
  // }

  return (

    <>

      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>

          <Header />
          <Sidebar />

          <Box
            component="main"
            className="MainContent"
            sx={{
              px: { xs: 2, md: 6 },
              pt: {
                xs: 'calc(12px + var(--Header-height))',
                sm: 'calc(12px + var(--Header-height))',
                md: 3,
              },
              pb: { xs: 2, sm: 2, md: 3 },
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
              height: '100dvh',
              gap: 1,
            }}
          >
            {/* The upper nav section */}

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Breadcrumbs
                size="sm"
                aria-label="breadcrumbs"
                separator={<ChevronRightRoundedIcon fontSize="sm" />}
                sx={{ pl: 0 }}
              >
                <Link
                  underline="none"
                  color="neutral"
                  href="#dashboard"
                  aria-label="Home"
                >
                  <HomeRoundedIcon />
                </Link>
                <Link
                  underline="hover"
                  color="neutral"
                  href="#some-link"
                  fontSize={12}
                  fontWeight={500}
                >
                  Dashboard
                </Link>
                <Typography color="primary" fontWeight={500} fontSize={12}>
                  Make Request
                </Typography>
              </Breadcrumbs>
            </Box>

            {/* Manage Siding Heading */}
            <Box
              sx={{
                display: 'flex',
                mb: 1,
                gap: 1,
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'start', sm: 'center' },
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <Typography level="h2" component="h1">
                Make Request
              </Typography>







            </Box>

            {/* The main content of the page */}

            <Card>
              {/* Card1 */}
              <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Make Request Form</Typography>
              </Box>
              <Divider />
              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { xs: 'flex', md: 'flex' }, my: 1 }}
              >

                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                  <Stack spacing={1}>

                    <FormLabel>Coal to be collected</FormLabel>
                    <FormControl required
                      sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                    >
                      <Input size="sm" placeholder="Coal to be collected" name="coalToBeCollected" />
                    </FormControl>

                    <FormLabel>Date</FormLabel>
                    <FormControl required
                      sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                    >
                      <Input size="sm" placeholder="Date" name="date" />
                    </FormControl>

                    <FormLabel>Time</FormLabel>
                    <FormControl required
                      sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                    >
                      <Input size="sm" placeholder="Time" name="time" />
                    </FormControl>

                    <FormLabel>Destination Station</FormLabel>
                    <FormControl required
                      sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                    >
                      <Input size="sm" placeholder="Destination Station" name="destinationStation" />
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>















              {/* SAVE AND CANCEL BUTTONS */}



              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button size="sm" variant="outlined" color="neutral" onClick={() => {
                  console.log("hi");
                  navigate('/dashboard/manage-siding');
                }}>
                  Cancel
                </Button>
                <Button size="sm" variant="solid" type="submit">
                  Save
                </Button>
              </CardActions>

            </Card>



          </Box>



        </Box>





      </CssVarsProvider>
    </>


  );
}
