import { Form } from 'react-bootstrap';

const AdvertiseForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Form onSubmit = {handleSubmit}>
            <div classname = "row">

                    <Form.Group>
                        <Form.Control placeholder = "Name" type="text" required />
                    </Form.Group>


                    <Form.Group>
                        <Form.Control placeholder = "Phone Number" type="number" required />
                    </Form.Group>


                    <Form.Group>
                        <Form.Control placeholder = "Email address" type="email" required />
                    </Form.Group>


                    <Form.Group>
                        <Form.Control placeholder = "Industry" type="text" required />
                    </Form.Group>
                    <button className = "btn btn-primary" type = "submit">Submit</button>
            </div>
        </Form>
    )
}

export default AdvertiseForm;
