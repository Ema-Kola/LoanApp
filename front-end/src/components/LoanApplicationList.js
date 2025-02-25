// // import React, { useEffect, useState } from 'react';
// // import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// // import { Link } from 'react-router-dom';
// // import {jwtDecode} from 'jwt-decode';
// // import Footer from './Footer';
// // import Header from './Header';

// // const LoanApplicationList = () => {
// //   const [applications, setApplications] = useState([]);
// //   const [loading, setLoading] = useState(false);
  
// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       const decodedToken = jwtDecode(token);
// //       console.log('Decoded Token:', decodedToken);
      
      

// //       setLoading(true);
// //     //   const fetchApplications = async () => {
// //     //     try {
// //     //         console.log(clientId);
// //     //       const response = await fetch(`http://localhost:8080/api/client/${clientId}/applications`);
// //     //       if (response.ok) {
// //     //         const data = await response.json();
// //     //         setApplications(data);
// //     //       } else {
// //     //         console.error('Failed to fetch applications');
// //     //       }
// //     //     } catch (error) {
// //     //       console.error('Error fetching applications:');
// //     //     } finally {
// //     //       setLoading(false);
// //     //     }
// //     //   };
// //     //   fetchApplications();
    
// // if (token) {
// //   const clientId = jwtDecode(token).id;
// //   setLoading(true);
// //   const fetchApplications = async () => {
// //     try {
// //       console.log(clientId);
// //       const response = await fetch(`http://localhost:8080/api/client/${clientId}/applications`, {
// //         method: 'GET',
// //         headers: {
// //           'Authorization': `Bearer ${token}`,
// //         }
// //       });
// //       if (response.ok) {
// //         const data = await response.json();
// //         setApplications(data);
// //       } else {
// //         console.error('Failed to fetch applications');
// //       }
// //     } catch (error) {
// //       console.error('Error fetching applications:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// //   fetchApplications();
// // }

// //     }
// //   }, []);

