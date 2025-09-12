import React from "react";
import { Box, Container, Grid, IconButton, List, ListItem, Stack, Typography } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from "../assets/sample logo 1.png";
import newsImage1 from '../assets/Rectangle 22.png'
import newsImage2 from '../assets/Rectangle 22 (1).png'

import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <Box py={5} px={0} sx={{ backgroundColor: "#eee" }}>
      <Container>
        <Box   >
          <Grid container spacing={1} width={'100%'} sx={{gap:{xs:'20px',md:'0px'}}}  >
            <Grid  size={{xs:12,md:4}}  >
              <Stack direction={"column"} >
                <Box>
                  <img
                    src={Logo}
                    style={{
                      maxWidth: "45px",
                      marginBottom:'5px'
                    }}
                  />
                </Box>
                <Box sx={{marginBottom:'15px'}}>
                  <Typography variant="subtitle2" sx={{color:'#173F5F'}}>
                    Nostrud exercitation ullamco laboris nisi{" "}
                    <Box
                      component={"br"}
                      sx={{ display: { xs: "none", md: "block" } }}
                    ></Box>{" "}
                    ut aliquip ex ea commodo consequat.
                  </Typography>
                </Box>
                <Box display={'flex'} gap={'1.8rem'}>
                      <IconButton sx={{padding:'0px'}}>
                          <FacebookRoundedIcon sx={{fontSize:'2.3rem',color:'#ED553B'}}/>
                      </IconButton>
                       <IconButton sx={{padding:'0px'}}>
                          <LinkedInIcon sx={{fontSize:'2.3rem',color:'#ED553B'}}/>
                      </IconButton>
                       <IconButton sx={{padding:'0px'}}>
                          <TwitterIcon sx={{fontSize:'2.3rem',color:'#ED553B'}}/>
                      </IconButton>
                       <IconButton sx={{padding:'0px'}}>
                          <YouTubeIcon sx={{fontSize:'2.3rem',color:'#ED553B'}}/>
                      </IconButton>
                </Box>
              </Stack>
            </Grid>
            <Grid  size={{xs:12,md:4}}>
              <Stack direction={'column'} alignItems={'flex-start'}>
                <Box>
                  <Typography variant="h5" sx={{color:'#ED553B',mb:'10px'}}>COMPANY</Typography>
                </Box>
                <Box>
                  <List>
                    <ListItem sx={{padding:'0px'}}>
                      <NavLink style={{fontSize:'15px',marginBottom:'4px',color:'#173F5F',fontWeight:'500'}}>HOME</NavLink>
                    </ListItem>
                       <ListItem sx={{padding:'0px'}}>
                      <NavLink style={{fontSize:'15px',marginBottom:'4px',color:'#173F5F',fontWeight:'500'}}>BOOKS</NavLink>
                    </ListItem>
                       <ListItem sx={{padding:'0px'}}>
                      <NavLink style={{fontSize:'15px',marginBottom:'4px',color:'#173F5F',fontWeight:'500'}}>NEW RELEASE</NavLink>
                    </ListItem>
                          <ListItem sx={{padding:'0px'}}>
                      <NavLink style={{fontSize:'15px',marginBottom:'4px',color:'#173F5F',fontWeight:'500'}}>ABOUT</NavLink>
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </Grid>
            <Grid  size={{xs:12,md:4}}>
               <Stack direction={'column'} >
                <Box>
                  <Typography variant="h5" sx={{color:'#ED553B',mb:'15px'}}>LATEST NEWS</Typography>
                </Box>
                <Box display={'flex'} mb={'10px'}>
                      <Box>
                        <img src={newsImage1} alt="" width={'85px'} />
                      </Box>
                      <Box paddingLeft={'20px'}>
                        <Typography variant="subtitle1" sx={{color:'#ED553B',fontWeight:'500',mb:'5px'}}>
                          Nostrud exercitation
                        </Typography>
                        <Typography variant="body2" sx={{fontSize:'13px',lineHeight:'1.1',mb:'6px'}}>
                          Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography variant="body2" sx={{fontSize:'13px',color:'#F6D55C'}}>
                          15 April 2022
                        </Typography>
                      </Box>
                </Box>
                 <Box display={'flex'} >
                      <Box>
                        <img src={newsImage2} alt="" width={'85px'} />
                      </Box>
                      <Box paddingLeft={'20px'}>
                        <Typography variant="subtitle1" sx={{color:'#ED553B',fontWeight:'500',mb:'5px'}}>
                          Nostrud exercitation
                        </Typography>
                        <Typography variant="body2" sx={{fontSize:'13px',lineHeight:'1.1',mb:'6px'}}>
                          Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography variant="body2" sx={{fontSize:'13px',color:'#F6D55C'}}>
                          15 April 2022
                        </Typography>
                      </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
