import{Box} from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import styles from "./styles.module.css";
import { useState } from 'react';
import { Modal } from '@material-ui/core';
import Swal from 'sweetalert2';
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Form(){
    const axios = require('axios').default;
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const submitForm = ()=>{
        axios.post('api/hello',{name:name, surname:surname, email:email}).then((response)=>{
            console.log('response: ',response);
            handleClose();
            Swal.fire({
              title: "Operación realizada con éxito!",
              icon: "success",
              timer: 2500,
              showConfirmButton: false,
            });
        }).catch((error)=>{
            console.log(error);
            Swal.fire({
                title:'Error',
                text:'Error al enviar',
                icon:'error',
                time:2500,
                showConfirmButton:false
            })
        })
    }

    

    return (
      <>
        <div className={styles.container}>
          <Button className={styles.openModalBtn} variant="contained" onClick={handleOpen}>
            Open modal fom
          </Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Contact Form
            </Typography>
            <div className={styles.Box}>
              <div className={styles.container}>
                <TextField
                  type="text"
                  className={styles.title}
                  placeholder="Nombre"
                  onChange={(e) => setName(e.target.value)}
                ></TextField>
                <TextField
                  type="text"
                  className={styles.title}
                  placeholder="Apellido"
                  onChange={(e) => setSurname(e.target.value)}
                ></TextField>
                <TextField
                  type="text"
                  className={styles.title}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
              </div>
              <div className={styles.container}>
                <Button variant="contained" onClick={submitForm}>
                  Submit
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
        {/* <Modal open={open} onClose={handleClose}>
          <div className={styles.container}>
            <Box className={styles.Box} sx={style}>
              <TextField
                type="text"
                className={styles.title}
                placeholder="Nombre"
                onChange={(e) => setName(e.target.value)}
              ></TextField>
              <TextField
                type="text"
                className={styles.title}
                placeholder="Apellido"
                onChange={(e) => setSurname(e.target.value)}
              ></TextField>
              <TextField
                type="text"
                className={styles.title}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
              <div className={styles.container}>
                <Button variant="contained" onClick={submitForm}>
                  Submit
                </Button>
              </div>
            </Box>
          </div>
        </Modal> */}
      </>
    );
}

export default Form;