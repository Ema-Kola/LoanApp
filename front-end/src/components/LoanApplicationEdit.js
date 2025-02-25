// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
// // import {jwtDecode} from 'jwt-decode';
// // import Header from './Header';
// // import Footer from './Footer';

// // const LoanApplicationEdit = () => {
// //   const initialFormState = {
// //     name: '',
// //     surname: '',
// //     email: '',
// //     loanAmount: '',
// //     loanCurrency: '',
// //     loanType: 'SHTEPI', // Default value for loanType
// //     loanDate: '',
// //     loanStatus: 'APPLIED', // Default value for loanStatus
// //     fatherName: '',
// //     birthDate: '',
// //     birthPlace: '',
// //     phone: '',
// //     education: '',
// //     maritalStatus: 'MARTUAR', // Default value for maritalStatus
// //     incomeType: 'PAGA', // Default value for incomeType
// //     incomeAmount: '',
// //     currency: '',
// //     client: { id: null },
// //   };

// //   const [loanApplication, setLoanApplication] = useState(initialFormState);
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();
// //   const { id } = useParams(); // Get id from the route params


// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     const clientId = jwtDecode(token).id;
// //     loanApplication.client.id = clientId;
    
// //     if (id !== undefined) { // If the id is not 'new', fetch data
// //       setLoading(true);
// //       fetch(`http://localhost:8080/api/application/${id}`, {
// //         method: 'GET',
// //         headers: {
// //           'Authorization': `Bearer ${token}`, // Include token for authorization
// //         },
// //       })
// //         .then((response) => response.json())
// //         .then((data) => {
// //           setLoanApplication(data); // Set data to state for editing
// //           setLoading(false);
// //         })
// //         .catch((error) => {
// //           console.error('Error fetching loan application:', error);
// //           setLoading(false);
// //         });
// //     }
// //   }, [id]);

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setLoanApplication({ ...loanApplication, [name]: value }); // Update form state on change
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setLoading(true);
// //     const token = localStorage.getItem('token');
// //     const url = loanApplication.id ? `http://localhost:8080/api/application/${loanApplication.id}` : 'http://localhost:8080/api/application'; // Use POST or PUT based on existence of id

   
      
// //     try {
    
// //       const method = loanApplication.id ? 'PUT' : 'POST';
// //        // If id exists, update the application (PUT), otherwise create a new one (POST)
// //     loanApplication.loanAmount = parseFloat(loanApplication.loanAmount);
// //      loanApplication.incomeAmount= parseFloat(loanApplication.incomeAmount);
// //       console.log('Submitting Loan Application:', loanApplication);
// //       await fetch(url, {
// //         method: method,
// //         headers: {
// //           'Accept': 'application/json',
// //           'Content-Type': 'application/json',
// //           'Authorization': `Bearer ${token}`, // Include token for authorization
// //         },
// //         body: JSON.stringify(loanApplication),
// //       });
// //       setLoading(false);
// //       navigate('/loanApplications'); // Redirect after save
// //     } catch (error) {
// //       console.error('Error saving loan application:', error);
// //       setLoading(false);
// //     }
// //   };

// //   const title = <h2>{loanApplication.id ? 'Edit Loan Application' : 'Add Loan Application'}</h2>;
// //   const user = JSON.parse(localStorage.getItem('user')) || {};
// //     const username = user.name || 'User';

// //   return (
// //     <div>
// //       <Header username={username} />
// //       <Container>
// //         {title}
// //         <Form onSubmit={handleSubmit}>
// //           <FormGroup>
// //             <Label for="name">First Name</Label>
// //             <Input
// //               type="text"
// //               name="name"
// //               id="name"
// //               value={loanApplication.name || ''}
// //               onChange={handleChange}
// //               autoComplete="name"
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="surname">Surname</Label>
// //             <Input
// //               type="text"
// //               name="surname"
// //               id="surname"
// //               value={loanApplication.surname || ''}
// //               onChange={handleChange}
// //               autoComplete="surname"
// //             />
// //           </FormGroup>

// //           <FormGroup>
// //             <Label for="email">Email</Label>
// //             <Input
// //               type="email"
// //               name="email"
// //               id="email"
// //               value={loanApplication.email || ''}
// //               onChange={handleChange}
// //               autoComplete="email"
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="loanAmount">Loan Amount</Label>
// //             <Input
// //               type="number"
// //               name="loanAmount"
// //               id="loanAmount"
// //               value={loanApplication.loanAmount || ''}
// //               onChange={handleChange}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="loanCurrency">LoanCurrency</Label>
// //             <Input
// //               type="text"
// //               name="loanCurrency"
// //               id="loanCurrency"
// //               value={loanApplication.loanCurrency || ''}
// //               onChange={handleChange}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="loanType">Loan Type</Label>
// //             <select
// //               name="loanType"
// //               id="loanType"
// //               value={loanApplication.loanType || 'SHTEPI'}
// //               onChange={handleChange}
// //             >
// //               <option value="SHTEPI">SHTEPI</option>
// //               <option value="MAKINE">MAKINE</option>
// //               <option value="PERSONALE">PERSONALE</option>
// //             </select>
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="loanDate">Loan Date</Label>
// //             <Input
// //               type="date"
// //               name="loanDate"
// //               id="loanDate"
// //               value={loanApplication.loanDate || ''}
// //               onChange={handleChange}
// //             />
// //           </FormGroup>

// //           {/* Additional fields */}
// //           <FormGroup>
// //             <Label for="fatherName">Father's Name</Label>
// //             <Input
// //               type="text"
// //               name="fatherName"
// //               id="fatherName"
// //               value={loanApplication.fatherName || ''}
// //               onChange={handleChange}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="birthDate">Birth Date</Label>
// //             <Input
// //               type="date"
// //               name="birthDate"
// //               id="birthDate"
// //               value={loanApplication.birthDate || ''}
// //               onChange={handleChange}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="birthPlace">Birth Place</Label>
// //             <Input
// //               type="text"
// //               name="birthPlace"
// //               id="birthPlace"
// //               value={loanApplication.birthPlace || ''}
// //               onChange={handleChange}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="phone">Phone</Label>
// //             <Input
// //               type="text"
// //               name="phone"
// //               id="phone"
// //               value={loanApplication.phone || ''}
// //               onChange={handleChange}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="education">Education</Label>
// //             <Input
// //               type="text"
// //               name="education"
// //               id="education"
// //               value={loanApplication.education || ''}
// //               onChange={handleChange}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="maritalStatus">Marital Status</Label>
// //             <select
// //               name="maritalStatus"
// //               id="maritalStatus"
// //               value={loanApplication.maritalStatus || 'MARTUAR'}
// //               onChange={handleChange}
// //             >
// //               <option value="MARTUAR">MARTUAR</option>
// //               <option value="BEQAR">BEQAR</option>
// //             </select>
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="incomeType">Income Type</Label>
// //             <select
// //               name="incomeType"
// //               id="incomeType"
// //               value={loanApplication.incomeType || 'PAGA'}
// //               onChange={handleChange}
// //             >
// //               <option value="PAGA">PAGA</option>
// //               <option value="FREELANCE">FREELANCE</option>
// //             </select>
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="incomeAmount">Income Amount</Label>
// //             <Input
// //               type="number"
// //               name="incomeAmount"
// //               id="incomeAmount"
// //               value={loanApplication.incomeAmount || ''}
// //               onChange={handleChange}
// //             />
// //           </FormGroup>
// //           <FormGroup>
// //             <Label for="currency">Currency</Label>
// //             <Input
// //               type="text"
// //               name="currency"
// //               id="currency"
// //               value={loanApplication.currency || ''}
// //               onChange={handleChange}
// //             />
// //           </FormGroup>

