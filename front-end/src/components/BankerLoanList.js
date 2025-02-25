// // import React, { useEffect, useState } from 'react';
// // import { Button, Container, Table } from 'reactstrap';
// // import HeaderBanker from './HeaderBanker';
// // import Footer from './Footer';

// // const BankerLoanList = () => {
// //   const [applications, setApplications] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const user = JSON.parse(localStorage.getItem('user')) || {};
// //   const username = user.name || 'User';

// //   useEffect(() => {
// //     fetch('http://localhost:8080/api/applications', {
// //       headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
// //     })
// //       .then(response => response.json())
// //       .then(data => {
// //         setApplications(data);
// //         setLoading(false);
// //       })
// //       .catch(error => console.error('Error fetching applications:', error));
// //   }, []);

// //   const updateStatus = async (id, status) => {
// //     try {
// //       const response = await fetch(`http://localhost:8080/api/application/${id}/status?status=${status}`, {
// //         method: 'PUT',
// //         headers: {
// //           'Authorization': `Bearer ${localStorage.getItem('token')}`,
// //           'Content-Type': 'application/json',
// //         },
// //       });
// //       if (response.ok) {
// //         setApplications(applications.map(app =>
// //           app.id === id ? { ...app, loanStatus: status } : app
// //         ));
// //       }
// //     } catch (error) {
// //       console.error('Error updating loan status:', error);
// //     }
// //   };

// //   if (loading) return <p>Loading...</p>;

// //   return (
    
// //     <Container>
// //     <HeaderBanker username={username} />
// //       <h3>Loan Applications</h3>
// //       <Table>
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>Loan Amount</th>
// //             <th>Type</th>
// //             <th>Date</th>
// //             <th>Status</th>
// //             <th>Update Status</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {applications.map(app => (
// //             <tr key={app.id}>
// //               <td>{app.name} {app.surname}</td>
// //               <td>{app.email}</td>
// //               <td>{app.loanAmount} {app.loanCurrency}</td>
// //               <td>{app.loanType}</td>
// //               <td>{new Intl.DateTimeFormat('en-US').format(new Date(app.loanDate))}</td>
// //               <td>{app.loanStatus}</td>
// //               <td>
// //                 <Button color="success" onClick={() => updateStatus(app.id, 'APPROVED')}>Approve</Button>
// //                 <Button color="danger" onClick={() => updateStatus(app.id, 'REJECTED')}>Reject</Button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </Table>
// //       <Footer/>
// //     </Container>
// //   );
// // };

// // export default BankerLoanList;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button, Container, Table } from 'reactstrap';
// import HeaderBanker from './HeaderBanker';
// import Footer from './Footer';

// const BankerLoanList = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user')) || {};
//   const username = user.name || 'User';

//   useEffect(() => {
//     fetch('http://localhost:8080/api/applications', {
//       headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//     })
//       .then(response => response.json())
//       .then(data => {
//         setApplications(data);
//         setLoading(false);
//       })
//       .catch(error => console.error('Error fetching applications:', error));
//   }, []);

