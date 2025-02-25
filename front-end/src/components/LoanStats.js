import React, { useEffect, useState } from 'react';
import { Container, Card, CardBody, CardHeader, Row, Col } from 'reactstrap';
import HeaderBanker from './HeaderBanker';
import Footer from './Footer';

const LoanStatistics = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const loanStatusStats = () => {
    const stats = applications.reduce((acc, app) => {
      acc[app.loanStatus] = (acc[app.loanStatus] || 0) + 1;
      return acc;
    }, {});
    return stats;
  };

  if (loading) return <p>Loading...</p>;

  const stats = loanStatusStats();
 

  return (
    <Container>
      <HeaderBanker/>
      <h3>Loan Status Statistics</h3>

     
      <Row>
        <Col md={3}>
          <Card>
            <CardHeader><h5>Applied</h5></CardHeader>
            <CardBody>{stats['APPLIED'] || 0}</CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardHeader><h5>Evaluation</h5></CardHeader>
            <CardBody>{stats['EVALUATION'] || 0}</CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardHeader><h5>Approved</h5></CardHeader>
            <CardBody>{stats['APPROVED'] || 0}</CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardHeader><h5>Rejected</h5></CardHeader>
            <CardBody>{stats['REJECTED'] || 0}</CardBody>
          </Card>
        </Col>
      </Row>

      <Footer />
    </Container>
  );
};

export default LoanStatistics;
