// import node module libraries
import Link from 'next/link';
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
    Row,
    Col,
    Image,
    Dropdown,
    ListGroup,
} from 'react-bootstrap';

// simple bar scrolling used for notification item scrolling
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


// import hooks
import useMounted from '@/hooks/useMounted';
import {useSession} from "next-auth/react";
import dynamic from "next/dynamic";

const QuickMenu = (props) => {

    const hasMounted = useMounted();
    
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const {data:session}=useSession()

    const Notifications = () => {
        return (
            <SimpleBar style={{ maxHeight: '300px' }}>
                <ListGroup variant="flush">
                    {/*<ListGroup.Item className={index === 0 ? 'bg-light' : ''} >*/}

                    <ListGroup.Item className={'bg-light'} >
                        <Row>
                            <Col>
                                <Link href="#" className="text-muted">
                                    <h5 className=" mb-1">Rishi Chopra</h5>
                                    <p className="mb-0"> Mauris blandit erat id nunc blandit, ac eleifend dolor pretium.</p>
                                </Link>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className={'bg-light'} >
                        <Row>
                            <Col>
                                <Link href="#" className="text-muted">
                                    <h5 className=" mb-1">Rishi Chopra</h5>
                                    <p className="mb-0"> Mauris blandit erat id nunc blandit, ac eleifend dolor pretium.</p>
                                </Link>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </SimpleBar>
        );
    }



    const QuickMenuDesktop = () => {
        return (
        <ListGroup as="ul" bsPrefix='navbar-nav' className="navbar-right-wrap ms-auto d-flex nav-top-wrap">

            {/* Notifications
            <Dropdown as="li" className="stopevent ml-2 mr-2">
                <Dropdown.Toggle as="a"
                                 bsPrefix=' '
                                 id="dropdownNotification"
                                 className="btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted">
                    <i className="fe fe-bell"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                    className={`dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-${props.langauge==="ar"?'start':'end'} py-0`}
                    aria-labelledby="dropdownNotification"
                    align="end"
                    show
                >
                    <Dropdown.Item className="mt-3" bsPrefix=' ' as="div"  >
                        <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                            <span className="h4 mb-0">Notifications</span>
                            <Link href="/" className="text-muted">
                                <span className="align-middle">
                                    <i className="fe fe-settings me-1"></i>
                                </span>
                            </Link>
                        </div>

                        <Notifications />

                        <div className="border-top px-3 pt-3 pb-3">
                            <Link href="#" className="text-link fw-semi-bold">
                                See all Notifications
                            </Link>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>*/}
            {/* end Notification*/}
            {/* profile*/}

            <Dropdown as="li" className="ms-2  ml-2 mr-2">
                <Dropdown.Toggle
                    as="a"
                    bsPrefix=' '
                    className="rounded-circle"
                    id="dropdownUser">
                    <div className="avatar avatar-md avatar-indicators avatar-online">
                        <Image alt="avatar" src={'/images/avatar/avatar-1.jpg'} className="rounded-circle" />
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu
                    className={`dropdown-menu dropdown-menu-${props.langauge==="ar"?'start':'end'}` }
                    align="end"
                    aria-labelledby="dropdownUser"
                    show
                    >
                    <Dropdown.Item as="div" className="px-4 pb-0 pt-2" bsPrefix=' '>
                            <div className="lh-1 ">
                                <h5 className="mb-1"> OneDustry </h5>
                                <Link href={`/${props.langauge}/dashboard/profile`} className="text-inherit fs-6">View my profile</Link>
                            </div>
                            <div className=" dropdown-divider mt-3 mb-2"></div>
                    </Dropdown.Item>
                    <Dropdown.Item href={`/${props.langauge}/dashboard/settings`} >
                        <i className="fe fe-settings me-2"></i> Account Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <i className="fe fe-power me-2"></i>Sign Out
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* end profile*/}
        </ListGroup>
    )}

    const QuickMenuMobile = () => {
        return (
        <ListGroup as="ul" bsPrefix='navbar-nav' className="navbar-right-wrap ms-auto d-flex nav-top-wrap">
            {/* <Dropdown as="li" className="stopevent ml-2 mr-2">
                <Dropdown.Toggle as="a"
                    bsPrefix=' '
                    id="dropdownNotification"
                    className="btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted">
                    <i className="fe fe-bell"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                    className={`dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-${props.langauge==="ar"?'start':'end'} py-0`}
                    aria-labelledby="dropdownNotification"
                    align="end"
                    >
                    <Dropdown.Item className="mt-3" bsPrefix=' ' as="div"  >
                        <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                            <span className="h4 mb-0">Notifications</span>
                            <Link href="/" className="text-muted">
                                <span className="align-middle">
                                    <i className="fe fe-settings me-1"></i>
                                </span>
                            </Link>
                        </div>
                        <Notifications />
                        <div className="border-top px-3 pt-3 pb-3">
                            <Link href="#" className="text-link fw-semi-bold">
                                See all Notifications
                            </Link>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>*/}
            <Dropdown as="li" className="ms-2 ml-2 mr-2">
                <Dropdown.Toggle
                    as="a"
                    bsPrefix=' '
                    className="rounded-circle"
                    id="dropdownUser">
                    <div className="avatar avatar-md avatar-indicators avatar-online">
                        <Image alt="avatar" src='/images/avatar/avatar-1.jpg' className="rounded-circle" />
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu
                    className={`dropdown-menu dropdown-menu-${props.langauge==="ar"?'start':'end'} `}
                    align="end"
                    aria-labelledby="dropdownUser"
                    >
                    <Dropdown.Item as="div" className="px-4 pb-0 pt-2" bsPrefix=' '>
                            <div className="lh-1 ">
                                <h5 className="mb-1"> OneDustry </h5>
                                <Link href={`/${props.langauge}/dashboard/profile`} className="text-inherit fs-6">View my profile</Link>
                            </div>
                            <div className=" dropdown-divider mt-3 mb-2"></div>
                    </Dropdown.Item>
                    <Dropdown.Item href={`/${props.langauge}/dashboard/settings`}>
                        <i className="fe fe-settings me-2"></i> Account Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <i className="fe fe-power me-2"></i>Sign Out
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ListGroup>
    )}

    return (
        <Fragment>
            { hasMounted && isDesktop ? <QuickMenuDesktop /> : <QuickMenuMobile />}
        </Fragment>
    )
}

export default dynamic(() => Promise.resolve(QuickMenu), { ssr: false });