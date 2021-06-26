import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import '../css/contacts-grid.css'


export const ContactsDataGrid = ({ rows, columns, pageSize, spacing,loading, handleFormEdit }) => {
    return (
        <DataGrid 
        className='contactsGrid' 
        spacing={spacing} 
        loading={loading} 
        rows={rows} 
        columns={columns} 
        pageSize={pageSize} 
        disableColumnMenu={true}
        data-testid="contactDataGrid"
        />

    )
}