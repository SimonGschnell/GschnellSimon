import React from 'react'
import FormControl from 'react-bootstrap/FormControl'

let customDropdownHeader = React.forwardRef(
    ({ search, handle, children, style, className, 'aria-labelledby': labeledBy }, ref) => {
       
         

        return(
            <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
          >
              <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          value={search}
          onChange={handle}
          
        />
            
            {
                
                children
                .filter((child)=> { return !search || child.props.value.toLowerCase().includes(search.toLowerCase())})
                
            }
            </div>)
   
})

export default customDropdownHeader