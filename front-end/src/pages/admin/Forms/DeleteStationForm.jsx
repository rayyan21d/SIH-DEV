
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

export default function DeleteStationForm() {

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
    stationCode: data.get("stationCode"),
    stationName: data.get("stationName"),
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

    <h1>Are you sure you want to delete station?</h1>
  );
}