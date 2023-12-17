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
import Sidebar from './../components/Sidebar';
import Header from './../components/Header';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import { useNavigate } from 'react-router-dom';

export default function PastRequestDetails() {
  const navigate = useNavigate();
  // Data to be hardcoded

  return (

    <Card>
      {/* Card1 */}
      <Box sx={{ mb: 1 }}>
        <Typography level="title-md">Past Request Details</Typography>
      </Box>
      <Divider />
      <Stack
        direction="row"
        spacing={3}
        sx={{ display: { xs: 'flex', md: 'flex' }, my: 1 }}
      >

        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <Stack spacing={1}>

            <FormLabel>Request ID</FormLabel>
            <FormControl required
              sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
            >
              <Input size="sm" placeholder='Request ID' name="requestId" disabled />
            </FormControl>

            <FormLabel>Rake Assigned</FormLabel>
            <FormControl required
              sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
            >
              <Input size="sm" placeholder="Rake Assigned" name="rakeAssigned" disabled />
            </FormControl>

            <FormLabel>Status Of Rake</FormLabel>
            <FormControl required
              sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
            >
              <Input size="sm" placeholder="Status Of Rake" name="statusOfRake" disabled />
            </FormControl>

            <FormLabel>Destination </FormLabel>
            <FormControl required
              sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
            >
              <Input size="sm" placeholder="Destination" name="destination" disabled />
            </FormControl>
            <FormLabel>Date </FormLabel>
            <FormControl required
              sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
            >
              <Input size="sm" placeholder="Date" name="date" disabled />
            </FormControl>


            <FormLabel>Station Of Rake </FormLabel>
            <FormControl required
              sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
            >
              <Input size="sm" placeholder="Station Of Rake" name="stationOfRake" disabled />
            </FormControl>
            <FormLabel>Coal Sent </FormLabel>
            <FormControl required
              sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
            >
              <Input size="sm" placeholder="Coal Sent" name="coalSent" disabled />
            </FormControl>
            <FormLabel>Departure Time </FormLabel>
            <FormControl required
              sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
            >
              <Input size="sm" placeholder="Departure Time" name="departureTime" disabled />
            </FormControl>
          </Stack>
        </Stack>
      </Stack>















      {/* SAVE AND CANCEL BUTTONS */}
      <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
        <Button size="sm" variant="outlined" color="neutral" 
        // onClick={}
        >
          Back
        </Button>
      </CardActions>

    </Card>

  )
}