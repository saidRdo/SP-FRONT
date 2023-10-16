'use client'
// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import {
  AboutMe,
  ProfileHeader
} from '@/sub-components'
import {useSession} from "next-auth/react";

const Profile = () => {
  const {data:session}=useSession();

    return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Overview"/>

      {/* Profile Header  */}
      <ProfileHeader user={session?.user?.admin}/>

      {/* content */}
      <div className="py-6">
        <Row>

          {/* About Me */}
          <AboutMe user={session?.user?.admin}/>

          {/* Projects Contributions
          <ProjectsContributions />*/}

          {/* Recent From Blog
          <RecentFromBlog />*/}

          <Col xl={6} lg={12} md={12} xs={12} className="mb-6">

            {/* My Team
            <MyTeam />*/}

            {/* Activity Feed
            <ActivityFeed />*/}

          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Profile