import styled from "styled-components";
import {
  Card as MuiCard,
  Button,
  Link,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <Card>
      <Typography variant="h5">Sign up</Typography>
      <TextField label="Username" />
      <TextField label="Password" type= "password" />
      <TextField label="Confirm Password" type= "password" />
      <Button variant="contained">Create Account</Button>
      <Typography>
        Already have an account?{" "}
        <Link onClick={() => navigate("/")}>Login</Link>
      </Typography>
    </Card>
  );
}

const Card = styled(MuiCard)`
  width: 500px;
  display: grid;
  grid-gap: 2em;
  padding: 2em;
`;
