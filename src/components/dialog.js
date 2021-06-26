import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    TextField,
    Button,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Grid,
    Typography
} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import { Getcontactbyid, CreateProfile, UpdateProfile } from '../helpers/data-access';
import { ValidateEmail, ValidateName, ValidatePhone } from '../helpers/utility'


export const ContactDialog = ({ returnClose, openModal, handleCloseModal, selectedContactDetails, isEdit, onExit }) => {
    const [firstNameText, setFirstNameText] = useState("")
    const [lastNameText, setlastNameText] = useState("")
    const [emailText, setEmailText] = useState("")
    const [phoneText, setPhoneText] = useState("")
    const [status, setStatus] = useState("active")
    const [contactId, setContactId] = useState(0)

    const [touchedFirstName, setTouchFirstName] = useState(false)
    const [touchedLastName, setTouchLastName] = useState(false)
    const [touchedEmail, setTouchEmail] = useState(false)
    const [touchedPhone, setTouchPhone] = useState(false)


    useEffect(() => {
        if (isEdit) {
            setContactId(selectedContactDetails.id)
            setFirstNameText(selectedContactDetails.firstName)
            setlastNameText(selectedContactDetails.lastName)
            setEmailText(selectedContactDetails.email)
            setPhoneText(selectedContactDetails.phoneNumber)
            setStatus(selectedContactDetails.status == "Active" ? "active" : "inactive")
        }
    }, [])

    const handleSaveClick = (e) => {
        e.preventDefault();

        if (isEdit) {
            UpdateProfile({
                "id": contactId,
                "firstName": firstNameText,
                "lastName": lastNameText,
                "email": emailText,
                "phoneNumber": phoneText,
                "status": status === "active" ? 1 : 0
            }).then(response => {
                if (!response) {
                    alert("Something went wrong!")
                }

            })
        }
        else {
            var create = CreateProfile({
                "firstName": firstNameText,
                "lastName": lastNameText,
                "email": emailText,
                "phoneNumber": phoneText,
                "status": status === "active" ? 1 : 0
            }).then(response => {
                if (!response) {
                    alert("Something went wrong!")
                }
                setModalOpen(false)
            })
        }
        return returnClose()
    }

    const handleFirstNameChange = (e) => {
        setFirstNameText(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setlastNameText(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmailText(e.target.value)
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }
    const handlePhoneNumberChange = (e) => {
        setPhoneText(e.target.value)
    }
    const handleFirstNameTouch = () => {
        setTouchFirstName(true)
    }
    const handleLastTouch = () => {
        setTouchLastName(true)
    }
    const handleEmailTouch = () => {
        setTouchEmail(true)
    }
    const handlePhoneNumberTouch = () => {
        setTouchPhone(true)
    }

    return (
        <div>
            <Dialog
                open={openModal}
                keepMounted
                onExit={onExit}
                fullWidth={true}
                maxWidth="sm"
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <Typography variant="h6" gutterBottom>
                      User Profile
                    </Typography>
                </DialogContent>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField required
                                label="FirstName"
                                onChange={handleFirstNameChange}
                                value={firstNameText}
                                onFocus={handleFirstNameTouch}
                                error={touchedFirstName && (firstNameText === "" || ValidateName(firstNameText) === false)}
                                helperText={touchedFirstName && (firstNameText === "" || ValidateName(firstNameText) === false) ? "Enter valid First Name" : ""}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField required
                                label="LastName"
                                onFocus={handleLastTouch}
                                onChange={handleLastNameChange}
                                value={lastNameText}
                                error={touchedLastName && (lastNameText === "" || ValidateName(lastNameText) === false)}
                                helperText={touchedLastName && (lastNameText === "" || ValidateName(lastNameText) === false) ? "Enter valid Lastname" : ""}

                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                label="Email Address"
                                onChange={handleEmailChange}
                                value={emailText}
                                onFocus={handleEmailTouch}
                                error={touchedEmail && (emailText === "" || ValidateEmail(emailText) === false)}
                                helperText={touchedEmail && (emailText === "" || ValidateEmail(emailText) === false) ? "Enter valid Email Address" : ""}


                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField required
                                label="Phone Number"
                                onChange={handlePhoneNumberChange}
                                value={phoneText}
                                onFocus={handlePhoneNumberTouch}
                                error={touchedPhone && (phoneText === "" || ValidatePhone(phoneText) === false)}
                                helperText={touchedPhone && (phoneText === "" || ValidatePhone(phoneText) === false) ? "Enter valid Phone Number" : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item sm={6} >
                                <FormLabel component="legend">Status</FormLabel>
                            </Grid>
                            <Grid item sm={6}>
                                <RadioGroup required aria-label="status" name="status" value={status} onChange={handleStatusChange}>
                                    <FormControlLabel value="active" control={<Radio />} label="Active" />
                                    <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
                                </RadioGroup>
                            </Grid>

                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogContent>
                    <div className="buttonRow">
                        <Button variant="contained" data-testid="saveButton" color="secondary" startIcon={<SaveIcon />} onClick={handleSaveClick} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
