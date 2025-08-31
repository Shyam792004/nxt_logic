import React, { useState } from 'react'

const QR_Gen = () => {

    const [img,setImg]=useState("")
    const [loading,setLoading]=useState(false);
    async function generateQR(){
        setLoading(true);
        try{
           const url="";
           setImg(url);
        }catch(error){
           console.error("qrcode generating error"+error);
        }finally{
            setLoading(false);
        }

    }
    function downloadQR(name)
    {
         alert(`Welcome ${name}`)
    }
  return (
    <div className='app-container'>
     <h1>QR_CODE_GENERATOR</h1>
     {loading && <p>Please wait...</p>}
    {/* <img  src={img} className="qr-code-image"/> onMouseEnter={()=>downloadQR("tutorJoes")} */}
    {img && <img src={img} className="qr-code-image"/>}
        <div>
            <label htmlFor="dataInput" className="input-label" >
                   Data for QR Code:
            </label>
            <input type="text" id="dataInput" placeholder="Enter data for QR-Code"/>
            <label htmlFor="sizeInput" className="input-label" >
                   Image size (e.g., 150):
            </label>
            <input type="text" id="sizeInput"placeholder="Enter img size"/>
            <button className="generate-button" onClick={generateQR}>Generate QR Code</button>
            <button className="download-button" onClick={()=>downloadQR("tutorJoes")}>Download QR Code</button>
        </div>
        <p className="footer">Designed by <a href="https://www.tutorjoes.com">tutor joes</a></p>
    </div>
  )
}

export default QR_Gen;