// //           <FormGroup>
// //             <Button color="primary" type="submit" disabled={loading}>
// //               {loading ? 'Saving...' : 'Save'}
// //             </Button>{' '}
// //             <Button color="secondary" onClick={() => navigate('/loanApplications')}>
// //               Cancel
// //             </Button>
// //           </FormGroup>
// //         </Form>
// //       </Container>
// //       <Footer/>
// //     </div>
// //   );
// // };

// // export default LoanApplicationEdit;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
// import { jwtDecode } from "jwt-decode";
// import Header from "./Header";
// import Footer from "./Footer";

// const LoanApplicationEdit = () => {
//   const initialFormState = {
//     name: "",
//     surname: "",
//     email: "",
//     loanAmount: "",
//     loanCurrency: "EUR",
//     loanType: "SHTEPI",
//     loanDate: "",
//     loanStatus: "APPLIED",
//     fatherName: "",
//     birthDate: "",
//     birthPlace: "",
//     phone: "",
//     education: "BACHELOR",
//     maritalStatus: "MARTUAR",
//     incomeType: "PAGA",
//     incomeAmount: "",
//     currency: "EUR",
//     client: { id: null },
//   };

//   const [loanApplication, setLoanApplication] = useState(initialFormState);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
 
//     const token = localStorage.getItem("token");
//     const user = JSON.parse(localStorage.getItem('user')) || {};
//     const name = user.name;
//     const decodedToken = jwtDecode(token);
//     const clientId = decodedToken.id;
  
//     if (!id) {
//       setLoanApplication((prevState) => ({
//         ...prevState,
//         name: name || "",
//         surname: decodedToken.surname || "",
//         email: decodedToken.email || "",
//         client: { id: clientId },
//       }));
//     } else {
//       setLoading(true);
//       fetch(`http://localhost:8080/api/application/${id}`, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.loanStatus !== "APPLIED") {
//             navigate("/loanApplications");
//           } else {
//           setLoanApplication({
//             ...data,
//             loanDate: data.loanDate ? data.loanDate.split("T")[0] : "", // Format loanDate
//             birthDate: data.birthDate ? data.birthDate.split("T")[0] : "", // Format birthDate
//           });
//           setLoading(false);
//         }})
//         .catch((error) => {
//           console.error("Error fetching loan application:", error);
//           setLoading(false);
//         });
//     }
//   }, [id]);
  

//   // useEffect(() => {
//   //   const token = localStorage.getItem("token");
//   //   const decodedToken = jwtDecode(token);
//   //   const clientId = decodedToken.id;

//   //   if (!id) {
//   //     setLoanApplication((prevState) => ({
//   //       ...prevState,
//   //       name: decodedToken.name || "",
//   //       surname: decodedToken.surname || "",
//   //       email: decodedToken.email || "",
//   //       client: { id: clientId },
//   //     }));
//   //   } else {
//   //     setLoading(true);
//   //     fetch(`http://localhost:8080/api/application/${id}`, {
//   //       method: "GET",
//   //       headers: { Authorization: `Bearer ${token}` },
//   //     })
//   //       .then((response) => response.json())
//   //       .then((data) => {
//   //         setLoanApplication(data);
//   //         setLoading(false);
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error fetching loan application:", error);
//   //         setLoading(false);
//   //       });
//   //   }
//   // }, [id]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setLoanApplication((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     const url = loanApplication.id
//       ? `http://localhost:8080/api/application/${loanApplication.id}`
//       : "http://localhost:8080/api/application";
  
//     try {
//       const method = loanApplication.id ? "PUT" : "POST";
  
//       const formattedLoanApplication = {
//         ...loanApplication,
//         loanAmount: parseFloat(loanApplication.loanAmount),
//         incomeAmount: parseFloat(loanApplication.incomeAmount),
//         loanDate: loanApplication.loanDate ? new Date(loanApplication.loanDate).toISOString() : null,
//         birthDate: loanApplication.birthDate ? new Date(loanApplication.birthDate).toISOString() : null,
//       };
  
//       await fetch(url, {
//         method: method,
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formattedLoanApplication),
//       });
  
//       setLoading(false);
//       navigate("/loanApplications");
//     } catch (error) {
//       console.error("Error saving loan application:", error);
//       setLoading(false);
//     }
//   };
  

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   setLoading(true);
//   //   const token = localStorage.getItem("token");
//   //   const url = loanApplication.id
//   //     ? `http://localhost:8080/api/application/${loanApplication.id}`
//   //     : "http://localhost:8080/api/application";

//   //   try {
//   //     const method = loanApplication.id ? "PUT" : "POST";
//   //     loanApplication.loanAmount = parseFloat(loanApplication.loanAmount);
//   //     loanApplication.incomeAmount = parseFloat(loanApplication.incomeAmount);

//   //     await fetch(url, {
//   //       method: method,
//   //       headers: {
//   //         Accept: "application/json",
//   //         "Content-Type": "application/json",
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //       body: JSON.stringify(loanApplication),
//   //     });

//   //     setLoading(false);
//   //     navigate("/loanApplications");
//   //   } catch (error) {
//   //     console.error("Error saving loan application:", error);
//   //     setLoading(false);
//   //   }
//   // };

