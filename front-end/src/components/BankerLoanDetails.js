// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Table, Button } from 'reactstrap';
// import HeaderBanker from './HeaderBanker';
// import Footer from './Footer';

// const BankerLoanDetails = () => {
//   const { id } = useParams();
//   const [loan, setLoan] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user')) || {};
//   const username = user.name || 'User';

//   useEffect(() => {
//     fetch(`http://localhost:8080/api/application/${id}`, {
//       headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//     })
//       .then(response => response.json())
//       .then(data => {
//         setLoan(data);
//         setLoading(false);
//       })
//       .catch(error => console.error('Error fetching loan details:', error));
//   }, [id]);

//   // Define updateStatus function inside this component
//   const updateStatus = async (newStatus) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/application/${id}/status?status=${newStatus}`, {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         setLoan({ ...loan, loanStatus: newStatus });
//       } else {
//         console.error('Failed to update status');
//       }
//     } catch (error) {
//       console.error('Error updating loan status:', error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (!loan) return <p>Loan not found.</p>;

//   return (
//     <Container>
//       <HeaderBanker username={username} />
//       <h3>Loan Details</h3>
//       <Table>
//         <tbody>
//           <tr><th>Name</th><td>{loan.name} {loan.surname}</td></tr>
//           <tr><th>Email</th><td>{loan.email}</td></tr>
//           <tr><th>Phone</th><td>{loan.phone}</td></tr>
//           <tr><th>Loan Type</th><td>{loan.loanType}</td></tr>
//           <tr><th>Amount</th><td>{loan.loanAmount} {loan.loanCurrency}</td></tr>
//           <tr><th>Loan Date</th><td>{new Intl.DateTimeFormat('en-US').format(new Date(loan.loanDate))}</td></tr>
//           <tr><th>Status</th><td>{loan.loanStatus}</td></tr>
//         </tbody>
//       </Table>

//       {loan.loanStatus === 'APPLIED' && (
//         <>
//           <Button color="warning" onClick={() => updateStatus('EVALUATION')}>Start Evaluation</Button>{' '}
//           <Button color="success" onClick={() => updateStatus('APPROVED')}>Approve</Button>{' '}
//           <Button color="danger" onClick={() => updateStatus('REJECTED')}>Reject</Button>
//         </>
//       )}
//       {loan.loanStatus === 'EVALUATION' && (
//         <>
//           <Button color="success" onClick={() => updateStatus('APPROVED')}>Approve</Button>{' '}
//           <Button color="danger" onClick={() => updateStatus('REJECTED')}>Reject</Button>
//         </>
//       )}

//       <Footer />
//     </Container>
//   );
// };

// export default BankerLoanDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Container, Table, Button } from 'reactstrap';
// import HeaderBanker from './HeaderBanker';
// import Footer from './Footer';

// const BankerLoanDetails = () => {
//   const { id } = useParams();
//   const [loan, setLoan] = useState(null);
//   const [loading, setLoading] = useState(true);
 

//   useEffect(() => {
//     fetch(`http://localhost:8080/api/application/${id}`, {
//       headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//     })
//       .then(response => response.json())
//       .then(data => {
//         setLoan(data);
//         setLoading(false);
//       })
//       .catch(error => console.error('Error fetching loan details:', error));
//   }, [id]);

//   const updateStatus = async (newStatus) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/application/${id}/status?status=${newStatus}`, {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         setLoan({ ...loan, loanStatus: newStatus });
//       } else {
//         console.error('Failed to update status');
//       }
//     } catch (error) {
//       console.error('Error updating loan status:', error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (!loan) return <p>Loan not found.</p>;

//   return (
//     <Container>
//       <HeaderBanker />
//       <h3>Loan Details</h3>
//       <Table>
//         <tbody>
//         <tr><th>Client Name</th><td>{loan.name} {loan.surname}</td></tr>
//           <tr><th>Father's Name</th><td>{loan.fatherName}</td></tr>
//           <tr><th>Birth Date</th><td>{new Intl.DateTimeFormat('en-US').format(new Date(loan.birthDate))}</td></tr>
//           <tr><th>Birth Place</th><td>{loan.birthPlace}</td></tr>
//           <tr><th>Email</th><td>{loan.email}</td></tr>
//           <tr><th>Phone</th><td>{loan.phone}</td></tr>
//           <tr><th>Education</th><td>{loan.education}</td></tr>
//           <tr><th>Marital Status</th><td>{loan.maritalStatus}</td></tr>

