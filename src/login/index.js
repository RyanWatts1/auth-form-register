import styled from "styled-components";
import {
  Card as MuiCard,
  Button,
  Link,
  Typography,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Card>
      <Typography variant="h5">Sign in</Typography>
      <TextField label="Username" />
      <TextField label="Password" type="password" />
      <Button variant="contained">Log in</Button>
      <Typography>
        Don't have an account?{" "}
        <Link onClick={() => navigate("/register")}>Resgister</Link>
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
