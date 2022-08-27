import { AlignVerticalCenter, CheckBox } from "@mui/icons-material"
import { Button, FormControlLabel, Grid, Paper,Stack,TextField,Typography} from "@mui/material"
export default function Signup(){
    return (
        <Grid textAlign='center'>
            <Paper elevation={10}>
            <Grid margin={6} spacing={12}>
                <Typography variant="h2">Sign Up</Typography>
                    <form noValidate>
                        <Stack> 
                    <TextField margin="normal" fullWidth label='First Name'required/>
                    <TextField fullWidth label='Last Name'required/>
                    <TextField fullWidth label='Email Address' required/>
                    <TextField fullWidth label='Password' required/>
                    <FormControlLabel
                    control={<CheckBox color="primary"/>}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                    <Button fullWidth variant="contained">
                    Submit
                    </Button>
                    <Typography variant="subtitle2" style={{textAlign:"right",textDecoration:'underline'}} color='primary'>Already have an account? Sign in</Typography>
                    </Stack>   
                    </form> 
                </Grid>
            </Paper>
        </Grid>
    )

}