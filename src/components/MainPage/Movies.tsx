import { Gradient } from "@mui/icons-material";
import { Card,CardContent, Menu, MenuItem, MenuList, Paper,Button,Grid,Stack,Typography,Box, IconButton, TextField, InputAdornment, Chip, CardMedia, Divider} from "@mui/material";
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import Container from "./Container";
export default function Movies(){
    return (
        <Grid container>
        <Grid item xs={2.5}  
        paddingY={5}
        paddingX={3}
        sx={{
            borderRight: (theme) => `1px solid ${theme.palette.divider}`,
            background: "linear-gradient(#9198e5,#91d6e5)",
        }}
        textAlign='center' height='100'>
            <Stack display='block' spacing={5}>
                <Typography variant="h4" fontWeight={500} color='lavender'>MoviesHot</Typography>
                <Stack>
                <Typography variant="h5" marginBottom={2} fontWeight={500}>Home</Typography>
                    <Stack spacing={2}>
                        <Button style={{color:'black'}} startIcon={<HomeIcon/>}>Home</Button>
                        <Button style={{color:'black'}} startIcon={<ExploreIcon/>}>Explore</Button>
                        <Button style={{color:'black'}} startIcon={<SearchIcon/>}>Search</Button>
                    </Stack>
                </Stack>
                    <Stack>
                    <Typography variant="h5" marginBottom={2} fontWeight={500}>Personal</Typography>
                        <Stack spacing={2}>
                        <Button style={{color:'black'}} startIcon={<BookmarkIcon/>}>Bookmarked</Button>
                        <Button style={{color:'black'}} startIcon={<HistoryIcon/>}>History</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Grid>
       <Container/>
        <Grid item xs={2.5} sx={{
            borderLeft: (theme) => `1px solid ${theme.palette.divider}`}} paddingY={5} paddingX={2} spacing={2}>
        <Stack>
        <TextField
        size="small"
        label=""
        sx={{'& div': {
            borderRadius: '100px',
        }}}
        // style={{borderRadius:'100px'}}
        placeholder="Search..."
        InputProps={{
            endAdornment: (
                <IconButton>
                <SearchIcon />
                </IconButton>  
            )
        }}
        />
        <Stack display='block'  spacing={1} marginTop={1}>
            <Stack direction='row' spacing={1}>
            <Chip label="Drama" variant="outlined" />
            <Chip label="Comedy" variant="outlined" />
            <Chip label="Drama" variant="outlined" />
            </Stack>
            <Stack direction='row' spacing={1}>
            <Chip label="Drama" variant="outlined" />
            <Chip label="Comedy" variant="outlined" />
            <Chip label="Drama" variant="outlined" />
            </Stack>
        </Stack>
        </Stack>
        <Stack paddingBottom={1} display='flex' direction='row' marginTop={2} justifyContent='space-between'>
        <Typography>Trending</Typography>
        <MoreVertIcon/>
        </Stack>
        <Divider/>
        <Stack paddingTop={2} spacing={2}>
        <Box display='flex'>
        <Card sx={{
            borderRadius:'10px'
        }}>            
                <CardMedia component='img' height={150} image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg"/>
        </Card>
        <Stack display='block' marginX={1} spacing={1} textAlign='center'>
                <Typography variant="subtitle1">The Secret House</Typography>
                <Typography variant="subtitle1">2021-09-21</Typography>
                <Button variant="outlined" size="small" style={{marginLeft:'24px',marginRight:'24px',borderRadius:'100px'}} startIcon={<StarIcon/>}>8.1</Button>    
        </Stack>
        </Box>   
        <Box display='flex'>
        <Card sx={{
            borderRadius:'10px'
        }}>            
                <CardMedia component='img' height={150} image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg"/>
        </Card>
        <Stack display='block' marginX={1} spacing={1} textAlign='center'>
                <Typography variant="subtitle1">The Secret House</Typography>
                <Typography variant="subtitle1">2021-09-21</Typography>
                <Button size="small" variant="outlined" style={{marginLeft:'24px',marginRight:'24px',borderRadius:'100px'}} startIcon={<StarIcon/>}>8.1</Button>    
        </Stack>
        </Box>
        </Stack>       
        <Box marginTop={2}>
            <Button style={{borderRadius:'100px'}} variant="contained"
            className="inputRounded" 
            fullWidth>See More
            </Button>
        </Box>     
        </Grid>
    </Grid>
    )
}