//   return (
//     <div>
//       <Header username={loanApplication.name || "User"} />
//       <Container>
//         <h2>{loanApplication.id ? "Edit Loan Application" : "Add Loan Application"}</h2>
//         <Form onSubmit={handleSubmit}>
//         <FormGroup>
//             <Label for="name">First Name</Label>
//              <Input
//                type="text"
//                name="name"
//                id="name"
//                value={loanApplication.name || ''}
//                onChange={handleChange}
//                autoComplete="name"
//              />
//            </FormGroup>
//            <FormGroup>
//              <Label for="surname">Surname</Label>
//              <Input
//                type="text"
//                name="surname"
//                id="surname"
//                value={loanApplication.surname || ''}
//                onChange={handleChange}
//                autoComplete="surname"
//              />
//            </FormGroup>
//            <FormGroup>
//             <Label for="email">Email</Label>
//             <Input
//                type="email"
//                name="email"
//                id="email"
//                value={loanApplication.email || ''}
//                onChange={handleChange}
//                autoComplete="email"
//              />
//            </FormGroup>
//            <FormGroup>
//              <Label for="loanAmount">Loan Amount</Label>
//              <Input
//                type="number"
//                name="loanAmount"
//                id="loanAmount"
//                value={loanApplication.loanAmount || ''}
//                onChange={handleChange}
//              />
//            </FormGroup>
//            <FormGroup>
//              <Label for="loanCurrency">LoanCurrency</Label>
//              <Input
//                type="text"
//                name="loanCurrency"
//                id="loanCurrency"
//                value={loanApplication.loanCurrency || ''}
//                onChange={handleChange}
//              />
//            </FormGroup>
//            <FormGroup>
//              <Label for="loanType">Loan Type</Label>
//              <select
//                name="loanType"
//                id="loanType"
//                value={loanApplication.loanType || 'SHTEPI'}
//                onChange={handleChange}
//              >
//                <option value="SHTEPI">SHTEPI</option>
//                <option value="MAKINE">MAKINE</option>
//                <option value="PERSONALE">PERSONALE</option>
//              </select>
//            </FormGroup>
//            <FormGroup>
//              <Label for="loanDate">Loan Date</Label>
//              <Input
//                type="date"
//                name="loanDate"
//                id="loanDate"
//                value={loanApplication.loanDate || ''}
//                onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="fatherName">Father's Name</Label>
//             <Input
//               type="text"
//               name="fatherName"
//               id="fatherName"
//               value={loanApplication.fatherName || ''}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="birthDate">Birth Date</Label>
//             <Input
//               type="date"
//               name="birthDate"
//               id="birthDate"
//               value={loanApplication.birthDate || ''}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="birthPlace">Birth Place</Label>
//             <Input
//               type="text"
//               name="birthPlace"
//               id="birthPlace"
//               value={loanApplication.birthPlace || ''}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="phone">Phone</Label>
//             <Input
//               type="text"
//               name="phone"
//               id="phone"
//               value={loanApplication.phone || ''}
//               onChange={handleChange}
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label for="loanStatus">Loan Status</Label>
//             <Input type="text" name="loanStatus" id="loanStatus" value={loanApplication.loanStatus} disabled />
//           </FormGroup>
        
//           <FormGroup>
//             <Label for="education">Education</Label>
//             <Input type="select" name="education" id="education" value={loanApplication.education} onChange={handleChange}>
//               <option value="PA_ARSIM">Pa Arsim</option>
//               <option value="FILLOR">Fillor</option>
//               <option value="MESME">Mesme</option>
//               <option value="LARTE">E larte</option>
//               <option value="DOKTORATURE">Doktorature</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="maritalStatus">Marital Status</Label>
//             <Input type="select" name="maritalStatus" id="maritalStatus" value={loanApplication.maritalStatus} onChange={handleChange}>
//               <option value="MARTUAR">Martuar</option>
//               <option value="BEQAR">Beqar</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="incomeType">Income Type</Label>
//             <Input type="select" name="incomeType" id="incomeType" value={loanApplication.incomeType} onChange={handleChange}>
//               <option value="PAGA">Paga</option>
//               <option value="QERA">Qera</option>
//               <option value="BIZNES">Biznes</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="incomeAmount">Income Amount</Label>
//             <Input
//               type="number"
//               name="incomeAmount"
//               id="incomeAmount"
//               value={loanApplication.incomeAmount || ''}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="currency">Currency</Label>
//             <Input type="select" name="currency" id="currency" value={loanApplication.currency} onChange={handleChange}>
//             <option value="LEK">LEK</option>
//               <option value="EUR">EUR</option>
//               <option value="USD">USD</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Button color="primary" type="submit" disabled={loading}>
//               {loading ? "Saving..." : "Save"}
//             </Button>
//             <Button color="secondary" onClick={() => navigate("/loanApplications")}>
//               Cancel
//             </Button>
//           </FormGroup>
//         </Form>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default LoanApplicationEdit;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
// import { jwtDecode } from "jwt-decode";
// import Header from "./Header";
// import Footer from "./Footer";

// const LoanApplicationEdit = () => {
//   const initialFormState = {
//     name: "",
//     surname: "",
//     email: "",
//     loanAmount: "",
//     loanCurrency: "EUR",
//     loanType: "SHTEPI",
//     loanDate: "",
//     loanStatus: "APPLIED",
//     fatherName: "",
//     birthDate: "",
//     birthPlace: "",
//     phone: "",
//     education: "",
//     maritalStatus: "",
//     incomeType: "PAGA",
//     incomeAmount: "",
//     currency: "EUR",
//     incomeStart: "",
//     duration: "",
//     client: { id: null },
//   };

//   const [loanApplication, setLoanApplication] = useState(initialFormState);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [errors, setErrors] = useState({});


//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const user = JSON.parse(localStorage.getItem('user')) || {};
//     const name = user.name;
//     const decodedToken = jwtDecode(token);
//     const clientId = decodedToken.id;
    

  
//     if (!id) {
//       setLoading(true);
      
//       fetch(`http://localhost:8080/client/details`, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       })
//         .then((response) => response.json())
//         .then((clientDetails) => {
//           setLoanApplication((prevState) => ({
//             ...prevState,
//             name: clientDetails.name || name, 
//             surname: clientDetails.surname || decodedToken.surname,
//             email: clientDetails.email || decodedToken.email,
//             fatherName: clientDetails.fatherName || "",
//             birthDate: clientDetails.birthDate ? clientDetails.birthDate.split("T")[0] : "",
//             birthPlace: clientDetails.birthPlace || "",
//             phone: clientDetails.phone || "",
//             education: clientDetails.education || "",
//             maritalStatus: clientDetails.maritalStatus || "",
//             client: { id: clientId },
//           }));
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching client details:", error);
//           setLoading(false);
//         });
//     } else {
//       setLoading(true);
  
//       fetch(`http://localhost:8080/api/application/${id}`, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // if (data.loanStatus !== "APPLIED") {
//           //   navigate("/loanApplications");
//           // } else {
//           //   setLoanApplication({
//           //     ...data,
//           //     loanDate: data.loanDate ? data.loanDate.split("T")[0] : "",
//           //     birthDate: data.birthDate ? data.birthDate.split("T")[0] : "",
//           //   });
//           //   setLoading(false);
//           // }
//           setLoanApplication({
//             ...data,
//             loanDate: data.loanDate ? data.loanDate.split("T")[0] : "",
//             birthDate: data.birthDate ? data.birthDate.split("T")[0] : "",
//           });
          
