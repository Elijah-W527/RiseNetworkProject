import React, { useEffect, useState, useRef } from 'react';
import { Container, Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { projectFirestore } from '../../firebase';
const Search = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const formValue = useRef(null);
    const defaultPic = "https://firebasestorage.googleapis.com/v0/b/auth-development-53223.appspot.com/o/profile%20picture.png?alt=media&token=6ebbbce8-3caf-4017-a8c3-0b126224e632";

    useEffect(() => {
        const getData = async () => {
            const data = allUsers.docs.filter((doc) =>
                doc.id.toLowerCase().slice(0, search.length) === search || doc.id.toLowerCase().slice(0, search.length) === search)
            if (search && data.length > 0) {
                setUsers(data.map(doc => {
                    return { id: doc.id, img: doc.data().img }
                }));
            }
            else {
                setUsers([])
            }
        }
        allUsers.docs && getData();
    }, [search])

    useEffect(() => {
        const getUsers = async () => {
            setAllUsers(await projectFirestore.collection('usernames').get());
            console.log(allUsers.docs);
        }
        getUsers();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(formValue.current.value.toLowerCase());
    }


    return (
        <>
        
    <div className="building">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="mx-auto text-center">
              <h2 className="title text-light h1 my-2">Search Accounts</h2>
            </div>
          </div>
        </div>
      </div>
      <Container>
            <Form className="mt-5" onChange={handleSubmit} onSubmit={handleSubmit}>
                <InputGroup>
                    <Form.Control ref={formValue} type="search" placeholder="Enter name here" aria-label="search" />
                    <Button type="submit">Search</Button>
                </InputGroup>
            </Form>
            <div className="mt-3">
                {users.length ? users.map(user =>
                    <div className="card mb-1">
                        <div className="row">
                            <img className="img-responsive mr-3" width="50" height="50" src={user.img ? user.img : defaultPic}
                                alt="Profile" />
                            <Link to={'/user/' + user.id}>{user.id}</Link>
                        </div>
                    </div>
                ) : <p>No results found.</p>}
            </div>
        </Container>
        </>
    )
}

export default Search;