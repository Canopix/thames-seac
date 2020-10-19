import React, { useState } from "react";
import { Table, Tag, Space, Button, Modal } from "antd";

const dataSource = [
  {
    number: 33,
    date: "20/08/2020",
    type: "Ciber Acoso",
    address: "1023 Av siempre viva",
    description: "Ayuda por favor mi tio me acosa",
    status: "Nueva",
    by: "",
  },
  {
    number: 35,
    date: "20/08/2020",
    type: "Ciber Acoso",
    address: "1023 Av siempre viva",
    description: "Ayuda por favor mi tio me acosa",
    status: "Abierta",
    by: "Pedro Ordonez",
  },
  {
    number: 34,
    date: "20/08/2020",
    type: "Ciber Acoso",
    address: "1023 Av siempre viva",
    description: "Ayuda por favor mi tio me acosa",
    status: "Cerrada",
    by: "Pedro Ordoñez",
  },
  {
    number: 39,
    date: "20/08/2020",
    type: "Ciber Acoso",
    address: "1023 Av siempre viva",
    description: "Ayuda por favor mi tio me acosa",
    status: "Abierta",
    by: "John Doe",
  },
  {
    number: 14,
    date: "20/08/2020",
    type: "Ciber Acoso",
    address: "1023 Av siempre viva",
    description: "Ayuda por favor mi tio me acosa",
    status: "Nueva",
    by: "",
  },
];

const TableDashboard = () => {
  const [open, setOpen] = useState(false);
  const columns = [
    {
      title: "Numero",
      dataIndex: "number",
    },
    {
      title: "Fecha",
      dataIndex: "date",
    },
    {
      title: "Tipo",
      dataIndex: "type",
    },
    {
      title: "Direccion",
      dataIndex: "address",
    },
    {
      title: "Descripcion",
      dataIndex: "description",
    },
    {
      title: "Estado",
      dataIndex: "status",
    },
    {
      title: "Atendida Por",
      dataIndex: "by",
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => setOpen(!open)} type="primary">
            Ver Mas
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        title="Informacion de solicitud"
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      ></Modal>
    </>
  );
};

export default TableDashboard;