//           // Allow editing if the loan is applied or returned
//           if (data.loanStatus !== "APPLIED" && data.loanStatus !== "RETURNED") {
//             navigate("/loanApplications");
//           } else {
//             setLoading(false);
//           }
          
//         })
//         .catch((error) => {
//           console.error("Error fetching loan application:", error);
//           setLoading(false);
//         });
//     }
//   }, [id, navigate]);
  
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setLoanApplication((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const validateForm = () => {
//     let errors = {};
//     const requiredFields = [
//       "name", "surname", "email", "loanAmount", "loanCurrency", "loanType", 
//       "loanDate", "fatherName", "birthDate", "birthPlace", "phone", 
//       "education", "maritalStatus", "incomeType", "incomeAmount", 
//       "currency", "incomeStart", "duration"
//     ];
  
//     requiredFields.forEach(field => {
//       if (!loanApplication[field]) {
//         errors[field] = "This field is required!";
//       }
//     });
  
//     const nameFields = ["name", "surname", "fatherName"];
//     nameFields.forEach(field => {
//       if (/\d/.test(loanApplication[field])) {
//         errors[field] = "This field should not contain numbers!";
//       }
//     });
  
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!validateForm()) return;
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     const url = loanApplication.id
//       ? `http://localhost:8080/api/application/${loanApplication.id}`
//       : "http://localhost:8080/api/application";
  
//     try {
//       console.log(loanApplication);
//       const method = loanApplication.id ? "PUT" : "POST";
  
//       const formattedLoanApplication = {
//         ...loanApplication,
//         loanStatus: loanApplication.loanStatus === "RETURNED" ? "REAPPLIED" : loanApplication.loanStatus,
//         loanAmount: loanApplication.loanAmount ? Number(loanApplication.loanAmount) : null,
//         incomeAmount: loanApplication.incomeAmount ? Number(loanApplication.incomeAmount) : null,
//         duration: loanApplication.duration ? Number(loanApplication.duration) : null,
//         loanDate: loanApplication.loanDate ? new Date(loanApplication.loanDate).toISOString() : null,
//         birthDate: loanApplication.birthDate ? new Date(loanApplication.birthDate).toISOString() : null,
//         incomeStart: loanApplication.incomeStart ? new Date(loanApplication.incomeStart).toISOString() : null,
//       };
  
//       console.log(formattedLoanApplication); 
  
//       await fetch(url, {
//         method: method,
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formattedLoanApplication),
//       });
  
//       setLoading(false);
//       navigate("/loanApplications");
//     } catch (error) {
//       console.error("Error saving loan application:", error);
//       setLoading(false);
//     }

   
//   };
  

//   return (
//     <div>
//       <Header />
//       <Container>
//         <h2>{loanApplication.id ? "Edit Loan Application" : "Add Loan Application"}</h2>
//         <Form onSubmit={handleSubmit}>
//         {loanApplication.comment && (
//           <FormGroup>
//           <Label for="comment">Return Comment</Label>
//           <Input
//             type="textarea"
//             name="comment"
//             id="comment"
//             value={loanApplication.comment}
//             readOnly
//           />
//         </FormGroup>
// )}
//         <FormGroup>
//              <Label for="name">First Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={loanApplication.name || ''}
//                 onChange={handleChange}
//                 autoComplete="name"
//               />
//               {errors.name && <p className="text-danger">{errors.name}</p>}
//             </FormGroup>
//             <FormGroup>
//               <Label for="surname">Surname</Label>
//               <Input
//                type="text"
//                name="surname"
//                id="surname"
//                value={loanApplication.surname || ''}
//                onChange={handleChange}
//                autoComplete="surname"
//              />
//              {errors.surname && <p className="text-danger">{errors.surname}</p>}
//            </FormGroup>
//            <FormGroup>
//             <Label for="fatherName">Father's Name</Label>
//             <Input
//               type="text"
//               name="fatherName"
//               id="fatherName"
//               value={loanApplication.fatherName || ''}
//               onChange={handleChange}
//             />
//             {errors.fatherName && <p className="text-danger">{errors.fatherName}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="birthDate">Birth Date</Label>
//             <Input
//               type="date"
//               name="birthDate"
//               id="birthDate"
//               value={loanApplication.birthDate || ''}
//               onChange={handleChange}
//             />
//             {errors.birthDate && <p className="text-danger">{errors.birthDate}</p>}
//            </FormGroup>
//            <FormGroup>
//              <Label for="birthPlace">Birth Place</Label>
//              <Input
//               type="text"
//               name="birthPlace"
//               id="birthPlace"
//               value={loanApplication.birthPlace || ''}
//               onChange={handleChange}
//             />
//             {errors.birthPlace && <p className="text-danger">{errors.birthPlace}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="phone">Phone</Label>
//             <Input
//               type="text"
//               name="phone"
//               id="phone"
//               value={loanApplication.phone || ''}
//               onChange={handleChange}
//             />
//             {errors.phone && <p className="text-danger">{errors.phone}</p>}
//           </FormGroup>

//            <FormGroup>
//             <Label for="email">Email</Label>
//             <Input
//                type="email"
//                name="email"
//                id="email"
//                value={loanApplication.email || ''}
//                onChange={handleChange}
//                autoComplete="email"
//              />
//              {errors.email && <p className="text-danger">{errors.email}</p>}
//            </FormGroup>
          
//            <FormGroup>
//              <Label for="education">Education</Label>
//              <Input type="select" name="education" id="education" value={loanApplication.education} onChange={handleChange}>
//                <option value="PA_ARSIM">Pa Arsim</option>
//                <option value="FILLOR">Fillor</option>
//                <option value="MESME">Mesme</option>
//                <option value="LARTE">E larte</option>
//                <option value="DOKTORATURE">Doktorature</option>
//              </Input>
//              {errors.education && <p className="text-danger">{errors.education}</p>}
//            </FormGroup>
//            <FormGroup>
//              <Label for="maritalStatus">Marital Status</Label>
//              <Input type="select" name="maritalStatus" id="maritalStatus" value={loanApplication.maritalStatus} onChange={handleChange}>
//                <option value="MARTUAR">Martuar</option>
//                <option value="BEQAR">Beqar</option>
//              </Input>
//              {errors.maritalStatus && <p className="text-danger">{errors.maritalStatus}</p>}
//            </FormGroup>
//            <FormGroup>
//              <Label for="incomeType">Income Type</Label>
//              <Input type="select" name="incomeType" id="incomeType" value={loanApplication.incomeType} onChange={handleChange}>
//                <option value="PAGA">Paga</option>
//                <option value="QERA">Qera</option>
//                <option value="BIZNES">Biznes</option>
//              </Input>
//              {errors.incomeType && <p className="text-danger">{errors.incomeType}</p>}
//            </FormGroup>
//            <FormGroup>
//              <Label for="incomeAmount">Income Amount</Label>
//              <Input
//               type="number"
//               name="incomeAmount"
//               id="incomeAmount"
//               value={loanApplication.incomeAmount || ''}
//               onChange={handleChange}
//             />
//             {errors.incomeAmount && <p className="text-danger">{errors.incomeAmount}</p>}
//           </FormGroup>
      
//           <FormGroup>
//             <Label for="currency">Income Currency</Label>
//             <Input type="select" name="currency" id="currency" value={loanApplication.currency} onChange={handleChange}>
//                <option value="EUR">EUR</option>
//                <option value="LEK">LEK</option>
//                <option value="USD">USD</option>
//              </Input>
//             {errors.currency && <p className="text-danger">{errors.currency}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="incomeStart">Income Start Date</Label>
//             <Input
//               type="date"
//               name="incomeStart"
//               id="incomeStart"
//               value={loanApplication.incomeStart || ''}
//               onChange={handleChange}
//             />
//             {errors.incomeStart && <p className="text-danger">{errors.incomeStart}</p>}
//           </FormGroup>

//           <FormGroup>
//              <Label for="loanAmount">Loan Amount</Label>
//              <Input
//                type="number"
//                name="loanAmount"
//                id="loanAmount"
//                value={loanApplication.loanAmount || ''}
//                onChange={handleChange}
//              />
//              {errors.loanAmount && <p className="text-danger">{errors.loanAmount}</p>}
//             </FormGroup>
//             <FormGroup>
//               <Label for="loanCurrency">LoanCurrency</Label>
//               <Input type="select" name="loanCurrency" id="loanCurrency" value={loanApplication.loanCurrency} onChange={handleChange}>
//                <option value="EUR">EUR</option>
//                <option value="LEK">LEK</option>
//                <option value="USD">USD</option>
//              </Input>
//              {errors.loanCurrency && <p className="text-danger">{errors.loanCurrency}</p>}
//            </FormGroup>
//            <FormGroup>
//              <Label for="loanType">Loan Type</Label>
//              <Input type="select" name="loanType" id="loanType" value={loanApplication.loanType} onChange={handleChange}>
//              <option value="SHTEPI">SHTEPI</option>
//                <option value="MAKINE">MAKINE</option>
//                <option value="PERSONALE">PERSONALE</option>
//              </Input>
//              {errors.loanType && <p className="text-danger">{errors.loanType}</p>}
//            </FormGroup>
//            <FormGroup>
//              <Label for="loanDate">Loan Date</Label>
//              <Input
//                type="date"
//                name="loanDate"
//                id="loanDate"
//                value={loanApplication.loanDate || ''}
//                onChange={handleChange}
//             />
//             {errors.loanDate && <p className="text-danger">{errors.loanDate}</p>}
//           </FormGroup>
          
       
        
          // <FormGroup>
          //   <Label for="duration">Loan Duration</Label>
          //   <Input
          //     type="number"
          //     name="duration"
          //     id="duration"
          //     value={loanApplication.duration || ''}
          //     onChange={handleChange}
          //   />
          //   {errors.duration && <p className="text-danger">{errors.duration}</p>}
          // </FormGroup>
//           <FormGroup>
//             <Button color="primary" type="submit" disabled={loading}>
//               {loading ? "Saving..." : "Save"}
//             </Button>
//             <Button color="secondary" onClick={() => navigate("/loanApplications")}>
//               Cancel
//             </Button>
//           </FormGroup>
//         </Form>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default LoanApplicationEdit;

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
// import { jwtDecode } from "jwt-decode";
// import Header from "./Header";
// import Footer from "./Footer";

// const LoanApplicationEdit = () => {
//   const initialFormState = {
//     name: "",
//     surname: "",
//     email: "",
//     loanAmount: "",
//     loanCurrency: "EUR",
//     loanType: "SHTEPI",
//     loanDate: "",
//     loanStatus: "APPLIED",
//     fatherName: "",
//     birthDate: "",
//     birthPlace: "",
//     phone: "",
//     education: "",
//     maritalStatus: "",
//     incomeType: "PAGA",
//     incomeAmount: "",
//     currency: "EUR",
//     incomeStart: "",
//     duration: "",
//     client: { id: null },
//     comment: "" // Add comment field here
//   };

//   const [loanApplication, setLoanApplication] = useState(initialFormState);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const user = JSON.parse(localStorage.getItem('user')) || {};
//     const name = user.name;
//     const decodedToken = jwtDecode(token);
//     const clientId = decodedToken.id;

//     setLoading(true);
    
//     // First, fetch the loan application data
//     fetch(`http://localhost:8080/api/application/${id}`, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setLoanApplication({
//           ...data,
//           loanDate: data.loanDate ? data.loanDate.split("T")[0] : "",
//           birthDate: data.birthDate ? data.birthDate.split("T")[0] : "",
//         });

//         // If the loan status is RETURNED, fetch the comment from the returned applications table
//         if (data.loanStatus === "RETURNED") {
//           fetch(`http://localhost:8080/api/application/${id}/returned`, {
//             method: "GET",
//             headers: { Authorization: `Bearer ${token}` },
//           })
//             .then((response) => response.json())
//             .then((returnedData) => {
//               if (returnedData && returnedData.comment) {
//                 setLoanApplication((prevState) => ({
//                   ...prevState,
//                   comment: returnedData.comment
//                 }));
//               }
//             })
//             .catch((error) => {
//               console.error("Error fetching returned application comment:", error);
//             });
//         }

//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching loan application:", error);
//         setLoading(false);
//       });
//   }, [id, navigate]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setLoanApplication((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const validateForm = () => {
//     let errors = {};
//     const requiredFields = [
//       "name", "surname", "email", "loanAmount", "loanCurrency", "loanType", 
//       "loanDate", "fatherName", "birthDate", "birthPlace", "phone", 
//       "education", "maritalStatus", "incomeType", "incomeAmount", 
//       "currency", "incomeStart", "duration"
//     ];

//     requiredFields.forEach(field => {
//       if (!loanApplication[field]) {
//         errors[field] = "This field is required!";
//       }
//     });

//     const nameFields = ["name", "surname", "fatherName"];
//     nameFields.forEach(field => {
//       if (/\d/.test(loanApplication[field])) {
//         errors[field] = "This field should not contain numbers!";
//       }
//     });

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!validateForm()) return;
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     const url = loanApplication.id
//       ? `http://localhost:8080/api/application/${loanApplication.id}`
//       : "http://localhost:8080/api/application";

