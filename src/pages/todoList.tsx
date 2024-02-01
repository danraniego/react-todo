import React from 'react'
import { Box, Button} from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.services';

let todos: Todo[] = [];

const columns: GridColDef[] = [{
      field: 'title',
      headerName: 'Title',
      width: 200,
      editable: false,
    }
];

const initData = async () => {
    const res = await TodoService.getTodos();
    todos = res.data?.result as Todo[];
    console.log(todos); 
} 

initData();

export default function TodoList() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
          <Button 
            href='/add'
            color='primary' 
            variant='contained'
            sx={{ margin: '20px'}}> Add </Button>
        </Box>
        <DataGrid
            rows={todos}
            getRowId={(row) => row._id}
            columns={columns}
            initialState={{
              pagination: {
                  paginationModel: {
                  pageSize: 5,
                  },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
    </Box>
  )
}
