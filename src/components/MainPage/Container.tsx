import { Gradient } from "@mui/icons-material";
import { Card,CardContent, Menu, MenuItem, MenuList, Paper,Button,Grid,Stack,Typography,Box, IconButton, TextField, InputAdornment, Chip, CardMedia, Divider, Avatar} from "@mui/material";
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
export default function Container(){
    return (
        <Grid item xs={7} paddingX={2} paddingY={5}>
            <Box display='flex' justifyContent='space-between'>
            <Stack borderBottom={.5} spacing={2} direction='row' display='flex' justifyContent='end'>
            <Typography variant="body1">TV Show</Typography>
            <Typography variant="body1">Movie</Typography>
            </Stack>
            <Stack spacing={2} direction='row' display='flex' justifyContent='end'>
            <Typography marginTop={1} variant="body1">Anonymous</Typography>
            <Avatar>T</Avatar>
            </Stack>
            </Box>
            <Grid marginTop={2}>
            <Box position='relative'>
                <Card>
                <CardMedia component='img' height={350} image="https://image.tmdb.org/t/p/original/9GvhICFMiRQA82vS6ydkXxeEkrd.jpg"/>
                </Card>
                <Box position='absolute' 
                sx={{bottom:'12px',
                marginRight:'250px',
                marginLeft:'30px'
                }}>
                    <Typography variant="h2" color='primary' fontWeight={600}>She-Hulk: Attorney at Law</Typography>
                    <Typography variant="h5" color='white' fontWeight={500}>Nữ Khổng Lồ Xanh</Typography>
                    <Typography variant="subtitle2" color='#e5e7eb'>First air date:20022-08-18</Typography>
                    <Box display='block'>
                            <Chip variant="filled" label='Comedy'></Chip>
                            <Chip variant="filled" label='Action & Adventure'></Chip>
                            <Chip variant="filled" label='Sci-fi & Fantasy'></Chip>
                    </Box>
                    <Typography variant="subtitle2" color='#e5e7eb' textAlign='justify'>Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.</Typography>
                </Box>
                <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'4px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'20px',
                            right:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
            </Box>
        </Grid>
        <Box marginTop={2}>
        <Typography variant="h6">Popular</Typography>
        <Divider/>
        <Grid container paddingTop={2} spacing={4} textAlign='center'>
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
        </Grid> 
        </Box>
        <Box marginTop={2}>
        <Typography variant="h6">Top Rated</Typography>
        <Divider/>
        <Grid container paddingTop={2} spacing={4} textAlign='center'>
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
        </Grid> 
        </Box>
        <Box marginTop={2}>
        <Typography variant="h6">Hot</Typography>
        <Divider/>
        <Grid container paddingTop={2} spacing={4} textAlign='center'>
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
        </Grid> 
        </Box>
        <Box marginTop={2}>
        <Typography variant="h6">On the air</Typography>
        <Divider/>
        <Grid container paddingTop={2} spacing={4} textAlign='center'>
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
            <Grid item padding={0} xs={3} >
                    <Card style={{position:'relative',borderRadius:'10px'}}>
                        <CardMedia component='img' height="200" title="" image="https://image.tmdb.org/t/p/w342/sIFD5fwV7LmKBNLOvtdwGyWhMt8.jpg" />
                        <CardContent>
                        <Typography variant="subtitle1">The Secret House</Typography>
                        <Button variant="contained"
                        sx={{zIndex:'modal'}}
                        style={{
                            padding:'1px',
                            borderRadius:'100px',
                            position:"absolute",
                            top:'10px',
                            left:'10px'
                            }} startIcon={<StarIcon/>}>4.1</Button>    
                        </CardContent>
                    </Card>
            </Grid> 
        </Grid> 
        </Box>   
    </Grid>
    )
}