//     try {
//       const method = loanApplication.id ? "PUT" : "POST";

//       const formattedLoanApplication = {
//         ...loanApplication,
//         loanStatus: loanApplication.loanStatus === "RETURNED" ? "REAPPLIED" : loanApplication.loanStatus,
//         loanAmount: loanApplication.loanAmount ? Number(loanApplication.loanAmount) : null,
//         incomeAmount: loanApplication.incomeAmount ? Number(loanApplication.incomeAmount) : null,
//         duration: loanApplication.duration ? Number(loanApplication.duration) : null,
//         loanDate: loanApplication.loanDate ? new Date(loanApplication.loanDate).toISOString() : null,
//         birthDate: loanApplication.birthDate ? new Date(loanApplication.birthDate).toISOString() : null,
//         incomeStart: loanApplication.incomeStart ? new Date(loanApplication.incomeStart).toISOString() : null,
//       };

//       await fetch(url, {
//         method: method,
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formattedLoanApplication),
//       });

//       setLoading(false);
//       navigate("/loanApplications");
//     } catch (error) {
//       console.error("Error saving loan application:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <Container>
//         <h2>{loanApplication.id ? "Edit Loan Application" : "Add Loan Application"}</h2>
//         <Form onSubmit={handleSubmit}>
//           {loanApplication.loanStatus === "RETURNED" && loanApplication.comment && (
//             <FormGroup>
//               <Label for="comment">Return Comment</Label>
//               <Input
//                 type="textarea"
//                 name="comment"
//                 id="comment"
//                 value={loanApplication.comment}
//                 readOnly
//               />
//             </FormGroup>
//           )}
//           <FormGroup>
//             <Label for="name">First Name</Label>
//             <Input
//               type="text"
//               name="name"
//               id="name"
//               value={loanApplication.name || ''}
//               onChange={handleChange}
//               autoComplete="name"
//             />
//             {errors.name && <p className="text-danger">{errors.name}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="surname">Surname</Label>
//             <Input
//               type="text"
//               name="surname"
//               id="surname"
//               value={loanApplication.surname || ''}
//               onChange={handleChange}
//               autoComplete="surname"
//             />
//             {errors.surname && <p className="text-danger">{errors.surname}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="fatherName">Father's Name</Label>
//             <Input
//               type="text"
//               name="fatherName"
//               id="fatherName"
//               value={loanApplication.fatherName || ''}
//               onChange={handleChange}
//             />
//             {errors.fatherName && <p className="text-danger">{errors.fatherName}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="birthDate">Birth Date</Label>
//             <Input
//               type="date"
//               name="birthDate"
//               id="birthDate"
//               value={loanApplication.birthDate || ''}
//               onChange={handleChange}
//             />
//             {errors.birthDate && <p className="text-danger">{errors.birthDate}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="birthPlace">Birth Place</Label>
//             <Input
//               type="text"
//               name="birthPlace"
//               id="birthPlace"
//               value={loanApplication.birthPlace || ''}
//               onChange={handleChange}
//             />
//             {errors.birthPlace && <p className="text-danger">{errors.birthPlace}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="phone">Phone</Label>
//             <Input
//               type="text"
//               name="phone"
//               id="phone"
//               value={loanApplication.phone || ''}
//               onChange={handleChange}
//             />
//             {errors.phone && <p className="text-danger">{errors.phone}</p>}
//           </FormGroup>

