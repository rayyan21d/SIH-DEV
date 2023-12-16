
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

import DropZone from '../components/DropZone';
import FileUpload from '../components/FileUpload';
import CountrySelector from '../components/CountrySelector';
import EditorToolbar from '../components/EditorToolbar';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

export default function AddForm() {

  const navigate = useNavigate();





const handleSubmit = async (event) => {

  
    
  event.preventDefault();
  console.log(event.currentTarget);
  const data = new FormData(event.currentTarget);

  const pass= data.get("password");

  // Send password and verify from backend
  // if password is correct then send load to the backend
  // else show error message

  const load = {
    sidingCode: data.get("sidingCode"),
    sidingName: data.get("sidingName"),
    zone: data.get("zone"),
    division:data.get("division"),
    contactPerson: data.get("contactPerson"),
    contactPersonContact: data.get("contactPersonContact"),
    latitude: data.get("latitude"),
    longitude: data.get("longitude")
  };
  
  console.log(load);


  // launch an axios request to http://8000/api/login and get back response and redirect based on the request code

  // 1- const response = await axios.post('http://localhost:8000/api/login', load)
  // console.log(response);

  // const responseCode= response.status;
  // console.log(responseCode);

  // 2- Testing route
  // localStorage.setItem("userType", load.userType);
  // navigate("/dashboard", {
  //   replace: true,
  //   state: { userType: load.userType },
  // });

  // // 3 - If response code is okay :
  // if (responseCode.status === 201) {

  //   navigate('/dashboard',  {state: {userType:load.userType} } );

  // }else if(responseCode === 404){
  //   navigate(navigate('/dashboard',  {state: {userType:'error'} } ));
  // }

  };








































  return (

    <Box sx={{ flex: 1, width: '100%'}}>

      
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 10,
        }}
      >


        <Box sx={{ px: { xs: 2, md: 6 } }}>

          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2, borderBlock:0.6 }}>
            Add Siding
          </Typography>
        </Box>


      </Box>

        <form onSubmit={handleSubmit}>

        {/* <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
          overflowY:'auto',
          maxHeight:'100vh'
        }}
      > */}
        
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
             
                <FormLabel>Siding Name</FormLabel>
                <FormControl required
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Siding Name" name="sidingName"/>
                </FormControl>

                <FormLabel>Zone</FormLabel>
                <FormControl required
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Zone" name="zone"/>
                </FormControl>

                <FormLabel>Divison</FormLabel>
                <FormControl required
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Divison" name="division"/>
                </FormControl>

                <FormLabel>Siding Code</FormLabel>
                <FormControl required
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Siding Code" name="sidingCode"/>
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
            
                <FormLabel>Siding Manager</FormLabel>
                <FormControl required
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Siding Manager" name="contactPerson"/>
                </FormControl>
                <FormLabel>Contact</FormLabel>
                <FormControl required
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Contact" name="contactPersonContact" />
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
                <FormControl required
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Latitude" name="latitude" />
                </FormControl>
                <FormLabel>Longitude</FormLabel>
                <FormControl required
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Longitude" name="longitude" />
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
                <FormControl required
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Password" />
                </FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl required
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Confirm Password" />
                </FormControl>

              </Stack>
            </Stack>
          </Stack>
         

        

          {/* SAVE AND CANCEL BUTTONS */}
          
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral" onClick={()=>{
                console.log("hi");
                navigate('/dashboard/manage-siding')}}>
                Cancel
              </Button>
              <Button size="sm" variant="solid" type="submit">
                Save
              </Button>
            </CardActions>
          
        </Card>





        {/* </Stack> */}


      </form>
        

      






    </Box>
  );
}