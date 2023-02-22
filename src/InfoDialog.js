import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Box, Grid, IconButton } from '@mui/material';
import CardContainer from './CardContainer';
import PortfolioCard3 from './PortfolioCard copy 2';
import websites from './SoftwareSeeds';
import { CloseOutlined, RemoveCircleOutline } from '@mui/icons-material';
import InfoDialogCard from './InfoDialogCard copy';
import teslaMartV2 from './AboutTeslaMartV2Seeds';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog({open, handleClose}) {

    const scrollRef = React.useRef(null)

    React.useEffect(()=> {
        scrollRef.current && console.log(scrollRef.current.scrollLeft)
    }, [open])

  return (
    <Dialog open={open} onClose={handleClose} sx={{bgcolor: 'transparent', '& .MuiPaper-root': {backgroundColor: 'transparent', boxShadow: 'none', minWidth: '100vw'}}}>
      <Box ref={scrollRef} display='flex' direction='row' overflow='scroll' wrap='nowrap' height='80vh' width='100%' position='relative' px={3} columnGap={3} bgcolor='transparent'>
      {teslaMartV2.map((t, index) => (
          index > 0 && <InfoDialogCard key={t.heading} heading={t.heading} image={t.imageUrl} body={t.text} background={t.background} color={t.color} />
      ))}
      </Box>
      <IconButton onClick={handleClose} sx={{backgroundColor: 'white', position: 'fixed', top: 40, right: 15, zIndex: 10}}>
           <CloseOutlined />
           </IconButton> 
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default function InfoDialog({open, handleClose}) {

  return (
      <SimpleDialog
        open={open}
        handleClose={handleClose}
      />
  );
}