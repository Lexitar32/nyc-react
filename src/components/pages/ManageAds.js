import React, { useState } from 'react';
import ButtonContainer from '../reducer/Userpage/modal/ButtonContainer';
import ModalAds from './ModalAds';
import ViewDocs from "./ViewDocs"
function ManageAds() {
    const [show, setShow] = useState(false);
    const [view, setView] = useState(false);
    const handleShow = () => {
        setShow(show => !show)
    }
    const ViewDocs = () => {
        setView(view => !view)
    }


    return (

        <div className="container">

            <div className="col-11 col-md-12 col-lg-12 py-4 ml-0  mx-auto">
                <h4 className="text-left text-nowrap mx-auto" >Manage Ads</h4>
                <div className="d-flex flex-wrap col-12 col-md-12 col-lg-12" style={{ alignItems: 'center', background: '#686868', boxShadow: '0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(55.63px)', borderRadius: '10px' }}>

                    <div className=" col-md-3 my-2  col-lg-3  py-3" >
                        <img src="/images/WomanFace2.png" className="d-flex" alt="placeholder" style={{ height: " 173px", width: "161px" }} />
                    </div>
                    <div className="col-10  mt-0 col-md-8 col-lg-9 m-0">
                        <p classNAme="text-nowrap" style={{ fontFamily: "ubuntu", width: "100%", color: "#F8C800", fontSize: "18px", fontWeight: "500", lineHeight: "25px" }}>Information : <span style={{ color: "#fff", marginLeft: "0" }}> Number of adverts determined by your package plan </span></p>
                    </div>

                </div>


                {/* Button trigger modal */}
                <div className=" d-flex flex-wrap " style={{ gap: "20px" }}>
                    <ButtonContainer

                        onClick={handleShow}
                        name="Create Advert" />

                    <ButtonContainer className="py-3"
                        name="View Advert "
                        onClick={ViewDocs}
                    />

                </ div>
            </ div>
            <ModalAds show={show} setShow={setShow} handleShow={handleShow} />
            {/* <ViewDocs view={view} setView={setView} ViewDocs={ViewDocs} /> */}
            {view ? <ViewDocs /> : null}
        </div >

    )
}
export default ManageAds