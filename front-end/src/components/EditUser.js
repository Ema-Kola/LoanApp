import React, { useState, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

const ClientDetailsForm = () => {
  const [details, setDetails] = useState({
    name: '',
    surname: '',
    fatherName: '',
    birthDate: '',
    birthPlace: '',
    phone: '',
    education: '',
    maritalStatus: ''
  });

 

  useEffect(() => {
    const fetchClientDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/client/details`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });

        if (response.status === 404) {
          console.warn("No client details found, initializing empty form.");
          return;
        }

        const data = await response.json();
        if (data.birthDate) {
            data.birthDate = data.birthDate.split('T')[0]; 
          }
          setDetails(prevDetails => ({
            ...prevDetails,
            name: data.name || '',
            surname: data.surname || '',
            fatherName: data.fatherName || '',
            birthDate: data.birthDate || '',
            birthPlace: data.birthPlace || '',
            phone: data.phone || '',
            education: data.education || '',
            maritalStatus: data.maritalStatus || '',
          }));
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchClientDetails();
  }, []);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDetails = {
      ...details,
      birthDate: details.birthDate ? new Date(details.birthDate).toISOString() : null,
    };

    try {
      const response = await fetch(`http://localhost:8080/client/details`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formattedDetails)
      });

      if (!response.ok) {
        throw new Error(`Failed to save details, status: ${response.status}`);
      }
    

      const data = await response.json();
      if (data.birthDate) {
        data.birthDate = data.birthDate.split('T')[0];
      }
      const storedUser = JSON.parse(localStorage.getItem('user')) || {};
      storedUser.name = data.name;  
      localStorage.setItem('user', JSON.stringify(storedUser));
      setDetails(data);
     
     
      alert('Details saved successfully');
    } catch (error) {
      console.error('Error saving details:', error);
    }
  };

  return (
    <Container>
      <Header />
      <h3>Update Your Personal Details</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">First Name</Label>
          <Input type="text" name="name" value={details.name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label for="surname">Surname</Label>
          <Input type="text" name="surname" value={details.surname} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label for="fatherName">Father's Name</Label>
          <Input type="text" name="fatherName" value={details.fatherName} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="birthDate">Birth Date</Label>
          <Input type="date" name="birthDate" value={details.birthDate} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="birthPlace">Birth Place</Label>
          <Input type="text" name="birthPlace" value={details.birthPlace} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="phone" value={details.phone} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="education">Education</Label>
          <Input type="select" name="education" value={details.education} onChange={handleChange} >
            <option value="">Select</option>
            <option value="PA_ARSIM">Pa Arsim</option>
            <option value="FILLOR">Fillor</option>
            <option value="MESME">Mesme</option>
            <option value="LARTE">E larte</option>
            <option value="DOKTORATURE">Doktorature</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="maritalStatus">Marital Status</Label>
          <Input type="select" name="maritalStatus" value={details.maritalStatus} onChange={handleChange} >
            <option value="">Select</option>
            <option value="BEQAR">Beqar</option>
            <option value="MARTUAR">Martuar</option>
          </Input>
        </FormGroup>
        <Button color="primary" type="submit">Save Details</Button>
      </Form>
      <Footer />
    </Container>
  );
};

export default ClientDetailsForm;
