import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import { Box, Grid, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import InfoDialogCard from './InfoDialogCard copy';

function SimpleDialog({open, handleClose, details}) {

    const scrollRef = React.useRef(null)

    React.useEffect(()=> {
        scrollRef.current && console.log(scrollRef.current.scrollLeft)
    }, [open])

  return (
    <Dialog open={open} onClose={handleClose} sx={{bgcolor: 'transparent', '& .MuiPaper-root': {backgroundColor: 'transparent', boxShadow: 'none', minWidth: '100vw'}}}>
      <Box ref={scrollRef} display='flex' direction='row' overflow='scroll' wrap='nowrap' height='80vh' width='100%' px={3} columnGap={3} bgcolor='transparent'>
      {details && details.map((t) => (
          <InfoDialogCard key={t.heading} handleClose={handleClose} heading={t.heading} image={t.imageUrl} body={t.text} background={t.background} color={t.color} />
      ))}

      </Box>
      {/* <IconButton onClick={handleClose} color='primary' sx={{backgroundColor: 'white', position: 'fixed', top: 'calc(50% - 40vh)', left: {xs: '95%', md: '58%'}, zIndex: 10, marginTop:'12px', '&:hover': {backgroundColor: 'white', opacity: .8}, transition: 'all .3s ease-in-out'}}>
           <CloseOutlined sx={{'&:hover': 'transform(scale(1.2))'}} />
           </IconButton>  */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default function InfoDialog({open, handleClose, details}) {

  return (
      <SimpleDialog
        open={open}
        handleClose={handleClose}
        details={details}
      />
  );
}