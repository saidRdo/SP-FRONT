// import node module libraries
import Link from 'next/link';
import { Col, Row, Image } from 'react-bootstrap';
import EditProfile from "@/sub-components/profile/edit-profile/EditProfile";
import {useState} from "react";

const ProfileHeader = ({lang,CurrentTab,ChangeTab,user}) => {

  return (
    <Row className="align-items-center">
      <Col xl={12} lg={12} md={12} xs={12}>
        {/* Bg */}
        <div className="pt-20 rounded-top" style={{ background: 'url(/images/background/profile-cover.jpg) no-repeat', backgroundSize: 'cover' }}>
        </div>
        <div className="bg-white rounded-bottom smooth-shadow-sm ">
          <div className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4 flex-wrap">
            <div className="d-flex align-items-center">
              {/* avatar */}
              <div className="avatar-xxl avatar-indicators avatar-online me-2 position-relative d-flex justify-content-end align-items-end mt-n10">
                <Image src={`${user?.user?.picture ? user?.user?.picture : "/images/avatar/defaultIMG.png"}`} className="avatar-xxl rounded-circle border border-4 border-white-color-40" alt="" />
              </div>
              {/* text */}
              <div className="lh-1">
                <h2 className="mb-0">
                  {user?.user?.username}
                </h2>
                <p className="mb-0 d-block">{`@SmartParking`}</p>
              </div>
            </div>
          </div>
          {/* nav */}
          <ul className="nav nav-lt-tab px-4" id="pills-tab" role="tablist">
            <li className="nav-item">
              <Link className={`nav-link ${CurrentTab===1?'active':''}`} href="#" onClick={(e)=>{
                e.preventDefault();
                ChangeTab(1)
              }}>{lang?.profileHeader.tabs.overview}</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${CurrentTab===2?'active':''}`} href="#" onClick={(e)=>{
                e.preventDefault();
                ChangeTab(2)
              }}>{lang?.profileHeader.tabs.zones}</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${CurrentTab===3?'active':''}`} href="#" onClick={(e)=>{
                e.preventDefault();
                ChangeTab(3)
              }}>{lang?.profileHeader.tabs.agents}</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${CurrentTab===4?'active':''}`} href="#" onClick={(e)=>{
                e.preventDefault();
                ChangeTab(4)
              }}>{lang?.profileHeader.tabs.parking}</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${CurrentTab===5?'active':''}`} href="#" onClick={(e)=>{
                e.preventDefault();
                ChangeTab(5)
              }}>{lang?.profileHeader.tabs.guardian}</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${CurrentTab===6?'active':''}`} href="#" onClick={(e)=>{
                e.preventDefault();
                ChangeTab(6)
              }}>{lang?.profileHeader.tabs.capteur}</Link>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  )
}

export default ProfileHeader