//           <FormGroup>
//             <Label for="email">Email</Label>
//             <Input
//               type="email"
//               name="email"
//               id="email"
//               value={loanApplication.email || ''}
//               onChange={handleChange}
//               autoComplete="email"
//             />
//             {errors.email && <p className="text-danger">{errors.email}</p>}
//           </FormGroup>
          
//           <FormGroup>
//             <Label for="education">Education</Label>
//             <Input type="select" name="education" id="education" value={loanApplication.education} onChange={handleChange}>
//               <option value="PA_ARSIM">Pa Arsim</option>
//               <option value="FILLOR">Fillor</option>
//               <option value="MESME">Mesme</option>
//               <option value="LARTE">E larte</option>
//               <option value="DOKTORATURE">Doktorature</option>
//             </Input>
//             {errors.education && <p className="text-danger">{errors.education}</p>}
//           </FormGroup>

//           <FormGroup>
//             <Label for="maritalStatus">Marital Status</Label>
//             <Input type="select" name="maritalStatus" id="maritalStatus" value={loanApplication.maritalStatus} onChange={handleChange}>
//               <option value="MARTUAR">Martuar</option>
//               <option value="BEQAR">Beqar</option>
//             </Input>
//             {errors.maritalStatus && <p className="text-danger">{errors.maritalStatus}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="incomeType">Income Type</Label>
//             <Input type="select" name="incomeType" id="incomeType" value={loanApplication.incomeType} onChange={handleChange}>
//               <option value="PAGA">Paga</option>
//               <option value="QERA">Qera</option>
//               <option value="BIZNES">Biznes</option>
//             </Input>
//             {errors.incomeType && <p className="text-danger">{errors.incomeType}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="incomeAmount">Income Amount</Label>
//             <Input
//               type="number"
//               name="incomeAmount"
//               id="incomeAmount"
//               value={loanApplication.incomeAmount || ''}
//               onChange={handleChange}
//             />
//             {errors.incomeAmount && <p className="text-danger">{errors.incomeAmount}</p>}
//           </FormGroup>

//           <FormGroup>
//             <Label for="currency">Income Currency</Label>
//             <Input type="select" name="currency" id="currency" value={loanApplication.currency} onChange={handleChange}>
//               <option value="EUR">EUR</option>
//               <option value="LEK">LEK</option>
//               <option value="USD">USD</option>
//             </Input>
//             {errors.currency && <p className="text-danger">{errors.currency}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="incomeStart">Income Start Date</Label>
//             <Input
//               type="date"
//               name="incomeStart"
//               id="incomeStart"
//               value={loanApplication.incomeStart || ''}
//               onChange={handleChange}
//             />
//             {errors.incomeStart && <p className="text-danger">{errors.incomeStart}</p>}
//           </FormGroup>

//           <FormGroup>
//             <Label for="loanAmount">Loan Amount</Label>
//             <Input
//               type="number"
//               name="loanAmount"
//               id="loanAmount"
//               value={loanApplication.loanAmount || ''}
//               onChange={handleChange}
//             />
//             {errors.loanAmount && <p className="text-danger">{errors.loanAmount}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="loanCurrency">Loan Currency</Label>
//             <Input type="select" name="loanCurrency" id="loanCurrency" value={loanApplication.loanCurrency} onChange={handleChange}>
//               <option value="EUR">EUR</option>
//               <option value="LEK">LEK</option>
//               <option value="USD">USD</option>
//             </Input>
//             {errors.loanCurrency && <p className="text-danger">{errors.loanCurrency}</p>}
//           </FormGroup>

