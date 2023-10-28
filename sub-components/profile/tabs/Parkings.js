import React, {useState} from 'react'
//import sub components
import {CarouselCard} from "@/sub-components/Stepper/ImageCarousel/Carousel";
import dynamic from "next/dynamic";
import ReactPaginate from 'react-paginate';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {Col, Row, Card} from 'react-bootstrap';


const ParkingTab  = (props) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [dataParking,setdataParking]=useState([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16}])
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedData = dataParking.slice(offset, offset + itemsPerPage);


    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        {
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 }];

    return (
        <Row>
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center flex-row-reverse bg-white">
                        <Stack spacing={2} sx={{ width: 250 }}>
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                options={top100Films.map((option) => option.title)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Search by parkZone"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                        <h4 className="mb-0">{`List of parking `}</h4>
                    </Card.Header>
                    <Card.Body>
                       <div className={"flex-container"}>
                           {
                               paginatedData.map(arr=>{
                                   return <CarouselCard/>;
                               })
                           }
                       </div>
                       <ReactPaginate
                           pageCount={Math.ceil(dataParking.length / itemsPerPage)}
                           pageRangeDisplayed={5}
                           marginPagesDisplayed={2}
                           onPageChange={handlePageChange}
                           previousLabel={"< Previous"}
                           nextLabel={"Next >"}
                           containerClassName={"paginationBttns"}
                           previousLinkClassName={"previousBttn"}
                           nextLinkClassName={"nextBttn"}
                           disabledClassName={"paginationDisabled"}
                           activeClassName= {"paginationActive"}
                       />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
export default dynamic(() => Promise.resolve(ParkingTab), { ssr: false });