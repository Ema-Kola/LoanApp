import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignUpPage';
import DashboardBanker from './components/DashboardPage';
import DashboardClient from './components/DashboardClient';
import LoanApplicationList from './components/LoanApplicationList';
import LoanApplicationEdit from './components/LoanApplicationEdit';
import ProtectedRoute from './ProtectedRoute';
import BankerLoanList from './components/BankerLoanList';
import BankerLoanDetails from './components/BankerLoanDetails';
import ClientLoanDetails from './components/ClientLoanDetails';
import EditUser from './components/EditUser';
import LoanStatistics from './components/LoanStats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboardClient"
          element={
            <ProtectedRoute allowedRoles={["CLIENT"]}>
              <DashboardClient />
            </ProtectedRoute>
          }
        />
         <Route
          path="/editData"
          element={
            <ProtectedRoute allowedRoles={["CLIENT"]}>
              <EditUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboardBanker"
          element={
            <ProtectedRoute allowedRoles={["BANKER"]}>
              <DashboardBanker />
            </ProtectedRoute>
          }
        />

    

         <Route
          path="/applications"
          element={
            <ProtectedRoute allowedRoles={["BANKER"]}>
              <BankerLoanList />
            </ProtectedRoute>
          }
        />
          <Route
          path="/banker/loan/:id"
          element={
            <ProtectedRoute allowedRoles={["BANKER"]}>
              <BankerLoanDetails />
            </ProtectedRoute>
          }
        />
         <Route
          path="/loanStats"
          element={
            <ProtectedRoute allowedRoles={["BANKER"]}>
              <LoanStatistics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/loanApplications"
          element={
            <ProtectedRoute allowedRoles={["CLIENT"]}>
              <LoanApplicationList />
            </ProtectedRoute>
          }
        />
          <Route
          path="/clientLoan/:id"
          element={
            <ProtectedRoute allowedRoles={["CLIENT"]}>
              <ClientLoanDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/loanApplications/:id"
          element={
            <ProtectedRoute allowedRoles={["CLIENT"]}>
              <LoanApplicationEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/loanApplications/new"
          element={
            <ProtectedRoute allowedRoles={["CLIENT"]}>
              <LoanApplicationEdit />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
