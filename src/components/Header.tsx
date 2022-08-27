import { Stack,TextField,Typography,Button,Checkbox,FormControlLabel,FormLabel, Container, Box} from "@mui/material"
import { useState } from "react";
import AccessibleIcon from '@mui/icons-material/Accessible';
export const Header =() => {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={1}>
            <Typography variant="h3">Sign In</Typography>
            <Stack spacing={2} >
            <TextField variant="outlined" color="secondary" label='Name or Email' required/>
            <TextField color="secondary" label='Password' type='password' value={value} onChange={e => setValue(e.target.value)}  error={!value} helperText={!value ? "Required":"Do not share your password with anyone"}/>
            </Stack>
            <FormControlLabel value="female" control={<Checkbox size='small'/>} label="Remember me"/>
            <Button variant="contained">Sign In</Button>
            <Stack spacing={2} display='flex' sx={{textDecoration: 'underline', color:'blueviolet'}} justifyContent='space-between' color='Highlight' direction='row'>
            <Typography variant="subtitle2">Forgot password?</Typography>
            <Typography variant="subtitle2">Don't have an account? Sign Up</Typography>
            </Stack>
            <Typography variant="body2">Copyright © Your Website 2022.</Typography>
        </Stack>
    )
}