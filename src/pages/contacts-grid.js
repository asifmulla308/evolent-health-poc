import React, { useState, useEffect } from 'react';
import { IconButton,  FormControlLabel, Fab, Select } from '@material-ui/core';
import { GetContactsList,  DeleteProfile, UpdateStatus } from '../helpers/data-access'
import '../css/contacts-grid.css'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { blue, red } from "@material-ui/core/colors";
import { ContactsDataGrid } from '../components/datagrid';
import AddIcon from '@material-ui/icons/Add'
import { ContactDialog } from '../components/dialog';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


var selectedRowData = [];
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
var data = []
export const ContactGrid = () => {
    const classes = useStyles();
    const [rowsData, setRowsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    useEffect(async () => {
        await GetContactsList().then((response) => {
            if (response) {
                if (response.status === 200) {
                    if (response.data) {
                        data = response.data.map((p, index) => ({
                            id: p.id,
                            firstName: p.firstname,
                            lastName: p.lastname,
                            email: p.email,
                            phoneNumber: p.phonenumber,
                            status: p.status ? "Active" : "Inactive"
                        })
                        )
                    }
                    setRowsData(data)

                    setIsLoading(false)
                }
            }
        })
            // .catch(error => {
            //     console.log("catch: "+error)
            //     setIsLoading(false)
            // })
    }, [isLoading, rowsData.length])


    const ContactEdits = ({ rowData }) => {
        const handleEditClick = () => {
            setIsEdit(true)
            setModalOpen(true)
            selectedRowData = rowData
        };

        return (
            <FormControlLabel
                control={
                    <IconButton
                        color="secondary"
                        aria-label="add an alarm"
                        onClick={handleEditClick}
                        placeholder="Edit"
                    >
                        <EditIcon style={{ color: blue[500] }} />
                    </IconButton>
                }
            />
        );
    };

    const ContactDelete = ({ index }) => {
        const handleDeleteContact = () => {
            DeleteProfile(index).then((response) => {
                if (response) {
                    
                }
                else{
alert("Something went wrong!")
                }
            })
        };

        return (
            <FormControlLabel
                control={
                    <IconButton
                        color="secondary"
                        aria-label="delete contact"
                        onClick={handleDeleteContact}
                        placeholder="Delete"
                    >
                        <DeleteIcon style={{ color: red[500] }} />
                    </IconButton>
                }
            />
        );
    };

    const StatusDropDown = ({ rowData }) => {

        const handleChange = (e) => {
            if (rowData.status === e.target.value) {
                return
            }
            else {
                rowData.status = e.target.value;
                UpdateStatus(rowData.id, rowData.status).then((response) => {
                    if (!response) {
                        alert("Something went wrong!")
                    }
                })
            }
        };

        return (
            <FormControlLabel
                control={
                    <FormControl className={classes.formControl}>
                        <Select
                            value={rowData.status}
                            onChange={handleChange}
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >

                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="Inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>

                }
            />
        );
    };

    const columns = [
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'email', headerName: 'Email Address', width: 200 },
        { field: 'phoneNumber', headerName: 'Phone Number',sortable: false, width: 200 },
        {
            field: "status",
            headerName: "Status",
            sortable: false,
            width: 160,
            renderCell: (params) => {
                return (
                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ cursor: "pointer" }}
                    >
                        <StatusDropDown rowData={params.row} />
                    </div>
                );
            }
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            width: 140,
            disableClickEventBubbling: true,

            renderCell: (params) => {
                return (
                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ cursor: "pointer" }}
                    >
                        <ContactEdits rowData={params.row} />
                        <ContactDelete index={params.row.id} />
                    </div>
                );
            }
        }

    ]
    const handleClose = () => {
        selectedRowData = []
        setModalOpen(!modalOpen)
    }
    const returnClose = () => {
        selectedRowData = []
        setModalOpen(!modalOpen)
        //window.location.reload();
    }

    return (
        <div>
           <Grid justify="flex-end" container width={90} className='gridAddContact'>
                <Fab color="primary" aria-label="add" onClick={() => setModalOpen(true)}>
                    <AddIcon data-testid="addNewContactButton"/>
                </Fab>
            </Grid>
            <div className='gridContainer'>
                <ContactsDataGrid spacing={1} loading={isLoading} rows={rowsData} columns={columns} pageSize={10} >

                </ContactsDataGrid>
            </div>
            {modalOpen &&
                <ContactDialog returnClose={returnClose} openModal={modalOpen} handleCloseModal={handleClose} selectedContactDetails={selectedRowData} isEdit={isEdit} />
            }
        </div>
    )

}