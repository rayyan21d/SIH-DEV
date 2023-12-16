import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import Key from "@mui/icons-material/Key";
import FormHelperText from "@mui/joy/FormHelperText";
import InfoOutlined from "@mui/icons-material/InfoOutlined";

import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";

import { useNavigate } from "react-router-dom";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

import axios from "axios";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="neutral" disabled />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="neutral"
      aria-label="toggle light/dark mode"
      {...other}
      onClick={(event) => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
        onClick?.(event);
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function SignIn() {
  const [userType, setuserType] = React.useState("");
  const navigate = useNavigate();
  // const history = useHistory();

  const handleChange = (event, newValue) => {
    setuserType(newValue);
    console.log(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const data = new FormData(event.currentTarget);

    const load = {
      username: data.get("username"),
      userType: data.get("userType"),
      password: data.get("password"),
    };
    console.log(load);

    // localStorage.setItem('userType', load.userType);
    if (!load.username || !load.password) return;

    // launch an axios request to http://8000/api/login and get back response and redirect based on the request code

    // 1- const response = await axios.post('http://localhost:8000/api/login', load)
    // console.log(response);

    // const responseCode= response.status;
    // console.log(responseCode);

    // 2- Testing route
    localStorage.setItem("userType", load.userType);
    navigate("/dashboard", {
      replace: true,
      state: { userType: load.userType },
    });

    // // 3 - If response code is okay :
    // if (responseCode.status === 201) {

    //   navigate('/dashboard',  {state: {userType:load.userType} } );

    // }else if(responseCode === 404){
    //   navigate(navigate('/dashboard',  {state: {userType:'error'} } ));
    // }
  };

  //save this jwt token from reesponse into cookies either using axios or document.cookies....

  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",

          width:
            "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
          maxWidth: "100%",
          px: 0,
        }}
      >
        <Box
          component="header"
          sx={{
            py: 3,
            px: 3,
            display: "flex",
            alignItems: "left",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
            <IconButton variant="soft" color="primary" size="lg">
              <BadgeRoundedIcon />
            </IconButton>
            <Typography level="title-lg">Railway Rakes</Typography>
          </Box>
          <ColorSchemeToggle />
        </Box>
        <Box
          sx={(theme) => ({
            width:
              "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
            transition: "width var(--Transition-duration)",
            transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255 255 255 / 0.2)",
            [theme.getColorSchemeSelector("dark")]: {
              backgroundColor: "rgba(19 19 24 / 0.4)",
            },
          })}
        >
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 1,
              pb: 5,
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
              width: 500,
              maxWidth: "100%",
              mx: "auto",
              padding: 8,
              borderRadius: "lg",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: "hidden",
              },
            }}
          >
            <Stack gap={4} sx={{ mt: 1 }}>
              <Typography level="title-lg">Log In</Typography>
              <form onSubmit={handleSubmit}>
                <FormLabel>User Type</FormLabel>

                <Select
                  value={userType}
                  name="userType"
                  onChange={handleChange}
                  variant="outlined"
                  color="neutral"
                  size="lg"
                >
                  <Option value={"admin"}>Admin</Option>
                  <Option value={"station"}>Station Manager</Option>
                  <Option value={"siding"}>Siding Manager</Option>
                </Select>

                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="username"
                    name="username"
                    size="lg"
                    sx={{
                      "--Input-focusedInset": "var(--any, )",
                      "--Input-focusedThickness": "0.25rem",
                      "--Input-focusedHighlight": "rgba(13,110,253,.25)",
                      "&::before": {
                        transition: "box-shadow .15s ease-in-out",
                      },
                      "&:focus-within": {
                        borderColor: "#86b7fe",
                      },
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    size="lg"
                    placeholder="Type in here…"
                    startDecorator={<Key />}
                    sx={{
                      "--Input-focusedInset": "var(--any, )",
                      "--Input-focusedThickness": "0.25rem",
                      "--Input-focusedHighlight": "rgba(13,110,253,.25)",
                      "&::before": {
                        transition: "box-shadow .15s ease-in-out",
                      },
                      "&:focus-within": {
                        borderColor: "#86b7fe",
                      },
                    }}
                  />
                </FormControl>
                <FormHelperText>
                  <InfoOutlined />
                  Opps! something is wrong.
                </FormHelperText>

                <Stack gap={4} sx={{ mt: 2 }}>
                  <Button type="submit" fullWidth>
                    Log In
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Box>

        <Box
          component="footer"
          sx={{
            py: 3,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography level="body-xs" textAlign="center">
            © Railway Rakes {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
