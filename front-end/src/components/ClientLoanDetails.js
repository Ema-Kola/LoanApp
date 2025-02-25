import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Table } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

const ClientLoanDetails = () => {
  const { id } = useParams();
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`http://localhost:8080/api/application/${id}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => response.json())
      .then(data => {
        setLoan(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching loan details:', error));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!loan) return <p>Loan not found.</p>;

  return (
    <Container>
      <Header  />
      <h3>Loan Details</h3>
      <Table>
        <tbody>
          <tr><th>Client Name</th><td>{loan.name} {loan.surname}</td></tr>
          <tr><th>Father's Name</th><td>{loan.fatherName}</td></tr>
          <tr><th>Birth Date</th><td>{new Intl.DateTimeFormat('en-US').format(new Date(loan.birthDate))}</td></tr>
          <tr><th>Birth Place</th><td>{loan.birthPlace}</td></tr>
          <tr><th>Email</th><td>{loan.email}</td></tr>
          <tr><th>Phone</th><td>{loan.phone}</td></tr>
          <tr><th>Education</th><td>{loan.education}</td></tr>
          <tr><th>Marital Status</th><td>{loan.maritalStatus}</td></tr>

          <tr><th>Income Type</th><td>{loan.incomeType}</td></tr>
          <tr><th>Income Amount</th><td>{loan.incomeAmount} {loan.currency}</td></tr>
          <tr><th>Income Start</th><td>{new Intl.DateTimeFormat('en-US').format(new Date(loan.incomeStart))}</td></tr>
          

          <tr><th>Loan Type</th><td>{loan.loanType}</td></tr>
          <tr><th>Loan Amount</th><td>{loan.loanAmount} {loan.loanCurrency}</td></tr>
          <tr><th>Loan Date</th><td>{new Intl.DateTimeFormat('en-US').format(new Date(loan.loanDate))}</td></tr>
          <tr><th>Loan Duration</th><td>{loan.duration} months</td></tr>
          <tr><th>Loan Status</th><td>{loan.loanStatus}</td></tr>

         
        </tbody>
      </Table>
      <Footer />
    </Container>
  );
};

export default ClientLoanDetails;
