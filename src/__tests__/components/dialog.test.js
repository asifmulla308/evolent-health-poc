import {render,fireEvent,screen,act} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ContactDialog } from '../../components/dialog'

test('Contacts Register works properly',async()=>{
    const promise=Promise.resolve()
    render(<ContactDialog/>)

    expect(screen.getByText(/User Profile/i)).toBeInTheDocument()
    expect(screen.getByText(/FirstName/i)).toBeInTheDocument()
    expect(screen.getByText(/Lastname/i)).toBeInTheDocument()

    
    await act(()=>promise)
})
