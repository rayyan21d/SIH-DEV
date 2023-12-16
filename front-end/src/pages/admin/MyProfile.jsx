import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import DropZone from './components/DropZone';
import FileUpload from './components/FileUpload';
import CountrySelector from './components/CountrySelector';
import EditorToolbar from './components/EditorToolbar';
import Grid from '@mui/material/Grid';

export default function MyProfile() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="sm" />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="none"
              color="neutral"
              href="#some-link"
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
              Manage Sidings
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
              Add Siding
            </Typography>
          </Breadcrumbs>
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Add Siding
          </Typography>
        </Box>
      </Box>
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        {/* CARDS */}
        <Card>
          {/* Card1 */}
          <Box sx={{ mb: 1}}>
            <Typography level="title-md">Siding Details</Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >

            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                {/* Siding Name */}
                <FormLabel>Siding Name</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Siding Name" />
                </FormControl>
                <FormLabel>Zone</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Zone" />
                </FormControl>
                <FormLabel>Divison</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Divison" />
                </FormControl>
                <FormLabel>Station</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Station" />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          {/* small screen */}
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>


              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Siding Name</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="Siding Name" />
                  {/* <Input size="sm" placeholder="Last name" /> */}
                </FormControl>
                <FormLabel>Zone</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Zone" />
                </FormControl>
                <FormLabel>Divison</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Divison" />
                </FormControl>
                <FormLabel>Station</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Station" />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>



          {/* Card2 */}
          <Divider />
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Contact Details</Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >

            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                {/* Siding Name */}
                <FormLabel>Siding Manager</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Siding Manager" />
                </FormControl>
                <FormLabel>Contact</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Contact" />
                </FormControl>

              </Stack>
            </Stack>
          </Stack>
          {/* small screen */}
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>


              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Siding Manager</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="Siding Manager" />
                  {/* <Input size="sm" placeholder="Last name" /> */}
                </FormControl>
                <FormLabel>Contact</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Contact" />
                </FormControl>

              </Stack>
            </Stack>
          </Stack>

          {/* Card3 */}
          <Divider />
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Location</Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >

            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                
                <FormLabel>Latitude</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Latitude" />
                </FormControl>
                <FormLabel>Longitude</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Longitude" />
                </FormControl>

              </Stack>
            </Stack>
          </Stack>
          {/* small screen */}
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>


              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Longitude</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="Longitude" />
                  {/* <Input size="sm" placeholder="Last name" /> */}
                </FormControl>
                <FormLabel>Latitude</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Latitude" />
                </FormControl>

              </Stack>
            </Stack>
          </Stack>


          {/* Card4 */}
          <Divider />
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Create Password</Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >

            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                
                <FormLabel>Password</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Password" />
                </FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Confirm Password" />
                </FormControl>

              </Stack>
            </Stack>
          </Stack>
          {/* small screen */}
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>


              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Password</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="Password" />
                  {/* <Input size="sm" placeholder="Last name" /> */}
                </FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Confirm Password" />
                </FormControl>

              </Stack>
            </Stack>
          </Stack>






          
          



          {/* SAVE AND CANCEL BUTTONS */}
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>





      </Stack>
    </Box>
  );
}