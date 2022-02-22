import { Col, Button, Tabs, Tab, Table } from "react-bootstrap";

export default function ContaCorrente({ data }) {
  const { extrato } = data;

  function handleLastedData(item, key) {
    return (
      <>
        <tr key={key}>
          <td>{item.date}</td>
          <td>{item.description}</td>
          <td>{item.value}</td>
        </tr>
      </>
    );
  }

  function handleFutureData(item, key) {
    return (
      <>
        <tr key={key}>
          <td>{item.date}</td>
          <td>{item.description}</td>
          <td>{item.value}</td>
        </tr>
      </>
    );
  }

  return (
    <>
      <Col xs={12} lg={3} className="my-lg-5 pt-lg-5">
        <h3 className="user-content my-5">Conta corrente</h3>
        <h6 className="user-content">
          <b>Saldo em conta corrente</b>
        </h6>
        <h4 className="user-content mb-4 text-success">
          <small>R$ </small>3.500<small>,00</small>
        </h4>
        <h6 className="user-content my-3">
          <b>Cheque especial</b>
        </h6>
        <p className="mb-0">Limite disponível</p>
        <p className="mb-4">R$ 5.000,00</p>
        <Button variant="secondary">Ver extrado</Button>
      </Col>

      <Col xs={12} lg={5} className="mt-lg-5">
        <Tabs defaultActiveKey="latest" className="mt-5 pt-lg-5">
          <Tab
            className="tab-title"
            eventKey="latest"
            title="Últimos Lançamentos"
          >
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>{extrato.map(handleLastedData)}</tbody>
            </Table>
          </Tab>

          <Tab
            className="tab-title"
            eventKey="futures"
            title="Lançamentos Futuros"
          >
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>{extrato.map(handleFutureData)}</tbody>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </>
  );
}