//           <tr><th>Income Type</th><td>{loan.incomeType}</td></tr>
//           <tr><th>Income Amount</th><td>{loan.incomeAmount} {loan.currency}</td></tr>
//           <tr><th>Income Start</th><td>{new Intl.DateTimeFormat('en-US').format(new Date(loan.incomeStart))}</td></tr>
          

//           <tr><th>Loan Type</th><td>{loan.loanType}</td></tr>
//           <tr><th>Loan Amount</th><td>{loan.loanAmount} {loan.loanCurrency}</td></tr>
//           <tr><th>Loan Date</th><td>{new Intl.DateTimeFormat('en-US').format(new Date(loan.loanDate))}</td></tr>
//           <tr><th>Loan Duration</th><td>{loan.duration} months</td></tr>
//           <tr><th>Loan Status</th><td>{loan.loanStatus}</td></tr>

//         </tbody>
//       </Table>

//       {/* Actions based on loan status */}
//       {loan.loanStatus === 'APPLIED' && (
//         <>
//           <Button color="warning" onClick={() => updateStatus('EVALUATION')}>Start Evaluation</Button>{' '}
//           <Button color="success" onClick={() => updateStatus('APPROVED')}>Approve</Button>{' '}
//           <Button color="danger" onClick={() => updateStatus('REJECTED')}>Reject</Button>
//         </>
//       )}
//       {loan.loanStatus === 'EVALUATION' && (
//         <>
//           <Button color="success" onClick={() => updateStatus('APPROVED')}>Approve</Button>{' '}
//           <Button color="danger" onClick={() => updateStatus('REJECTED')}>Reject</Button>
//         </>
//       )}

//       <Footer />
//     </Container>
//   );
// };

// export default BankerLoanDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Table, Button, Input } from 'reactstrap';
import HeaderBanker from './HeaderBanker';
import Footer from './Footer';

const BankerLoanDetails = () => {
  const { id } = useParams();
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');

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

  const updateStatus = async (newStatus) => {
    try {
      const response = await fetch(`http://localhost:8080/api/application/${id}/status?status=${newStatus}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setLoan({ ...loan, loanStatus: newStatus });
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating loan status:', error);
    }
  };

  const returnApplication = async () => {
    try {
        console.log("Sending comment:", comment);
      const response = await fetch(`http://localhost:8080/api/application/${id}/return?comment=${encodeURIComponent(comment)}`, {
        method: 'POST', // Changed from PUT to POST
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }), // Include the comment in the request
      });

      if (response.ok) {
        setLoan({ ...loan, loanStatus: 'RETURNED' });
      } else {
        console.error('Failed to return application');
      }
    } catch (error) {
      console.error('Error returning loan application:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!loan) return <p>Loan not found.</p>;

  return (
    <Container>
      <HeaderBanker />
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

      {/* Actions based on loan status */}
      {loan.loanStatus === 'APPLIED' && (
        <>
          <Button color="warning" onClick={() => updateStatus('EVALUATION')}>Start Evaluation</Button>{' '}
        </>
      )}
      {loan.loanStatus === 'REAPPLIED' && (
        <>
          <Button color="success" onClick={() => updateStatus('APPROVED')}>Approve</Button>{' '}
          <Button color="danger" onClick={() => updateStatus('REJECTED')}>Reject</Button>{' '}
        </>
      )}

      {(loan.loanStatus === 'EVALUATION' || loan.loanStatus === 'APPLIED') && (
        <>
          <Button color="success" onClick={() => updateStatus('APPROVED')}>Approve</Button>{' '}
          <Button color="danger" onClick={() => updateStatus('REJECTED')}>Reject</Button>{' '}
          <h4>Comments</h4>
          <Input
            type="textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <Button color="secondary" onClick={returnApplication}>
            {loan.loanStatus === 'APPLIED' ? 'Return Application' : 'Submit Comment'}
          </Button>
        </>
      )}

      <Footer />
    </Container>
  );
};

export default BankerLoanDetails;
