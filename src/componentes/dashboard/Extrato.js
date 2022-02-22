import { Col, Table } from "react-bootstrap";

export default function Extrato({ data }) {
  const { extrato } = data;

  function handleExtrato(item, key) {
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
      <Col xs={12} lg={8} className="my-lg-5 pt-lg-5">
        <h3 className="user-content my-5">Extrato conta corrente</h3>
        <Table striped borderless>
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Valor (R$)</th>
            </tr>
          </thead>
          <tbody>{extrato.map(handleExtrato)}</tbody>
        </Table>
      </Col>
    </>
  );
}