//   const updateStatus = async (id, status) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/application/${id}/status?status=${status}`, {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         setApplications(applications.map(app =>
//           app.id === id ? { ...app, loanStatus: status } : app
//         ));
//       }
//     } catch (error) {
//       console.error('Error updating loan status:', error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <Container>
//       <HeaderBanker username={username} />
//       <h3>Loan Applications</h3>
//       <Table hover>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Loan Amount</th>
//             <th>Type</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Update Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map(app => (
//             <tr 
//               key={app.id} 
//               onClick={() => navigate(`/banker/loan/${app.id}`)} 
//               style={{ cursor: 'pointer' }}
//             >
//               <td>{app.name} {app.surname}</td>
//               <td>{app.email}</td>
//               <td>{app.loanAmount} {app.loanCurrency}</td>
//               <td>{app.loanType}</td>
//               <td>{new Intl.DateTimeFormat('en-US').format(new Date(app.loanDate))}</td>
//               <td>{app.loanStatus}</td>
//               <td>
//                 {app.loanStatus === 'APPLIED' && (
//                   <>
//                     <Button color="warning" onClick={(e) => { e.stopPropagation(); updateStatus(app.id, 'EVALUATION'); }}>
//                       Start Evaluation
//                     </Button>{' '}
//                     <Button color="success" onClick={(e) => { e.stopPropagation(); updateStatus(app.id, 'APPROVED'); }}>
//                       Approve
//                     </Button>{' '}
//                     <Button color="danger" onClick={(e) => { e.stopPropagation(); updateStatus(app.id, 'REJECTED'); }}>
//                       Reject
//                     </Button>
//                   </>
//                 )}
//                 {app.loanStatus === 'EVALUATION' && (
//                   <>
//                     <Button color="success" onClick={(e) => { e.stopPropagation(); updateStatus(app.id, 'APPROVED'); }}>
//                       Approve
//                     </Button>{' '}
//                     <Button color="danger" onClick={(e) => { e.stopPropagation(); updateStatus(app.id, 'REJECTED'); }}>
//                       Reject
//                     </Button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <Footer />
//     </Container>
//   );
// };

// export default BankerLoanList;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Table, Input } from 'reactstrap';
import HeaderBanker from './HeaderBanker';
import Footer from './Footer';

const BankerLoanList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
 

  useEffect(() => {
    fetch('http://localhost:8080/api/applications', {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => response.json())
      .then(data => {
        setApplications(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching applications:', error));
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:8080/api/application/${id}/status?status=${status}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setApplications(applications.map(app =>
          app.id === id ? { ...app, loanStatus: status } : app
        ));
      }
    } catch (error) {
      console.error('Error updating loan status:', error);
    }
  };

  const filteredApplications = applications.filter(app => 
    (app.name && app.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (app.surname && app.surname.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (app.email && app.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (app.loanAmount && app.loanAmount.toString().includes(searchQuery)) ||
    (app.loanType && app.loanType.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (app.loanStatus && app.loanStatus.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <HeaderBanker/>
      <h3>Loan Applications</h3>
      <Input 
        type="text" 
        placeholder="Search..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Loan Amount</th>
            <th>Type</th>
            <th>Date</th>
            <th>Loan Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map(app => (
            <tr 
              key={app.id} 
              onClick={() => navigate(`/banker/loan/${app.id}`)} 
              style={{ cursor: 'pointer' }}
            >
              <td>{app.name} {app.surname}</td>
              <td>{app.email}</td>
              <td>{app.loanAmount} {app.loanCurrency}</td>
              <td>{app.loanType}</td>
              <td>{new Intl.DateTimeFormat('en-US').format(new Date(app.loanDate))}</td>
              <td>{app.duration} months</td>
              <td>{app.loanStatus}</td>
              {/* <td>
                {app.loanStatus === 'APPLIED' && (
                  <>
                    <Button color="warning" onClick={(e) => { e.stopPropagation(); updateStatus(app.id, 'EVALUATION'); }}>
                      Start Evaluation
                    </Button>{' '}
                    <Button color="success" onClick={(e) => { e.stopPropagation(); updateStatus(app.id, 'APPROVED'); }}>
                      Approve
                    </Button>{' '}
                    <Button color="danger" onClick={(e) => { e.stopPropagation(); updateStatus(app.id, 'REJECTED'); }}>
                      Reject
                    </Button>
                  </>
                )}
                {app.loanStatus === 'EVALUATION' && (
                  <>
                    <Button color="success" onClick={(e) => { e.stopPropagation(); updateStatus(app.id, 'APPROVED'); }}>
                      Approve
                    </Button>{' '}
                    <Button color="danger" onClick={(e) => { e.stopPropagation(); updateStatus(app.id, 'REJECTED'); }}>
                      Reject
                    </Button>
                  </>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer />
    </Container>
  );
};

export default BankerLoanList;
