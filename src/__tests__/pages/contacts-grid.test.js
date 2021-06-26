import {render,fireEvent,screen,act} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ContactGrid } from '../../pages/contacts-grid'

test('Contacts Grid Renders properly',async()=>{
    const promise=Promise.resolve()
    render(<ContactGrid/>)

    expect(screen.getByText(/First Name/i)).toBeInTheDocument()
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument()
    expect(screen.getByText(/Email Address/i)).toBeInTheDocument()
    
    await act(()=>promise)
})

test('Add New Contacts Check',async()=>{
    const promise=Promise.resolve()
    render(<ContactGrid/>)

    fireEvent.click(screen.getByTestId("addNewContactButton"))
    expect(await screen.getByText(/User Profile/i)).toBeInTheDocument()

    await act(()=>promise)

})