// //   const remove = async (id, status) => {
// //     if (status !== 'APPLIED') {
// //       alert('Only applications with status "APPLIED" can be deleted.');
// //       return;
// //     }
// //     try {
// //       const response = await fetch(`http://localhost:8080/api/application/${id}`,{
// //         method: 'DELETE',
// //         headers: {
// //           Accept: 'application/json',
// //           'Content-Type': 'application/json',
// //         },
// //       });
// //       if (response.ok) {
// //         setApplications(applications.filter(app => app.id !== id));
// //       } else {
// //         console.error('Failed to delete application');
// //       }
// //     } catch (error) {
// //       console.error('Error deleting application:', error);
// //     }
// //   };

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   const loanApplicationList = applications.map(application => (
// //     <tr key={application.id}>
// //       <td>{application.name} {application.surname}</td>
// //       <td>{application.email}</td>
// //       <td>{application.loanAmount} {application.loanCurrency}</td>
// //       <td>{application.loanType}</td>
// //       <td>{new Intl.DateTimeFormat('en-US').format(new Date(application.loanDate))}</td>
// //       <td>{application.loanStatus}</td>
// //       <td>
// //         <ButtonGroup>
// //           <Button size="sm" color="primary" tag={Link} to={`/loanApplications/${application.id}`}>Edit</Button>
// //           <Button size="sm" color="danger" onClick={() => remove(application.id, application.loanStatus)}>Delete</Button>
// //         </ButtonGroup>
// //       </td>
// //     </tr>
// //   ));
// //   const user = JSON.parse(localStorage.getItem('user')) || {};
// //   const username = user.name || 'User';

// //   return (
// //     <div>
// //       <Header username={username} />

// //       <Container fluid>
// //         <div className="float-end">
// //           <Button color="success" tag={Link} to="/loanApplications/new">Add Loan Application</Button>
// //         </div>
// //         <h3>Loan Applications</h3>
// //         <Table className="mt-4">
// //           <thead>
// //             <tr>
// //               <th>Name</th>
// //               <th>Email</th>
// //               <th>Loan Amount</th>
// //               <th>Loan Type</th>
// //               <th>Loan Date</th>
// //               <th>Status</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {loanApplicationList}
// //           </tbody>
// //         </Table>
// //       </Container>
// //       <Footer/>
// //     </div>
// //   );
// // };

// // export default LoanApplicationList;


// // import React, { useEffect, useState } from 'react';
// // import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// // import { Link } from 'react-router-dom';
// // import { jwtDecode } from 'jwt-decode';
// // import Footer from './Footer';
// // import Header from './Header';

// // const LoanApplicationList = () => {
// //   const [applications, setApplications] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       const decodedToken = jwtDecode(token);
// //       console.log('Decoded Token:', decodedToken);

// //       const clientId = decodedToken.id;
// //       setLoading(true);
      
// //       const fetchApplications = async () => {
// //         try {
// //           console.log(clientId);
// //           const response = await fetch(`http://localhost:8080/api/client/${clientId}/applications`, {
// //             method: 'GET',
// //             headers: {
// //               'Authorization': `Bearer ${token}`,
// //             }
// //           });

// //           if (response.ok) {
// //             const data = await response.json();
// //             setApplications(data);
// //           } else {
// //             console.error('Failed to fetch applications');
// //           }
// //         } catch (error) {
// //           console.error('Error fetching applications:', error);
// //         } finally {
// //           setLoading(false);
// //         }
// //       };
// //       fetchApplications();
// //     }
// //   }, []);

// //   const remove = async (id, status) => {
// //     // if (status !== 'APPLIED') {
// //     //   alert('Only applications with status "APPLIED" can be deleted.');
// //     //   return;
// //     // }
// //     const token = localStorage.getItem('token'); 
  
// //     if (!token) {
// //       console.error('No token found');
// //       return;
// //     }
  
// //     try {
// //       const response = await fetch(`http://localhost:8080/api/application/${id}`, {
// //         method: 'DELETE',
// //         headers: {
// //           'Authorization': `Bearer ${token}`, 
// //           'Accept': 'application/json',
// //           'Content-Type': 'application/json',
// //         },
// //       });
  
// //       if (response.ok) {
// //         setApplications(applications.filter(app => app.id !== id));
// //       } else {
// //         console.error('Failed to delete application');
// //       }
// //     } catch (error) {
// //       console.error('Error deleting application:', error);
// //     }
// //   };
  


// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   const loanApplicationList = applications.map(application => (
// //     <tr key={application.id}>
// //       <td>{application.name} {application.surname}</td>
// //       <td>{application.email}</td>
// //       <td>{application.loanAmount} {application.loanCurrency}</td>
// //       <td>{application.loanType}</td>
// //       <td>{new Intl.DateTimeFormat('en-US').format(new Date(application.loanDate))}</td>
// //       <td>{application.loanStatus}</td>
// //       <td>
// //         {application.loanStatus === 'APPLIED' && ( 
// //           <ButtonGroup>
// //             <Button size="sm" color="primary" tag={Link} to={`/loanApplications/${application.id}`}>Edit</Button>
// //             <Button size="sm" color="danger" onClick={() => remove(application.id, application.loanStatus)}>Delete</Button>
// //           </ButtonGroup>
// //         )}
// //       </td>
// //     </tr>
// //   ));

// //   const user = JSON.parse(localStorage.getItem('user')) || {};
// //   const username = user.name || 'User';

// //   return (
// //     <div>
// //       <Header username={username} />

// //       <Container fluid>
// //         <div className="float-end">
// //           <Button color="success" tag={Link} to="/loanApplications/new">Add Loan Application</Button>
// //         </div>
// //         <h3>Loan Applications</h3>
// //         <Table className="mt-4">
// //           <thead>
// //             <tr>
// //               <th>Name</th>
// //               <th>Email</th>
// //               <th>Loan Amount</th>
// //               <th>Loan Type</th>
// //               <th>Loan Date</th>
// //               <th>Status</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {loanApplicationList}
// //           </tbody>
// //         </Table>
// //       </Container>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default LoanApplicationList;

// import React, { useEffect, useState } from 'react';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
// import Footer from './Footer';
// import Header from './Header';

// const LoanApplicationList = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       const clientId = decodedToken.id;
//       setLoading(true);
      
//       const fetchApplications = async () => {
//         try {
//           const response = await fetch(`http://localhost:8080/api/client/${clientId}/applications`, {
//             method: 'GET',
//             headers: {
//               'Authorization': `Bearer ${token}`,
//             }
//           });

//           if (response.ok) {
//             const data = await response.json();
//             setApplications(data);
//           } else {
//             console.error('Failed to fetch applications');
//           }
//         } catch (error) {
//           console.error('Error fetching applications:', error);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchApplications();
//     }
//   }, []);

//   const remove = async (id, status) => {
//     const token = localStorage.getItem('token'); 
  
//     if (!token) {
//       console.error('No token found');
//       return;
//     }
  
//     try {
//       const response = await fetch(`http://localhost:8080/api/application/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`, 
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         setApplications(applications.filter(app => app.id !== id));
//       } else {
//         console.error('Failed to delete application');
//       }
//     } catch (error) {
//       console.error('Error deleting application:', error);
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   const loanApplicationList = applications.map(application => (
//     <tr 
//       key={application.id} 
//       onClick={() => navigate(`/clientLoan/${application.id}`)} 
//       style={{ cursor: 'pointer' }}
//     >
//       <td>{application.name} {application.surname}</td>
//       <td>{application.email}</td>
//       <td>{application.loanAmount} {application.loanCurrency}</td>
//       <td>{application.loanType}</td>
//       <td>{new Intl.DateTimeFormat('en-US').format(new Date(application.loanDate))}</td>
//       <td>{application.loanStatus}</td>
//       <td onClick={(e) => e.stopPropagation()}>
//         {application.loanStatus === 'APPLIED' && ( 
//           <ButtonGroup>
//             <Button size="sm" color="primary" tag={Link} to={`/loanApplications/${application.id}`}>Edit</Button>
//             <Button size="sm" color="danger" onClick={() => remove(application.id, application.loanStatus)}>Delete</Button>
//           </ButtonGroup>
//         )}
//       </td>
//     </tr>
//   ));

//   const user = JSON.parse(localStorage.getItem('user')) || {};
//   const username = user.name || 'User';

//   return (
//     <div>
//       <Header username={username} />
//       <Container fluid>
//         <div className="float-end">
//           <Button color="success" tag={Link} to="/loanApplications/new">Add Loan Application</Button>
//         </div>
//         <h3>Loan Applications</h3>
//         <Table className="mt-4">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Loan Amount</th>
//               <th>Loan Type</th>
//               <th>Loan Date</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loanApplicationList}
//           </tbody>
//         </Table>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default LoanApplicationList;

import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Footer from './Footer';
import Header from './Header';

const LoanApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const clientId = decodedToken.id;
      setLoading(true);
      
      const fetchApplications = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/client/${clientId}/applications`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            }
          });

          if (response.ok) {
            const data = await response.json();
            setApplications(data);
          } else {
            console.error('Failed to fetch applications');
          }
        } catch (error) {
          console.error('Error fetching applications:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchApplications();
    }
  }, []);

  const remove = async (id, status) => {
    const token = localStorage.getItem('token'); 

    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/application/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setApplications(applications.filter(app => app.id !== id));
      } else {
        console.error('Failed to delete application');
      }
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const loanApplicationList = applications.map(application => (
    <tr 
      key={application.id} 
      onClick={() => navigate(`/clientLoan/${application.id}`)} 
      style={{ cursor: 'pointer' }}
    >
      <td>{application.name} {application.surname}</td>
      <td>{application.email}</td>
      <td>{application.loanAmount} {application.loanCurrency}</td>
      <td>{application.loanType}</td>
      <td>{new Intl.DateTimeFormat('en-US').format(new Date(application.loanDate))}</td>
      <td>{application.loanStatus}</td>
      <td>{application.duration}</td> 
      <td onClick={(e) => e.stopPropagation()}>
        {(application.loanStatus === 'APPLIED' || application.loanStatus === 'RETURNED') && ( 
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={`/loanApplications/${application.id}`}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => remove(application.id, application.loanStatus)}>Delete</Button>
          </ButtonGroup>
        )}
      </td>
    </tr>
  ));

  
  return (
    <div>
      <Header/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/loanApplications/new">Add Loan Application</Button>
        </div>
        <h3>Loan Applications</h3>
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Loan Amount</th>
              <th>Loan Type</th>
              <th>Loan Date</th>
              <th>Status</th>
              <th>Loan Duration (Months)</th> 
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.length > 0 ? (
              loanApplicationList
            ) : (
              <tr>
                <td colSpan="8" className="text-center">No applications yet</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  );
  
//   return (
//     <div>
//       <Header/>
//       <Container fluid>
//         <div className="float-end">
//           <Button color="success" tag={Link} to="/loanApplications/new">Add Loan Application</Button>
//         </div>
//         <h3>Loan Applications</h3>
//         <Table className="mt-4">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Loan Amount</th>
//               <th>Loan Type</th>
//               <th>Loan Date</th>
//               <th>Status</th>
//               <th>Loan Duration (Months)</th> 
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loanApplicationList}
//           </tbody>
//         </Table>
//       </Container>
//       <Footer />
//     </div>
//   );
};

export default LoanApplicationList;
