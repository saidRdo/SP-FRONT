// import node module libraries
import Link from 'next/link';
import { Col, Row, Image } from 'react-bootstrap';
import EditProfile from "@/sub-components/profile/edit-profile/EditProfile";

const ProfileHeader = ({user}) => {
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
                <Image src={`${user?.user?.picture}`} className="avatar-xxl rounded-circle border border-4 border-white-color-40" alt="" />
              </div>
              {/* text */}
              <div className="lh-1">
                <h2 className="mb-0">
                  {user?.user?.username}
                </h2>
                <p className="mb-0 d-block">Admin {user?.city?.name}</p>
              </div>
            </div>
            <div>
              <EditProfile user={user}/>
            </div>
          </div>
          {/* nav */}
          <ul className="nav nav-lt-tab px-4" id="pills-tab" role="tablist">
            <li className="nav-item">
              <Link className="nav-link active" href="#">Overview</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Zone</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Parking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Teams</Link>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  )
}

export default ProfileHeader