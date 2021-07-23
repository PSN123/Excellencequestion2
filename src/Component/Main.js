import React, { useEffect, useState } from 'react'
import Pagination from '../Component/Pagination';

const Main = () => {

    const [user, setUser] = useState([]);
    const [showPerPage,setShowperpage] =useState(1);
    const [Paging,setPaging] =useState({
        star:0,
        end:showPerPage,
    });
    
    const getData = async () => {
        try {
            const response = await fetch(`https://reqres.in/api/users?page=1`);
            const resjson = await response.json();
            setUser(resjson.data);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const onPageChange=(start,end)=>{
        setPaging({start:start,end:end})

    }

    return (
        <>
        <div className="container">
          <div className="row">
            {
                user.slice(Paging.star,Paging.end).map((currentElement, index) => {
                    return (
                        <>
                        
                            <div className="col-md-4" key={currentElement.index}>
                            <div className="card" style={{width: '18rem'}}>
                                <img src={currentElement.avatar} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{currentElement.first_name}</h5>
                                    <p className="card-text">{currentElement.email}</p>
                                </div>
                            </div>
                            </div>
                            
                        </>
                )

            })
            
        }
        </div>
        </div>
        <Pagination 
        showPerPage={showPerPage} 
        onPageChange={onPageChange}
        total={user.length}
        />
        
        </>
    )}


export default Main
