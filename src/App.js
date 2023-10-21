import React, { Fragment, useEffect, useRef, useState } from 'react';
import './App.css';
import Input from './Input';

//Functional component
function HelloWorld(props) {

    const [isTrue, setIsTrue] = useState(false)
    const [crowd, setCrowd] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");

    //refs
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const dobRef = useRef(null);




    const toggleTrue = () => {
        if (isTrue) {
            setIsTrue(false)
        }
        else {
            setIsTrue(true)
        }
    };

    useEffect(() => {
        console.log("useEffect fired")

        let people = [
            {
                id: 1,
                firstName: "Mary",
                lastName: "Jones",
                dob: "1997-05-02",
            },
            {
                id: 2,
                firstName: "Jack",
                lastName: "Smith",
                dob: "1999-02-04",
            }
        ]
        setCrowd(people);
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        if (lastName != "") {
            addPerson(firstName, lastName, dob)
        }
    }


    const addPerson = (newFirst, newLast, newDOB) => {
        let newPerson = {
            id: crowd.length + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDOB,

        }

        const newList = crowd.concat(newPerson);


        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName < b.lastName) {
                return 1;
            }
            return 0;
        })

        setCrowd(sorted);
        setFirstName("");
        setLastName("");
        setDob("");

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        dobRef.current.value = "";

    }


    return (
        <Fragment>
            <hr />
            <h1 className='h1-green'>{props.msg}</h1>
            <hr />
            {isTrue &&
                <Fragment>
                    <p>The current value of isTrue is True</p>
                    <hr />
                </Fragment>

            }
            <hr />
            {isTrue
                ? <p>Is True</p>
                : <p>Is False</p>

            }

            <hr />
            <a href='#!' className='btn btn-outline-secondary' onClick={toggleTrue} >Toggle isTrue</a>
            <hr />

            <form autoComplete='off' onSubmit={handleSubmit}>


                <Input
                    title="First Name"
                    type="text"
                    name="first-name"
                    ref={firstNameRef}
                    autoComplete="first-name-new"
                    className="form-control"
                    onChange={(event) => setFirstName(event.target.value)}

                ></Input>

                <Input
                    title="Last Name"
                    type="text"
                    name="last-name"
                    ref={lastNameRef}
                    autoComplete="last-name-new"
                    className="form-control"
                    onChange={(event) => setLastName(event.target.value)}

                ></Input>

                <Input
                    title="Date of Birth"
                    type="date"
                    name="dob"
                    ref={dobRef}
                    autoComplete="dob-new"
                    className="form-control"
                    onChange={(event) => setDob(event.target.value)}

                ></Input>

                <input type='submit' value="Submit" className='btn btn-primary'></input>

            </form>

            <div>
                First Name: {firstName} <br />
                Last Name: {lastName} <br />
                DOB: {dob} <br />

            </div>


            <h3>People</h3>
            <ul className='list-group'>
                {crowd.map((m) => (
                    <li key={m.id} className='list-group-item'>{m.firstName} {m.lastName}</li>
                ))}

            </ul>
        </Fragment>

    );
}

export default HelloWorld;