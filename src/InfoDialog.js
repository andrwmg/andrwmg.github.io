import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import { Box, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import InfoDialogCard from './InfoDialogCard copy';
import teslaMartV2 from './AboutTeslaMartV2Seeds';

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
      <IconButton onClick={handleClose} color='primary' sx={{backgroundColor: 'white', position: 'fixed', top: 0, right: 0, zIndex: 10, marginTop:'12px', marginRight: '100px', '&:hover': {backgroundColor: 'white', opacity: .8}, transition: 'all .3s ease-in-out'}}>
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