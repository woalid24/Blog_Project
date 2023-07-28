import React, { useEffect , useState } from 'react';
import Layout from '../Layout/Layout.jsx';
import { useParams } from 'react-router-dom';
import BlogDetails from '../Component/BlogDetails.jsx';
import { postDetails } from '../APIRequest/APIRequest.js';
import Loader from '../Component/Loader.jsx';


const DetailsPage = () => {
    let {id} = useParams();
    const [list , setList] = useState(null);
    useEffect(() => {
        (async()=>{
            let res = await postDetails(id);
            setList(res);
        })()

    },[id])
    return (
        <Layout>
            {list === null ? <Loader /> :<BlogDetails list={list}/>}
        </Layout>
    );
};

export default DetailsPage;