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
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import Sidebar from './components/Sidebar';
import OrderTable from './components/OrderTable';
import OrderList from './components/OrderList';
import Header from './components/Header';
import AddNewArrivingTrainForm from './Forms/AddNewArrivingTrainForm';
import DepartureForm from './Forms/DepartureForm';
import ScheduleMaintainenceForm from './Forms/ScheduleMaintainenceForm';


export default function TrainsInStation() {

  const [showForm, setShowForm] = useState(true);

  const [showAddNewArrivingTrain, setShowAddNewArrivingTrain] = useState(false);
  const [showDeparture, setShowDeparture] = useState(false);
  const [showScheduleMaintainence, setShowScheduleMaintainence] = useState(false);

  
  function handleAddNewArrivingTrain() {
    setShowAddNewArrivingTrain(true);
    setShowDeparture(false);
    setShowScheduleMaintainence(false);
    setShowForm(false);
  }

  function handleDeparture() {
    setShowDeparture(true);
    setShowAddNewArrivingTrain(false);
    setShowScheduleMaintainence(false);
    setShowForm(false);
  }

  function handleScheduleMaintainence() {
    setShowScheduleMaintainence(true);
    setShowAddNewArrivingTrain(false);
    setShowDeparture(false);
    setShowForm(false);
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
                  Trains in Station
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
                Trains in Station
              </Typography>


              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between', gap: 1
                }}
              >
                <Button
                  color="primary"
                  size="sm"
                  id='add'
                  onClick={handleAddNewArrivingTrain}

                >
                  Add new arriving Train
                </Button>


                <Button
                  color="primary"
                  id='update'
                  onClick={handleDeparture}

                  size="sm"

                >
                  Departure
                </Button>

                <Button
                  color="primary"
                  size="sm"
                  id='delete'
                  onClick={handleScheduleMaintainence}

                >
                  Schedule Maintainence
                </Button>

              </Box>




            </Box>

            {/* The main content of the page */}

            {showForm && <OrderTable />}

            {
              showAddNewArrivingTrain && <AddNewArrivingTrainForm />
            }

            {
              showDeparture && <DepartureForm />
            }


            {
              showScheduleMaintainence && <ScheduleMaintainenceForm />
            }


            {/* <OrderList /> */}

            {/* <MyProfile /> */}





          </Box>



        </Box>





      </CssVarsProvider>




    </>


  );
}
