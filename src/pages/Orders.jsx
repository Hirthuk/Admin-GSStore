import React from 'react'

const Orders = () => {

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-xl font-bold">Input Test</h2>
      
      {/* Test Regular Input */}
      <input 
        type="text" 
        className="border p-2 w-full"
        placeholder="Type something..."
      />
      
      {/* Test File Input */}
      <label className="block border p-4 cursor-pointer">
        Click to test file upload
        <input type="file" className="hidden" />
      </label>
    </div>
  
  )
}

export default Orders