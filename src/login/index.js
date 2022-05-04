import styled from "styled-components";
import {
  Card as MuiCard,
  Button,
  Link,
  Typography,
  TextField,
} from "@mui/material";

export default function Login() {
  return (
    <Card>
      <Typography variant="h5">Sign in</Typography>
      <TextField label="Username" />
      <TextField label="Password" />
      <Button variant="contained">Log in</Button>
      <Typography>
        Don't have an account? <Link>Resgister</Link>
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