//           <FormGroup>
//             <Label for="loanDate">Loan Date</Label>
//             <Input
//               type="date"
//               name="loanDate"
//               id="loanDate"
//               value={loanApplication.loanDate || ''}
//               onChange={handleChange}
//             />
//             {errors.loanDate && <p className="text-danger">{errors.loanDate}</p>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="duration">Loan Duration</Label>
//             <Input
//               type="number"
//               name="duration"
//               id="duration"
//               value={loanApplication.duration || ''}
//               onChange={handleChange}
//             />
//             {errors.duration && <p className="text-danger">{errors.duration}</p>}
//           </FormGroup>

//           <Button color="primary" type="submit" disabled={loading}>
//             {loading ? "Saving..." : "Save Loan Application"}
//           </Button>
//         </Form>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default LoanApplicationEdit;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { jwtDecode } from "jwt-decode";
import Header from "./Header";
import Footer from "./Footer";

const LoanApplicationEdit = () => {
  const initialFormState = {
    name: "",
    surname: "",
    email: "",
    loanAmount: "",
    loanCurrency: "EUR",
    loanType: "SHTEPI",
    loanDate: "",
    loanStatus: "APPLIED",
    fatherName: "",
    birthDate: "",
    birthPlace: "",
    phone: "",
    education: "",
    maritalStatus: "",
    incomeType: "PAGA",
    incomeAmount: "",
    currency: "EUR",
    incomeStart: "",
    duration: "",
    client: { id: null },
    
  };

  const [loanApplication, setLoanApplication] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const user = JSON.parse(localStorage.getItem('user')) || {};
  //   const name = user.name;
  //   const decodedToken = jwtDecode(token);
  //   const clientId = decodedToken.id;

  //   if (!id) {
  //     setLoading(true);
  //     fetch(`http://localhost:8080/client/details`, {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //       .then((response) => response.json())
  //       .then((clientDetails) => {
  //         setLoanApplication((prevState) => ({
  //           ...prevState,
  //           name: clientDetails.name || name, 
  //           surname: clientDetails.surname || decodedToken.surname,
  //           email: clientDetails.email || decodedToken.email,
  //           fatherName: clientDetails.fatherName || "",
  //           birthDate: clientDetails.birthDate ? clientDetails.birthDate.split("T")[0] : "",
  //           birthPlace: clientDetails.birthPlace || "",
  //           phone: clientDetails.phone || "",
  //           education: clientDetails.education || "",
  //           maritalStatus: clientDetails.maritalStatus || "",
  //           client: { id: clientId },
  //         }));
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching client details:", error);
  //         setLoading(false);
  //       });
  //   } else {
  //     setLoading(true);

  //     fetch(`http://localhost:8080/api/application/${id}`, {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setLoanApplication({
  //           ...data,
  //           loanDate: data.loanDate ? data.loanDate.split("T")[0] : "",
  //           birthDate: data.birthDate ? data.birthDate.split("T")[0] : "",
  //         });
          
  //         // Allow editing if the loan is applied or returned
  //         if (data.loanStatus !== "APPLIED" && data.loanStatus !== "RETURNED") {
  //           navigate("/loanApplications");
  //         } else {
  //           setLoading(false);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching loan application:", error);
  //         setLoading(false);
  //       });
        
        
  //   }
  // }, [id, navigate]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const name = user.name;
    const decodedToken = jwtDecode(token);
    const clientId = decodedToken.id;
  
    if (!id) {
      setLoading(true);
      fetch(`http://localhost:8080/client/details`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((clientDetails) => {
          setLoanApplication((prevState) => ({
            ...prevState,
            name: clientDetails.name || name, 
            surname: clientDetails.surname || decodedToken.surname,
            email: clientDetails.email || decodedToken.email,
            fatherName: clientDetails.fatherName || "",
            birthDate: clientDetails.birthDate ? clientDetails.birthDate.split("T")[0] : "",
            birthPlace: clientDetails.birthPlace || "",
            phone: clientDetails.phone || "",
            education: clientDetails.education || "",
            maritalStatus: clientDetails.maritalStatus || "",
            client: { id: clientId },
          }));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching client details:", error);
          setLoading(false);
        });
    } else {
      setLoading(true);
  
      fetch(`http://localhost:8080/api/application/${id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          setLoanApplication({
            ...data,
            loanDate: data.loanDate ? data.loanDate.split("T")[0] : "",
            birthDate: data.birthDate ? data.birthDate.split("T")[0] : "",
            incomeStart: data.incomeStart ? data.incomeStart.split("T")[0] : ""
          });
  
          // Check if the loan status is 'RETURNED' and fetch the comment
          if (data.loanStatus === "RETURNED") {
            fetch(`http://localhost:8080/api/application/${id}/returned`, {
              method: "GET",
              headers: { Authorization: `Bearer ${token}` },
            })
              .then((response) => response.json())
              .then((returnedData) => {
                if (returnedData && returnedData.comment) {
                  setComment(returnedData.comment);
                }
              })
              .catch((error) => {
                console.error("Error fetching returned application comment:", error);
              });
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching loan application:", error);
          setLoading(false);
        });
    }
  }, [id, navigate]);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoanApplication((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    const requiredFields = [
      "name", "surname", "email", "loanAmount", "loanCurrency", "loanType", 
      "loanDate", "fatherName", "birthDate", "birthPlace", "phone", 
      "education", "maritalStatus", "incomeType", "incomeAmount", 
      "currency", "incomeStart", "duration"
    ];

    requiredFields.forEach(field => {
      if (!loanApplication[field]) {
        errors[field] = "This field is required!";
      }
    });

    const nameFields = ["name", "surname", "fatherName"];
    nameFields.forEach(field => {
      if (/\d/.test(loanApplication[field])) {
        errors[field] = "This field should not contain numbers!";
      }
    });

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    const token = localStorage.getItem("token");
    const url = loanApplication.id
      ? `http://localhost:8080/api/application/${loanApplication.id}`
      : "http://localhost:8080/api/application";

    try {
      const method = loanApplication.id ? "PUT" : "POST";

      const formattedLoanApplication = {
        ...loanApplication,
        loanStatus: loanApplication.loanStatus === "RETURNED" ? "REAPPLIED" : loanApplication.loanStatus,
        loanAmount: loanApplication.loanAmount ? Number(loanApplication.loanAmount) : null,
        incomeAmount: loanApplication.incomeAmount ? Number(loanApplication.incomeAmount) : null,
        duration: loanApplication.duration ? Number(loanApplication.duration) : null,
        loanDate: loanApplication.loanDate ? new Date(loanApplication.loanDate).toISOString() : null,
        birthDate: loanApplication.birthDate ? new Date(loanApplication.birthDate).toISOString() : null,
        incomeStart: loanApplication.incomeStart ? new Date(loanApplication.incomeStart).toISOString() : null,
      };

      await fetch(url, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formattedLoanApplication),
      });

      setLoading(false);
      navigate("/loanApplications");
    } catch (error) {
      console.error("Error saving loan application:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <h2>{loanApplication.id ? "Edit Loan Application" : "Add Loan Application"}</h2>
        <Form onSubmit={handleSubmit}>
          {comment && (
            <FormGroup>
              <Label for="comment">Return Comment</Label>
              <Input
                type="textarea"
                name="comment"
                id="comment"
                value={comment}
                readOnly
              />
            </FormGroup>
          )}
          
          <FormGroup>
            <Label for="name">First Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={loanApplication.name || ''}
              onChange={handleChange}
              autoComplete="name"
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </FormGroup>

          <FormGroup>
             <Label for="surname">Surname</Label>
             <Input
              type="text"
              name="surname"
              id="surname"
              value={loanApplication.surname || ''}
              onChange={handleChange}
              autoComplete="surname"
            />
            {errors.surname && <p className="text-danger">{errors.surname}</p>}
          </FormGroup>
          <FormGroup>
            <Label for="fatherName">Father's Name</Label>
            <Input
              type="text"
              name="fatherName"
              id="fatherName"
              value={loanApplication.fatherName || ''}
              onChange={handleChange}
            />
            {errors.fatherName && <p className="text-danger">{errors.fatherName}</p>}
          </FormGroup>
          <FormGroup>
            <Label for="birthDate">Birth Date</Label>
            <Input
              type="date"
              name="birthDate"
              id="birthDate"
              value={loanApplication.birthDate || ''}
              onChange={handleChange}
            />
            {errors.birthDate && <p className="text-danger">{errors.birthDate}</p>}
          </FormGroup>
          <FormGroup>
            <Label for="birthPlace">Birth Place</Label>
            <Input
              type="text"
              name="birthPlace"
              id="birthPlace"
              value={loanApplication.birthPlace || ''}
              onChange={handleChange}
            />
            {errors.birthPlace && <p className="text-danger">{errors.birthPlace}</p>}
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              type="text"
              name="phone"
              id="phone"
              value={loanApplication.phone || ''}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-danger">{errors.phone}</p>}
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={loanApplication.email || ''}
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </FormGroup>
          
          <FormGroup>
            <Label for="education">Education</Label>
            <Input type="select" name="education" id="education" value={loanApplication.education} onChange={handleChange}>
              <option value="PA_ARSIM">Pa Arsim</option>
              <option value="FILLOR">Fillor</option>
              <option value="MESME">Mesme</option>
              <option value="LARTE">E larte</option>
              <option value="DOKTORATURE">Doktorature</option>
            </Input>
            {errors.education && <p className="text-danger">{errors.education}</p>}
          </FormGroup>

          <FormGroup>
            <Label for="maritalStatus">Marital Status</Label>
            <Input type="select" name="maritalStatus" id="maritalStatus" value={loanApplication.maritalStatus} onChange={handleChange}>
              <option value="MARTUAR">Martuar</option>
              <option value="BEQAR">Beqar</option>
            </Input>
            {errors.maritalStatus && <p className="text-danger">{errors.maritalStatus}</p>}
          </FormGroup>
          <FormGroup>
            <Label for="incomeType">Income Type</Label>
            <Input type="select" name="incomeType" id="incomeType" value={loanApplication.incomeType} onChange={handleChange}>
              <option value="PAGA">Paga</option>
              <option value="QERA">Qera</option>
              <option value="BIZNES">Biznes</option>
            </Input>
            {errors.incomeType && <p className="text-danger">{errors.incomeType}</p>}
          </FormGroup>
          <FormGroup>
            <Label for="incomeAmount">Income Amount</Label>
            <Input
              type="number"
              name="incomeAmount"
              id="incomeAmount"
              value={loanApplication.incomeAmount || ''}
              onChange={handleChange}
            />
            {errors.incomeAmount && <p className="text-danger">{errors.incomeAmount}</p>}
          </FormGroup>

          <FormGroup>
            <Label for="currency">Income Currency</Label>
            <Input type="select" name="currency" id="currency" value={loanApplication.currency} onChange={handleChange}>
              <option value="EUR">EUR</option>
              <option value="LEK">LEK</option>
              <option value="USD">USD</option>
            </Input>
            {errors.currency && <p className="text-danger">{errors.currency}</p>}
          </FormGroup>
          <FormGroup>
            <Label for="incomeStart">Income Start Date</Label>
            <Input
              type="date"
              name="incomeStart"
              id="incomeStart"
              value={loanApplication.incomeStart || ''}
              onChange={handleChange}
            />
            {errors.incomeStart && <p className="text-danger">{errors.incomeStart}</p>}
          </FormGroup>

          <FormGroup>
            <Label for="loanAmount">Loan Amount</Label>
            <Input
              type="number"
              name="loanAmount"
              id="loanAmount"
              value={loanApplication.loanAmount || ''}
              onChange={handleChange}
            />
            {errors.loanAmount && <p className="text-danger">{errors.loanAmount}</p>}
          </FormGroup>
          <FormGroup>
            <Label for="loanCurrency">Loan Currency</Label>
            <Input type="select" name="loanCurrency" id="loanCurrency" value={loanApplication.loanCurrency} onChange={handleChange}>
              <option value="EUR">EUR</option>
              <option value="LEK">LEK</option>
              <option value="USD">USD</option>
            </Input>
            {errors.loanCurrency && <p className="text-danger">{errors.loanCurrency}</p>}
          </FormGroup>

          <FormGroup>
            <Label for="loanDate">Loan Date</Label>
            <Input
              type="date"
              name="loanDate"
              id="loanDate"
              value={loanApplication.loanDate || ''}
              onChange={handleChange}
            />
            {errors.loanDate && <p className="text-danger">{errors.loanDate}</p>}
          </FormGroup>
          <FormGroup>
            <Label for="duration">Loan Duration</Label>
            <Input
              type="number"
              name="duration"
              id="duration"
              value={loanApplication.duration || ''}
              onChange={handleChange}
            />
            {errors.duration && <p className="text-danger">{errors.duration}</p>}

            <Button color="primary" type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
            <Button color="secondary" onClick={() => navigate("/loanApplications")}>
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default LoanApplicationEdit;
