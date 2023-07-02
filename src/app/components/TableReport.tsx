import React, { useState } from "react";
import { Button, TextField, Typography, Modal, Box, MenuItem, Select } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Column from "./Column";

const TableReport: React.FC = () => {
  const [columns, setColumns] = useState<{ [key: string]: { name: string; description: string; type: string; date: string } }>({});
  const [newColumnModalOpen, setNewColumnModalOpen] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");
  const [newColumnDescription, setNewColumnDescription] = useState("");
  const [newColumnDate, setNewColumnDate] = useState("");
  const [newColumnType, setNewColumnType] = useState("public");
  const [columnCount, setColumnCount] = useState(0);

  const addColumn = () => {
    const newColumnId = uuidv4();
    const newColumn = {
      name: newColumnName,
      description: newColumnDescription,
      type: newColumnType,
      date: newColumnDate,
    };
    setColumns((prevColumns) => ({
      ...prevColumns,
      [newColumnId]: newColumn,
    }));
    setNewColumnName("");
    setNewColumnDescription("");
    setNewColumnDate("");
    setNewColumnType("public");
    setColumnCount((prevColumnCount) => prevColumnCount + 1);
    setNewColumnModalOpen(false);
  };

  const deleteColumn = (columnId: string) => {
    setColumns((prevColumns) => {
      const newColumns = { ...prevColumns };
      delete newColumns[columnId];
      return newColumns;
    });
    setColumnCount((prevColumnCount) => prevColumnCount - 1);
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setNewColumnModalOpen(true)}>
        Agregar fiesta
      </Button>
      {Object.entries(columns).map(([columnId, column]) => (
        <Column key={columnId} column={{ id: columnId, ...column }} deleteColumn={() => deleteColumn(columnId)} />
      ))}
      <Modal open={newColumnModalOpen} onClose={() => setNewColumnModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Agregar columna
          </Typography>
          <form onSubmit={addColumn}>
            <TextField
              label="Nombre"
              value={newColumnName}
              onChange={(e) => setNewColumnName(e.target.value)}
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <TextField
              label="Descripción"
              value={newColumnDescription}
              onChange={(e) => setNewColumnDescription(e.target.value)}
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <TextField
              label="Fecha"
              value={newColumnDate}
              onChange={(e) => setNewColumnDate(e.target.value)}
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <Select
              label="Tipo"
              value={newColumnType}
              onChange={(e) => setNewColumnType(e.target.value)}
              fullWidth
              required
              sx={{ mt: 2 }}
            >
              <MenuItem value="public">Público</MenuItem>
              <MenuItem value="private">Privado</MenuItem>
            </Select>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Agregar
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default TableReport;
