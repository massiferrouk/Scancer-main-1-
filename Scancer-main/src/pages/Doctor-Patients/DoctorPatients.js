import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {rowsDoctorPatients} from '../../constants/constants'
import {Box, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Blurr from '../../components/Blurr';
import { Fragment } from "react";
import {useState } from "react";


export default function DoctorPatients() {

const columns = [
  { field: 'id', 
  headerName: 'No. ID',
  width: 160,
  align: 'center',
  headerAlign: 'center' },

  { field: 'patientname',
  headerName: 'Patient Name',
  width: 300,
  align: 'center',
  headerAlign: 'center', 
  renderCell: (params)=>{
    return (
      <div className='flex items-center'>
        <img className='object-cover w-8 h-8 rounded-full mr-3' src={params.row.avatar} alt="" />
        {params.row.patientname}
      </div>
    )
  } },

  { field: 'age', 
  headerName: 'Age', 
  width: 130,
  type: 'number',
  align: 'center',
  headerAlign: 'center' },

  { field: 'gender', 
  headerName: 'Gender', 
  width: 160,
  align: 'center',
  headerAlign: 'center' },

  { field: 'status', 
  headerName: 'Status',
  width: 200,
  align: 'center',
  headerAlign: 'center',
  renderCell: (params)=>{
      if (params.row.status === 'Hospital'){
        return (
          <div className=''>
          <p className='text-[#ed0b0b] border w-28 px-8 py-1 rounded-xl bg-[#f59c9c]'>Hospital</p>
          </div>
        )
      }
      else if (params.row.status === 'Consultation'){
        return (
          <div className=''>
            <p className='text-[#101b7b] border w-28 py-1 px-3 rounded-xl bg-[#647cca]'>Consultation</p>
          </div>
        )
      }
      else if (params.row.status === 'Healthy'){
        return (
          <div className=''>
            <p className='text-[#0d894d] border w-28 py-1 px-8 rounded-xl bg-[#66f08d]' >Healthy</p>
          </div>
        )
      }
  }
},

  { field: 'reports', 
  headerName: 'Reports', 
  width: 166,
  cellClassName: 'massi',
  align: 'center',
  headerAlign: 'center',
  renderCell: (params)=>{
    return (
      <div className='flex items-center'>
        <img className='object-cover w-8 h-8 rounded-full mr-3' src={params.row.image} alt="" /> 
      </div>
    )
  }
},

];
const [showBlurr, setShowBlurr] = useState(false);
  return (
    <Fragment>
      <div className='flex justify-center items-center'>
        <Box
        sx={{
          height: 550,
          width: 1250,
          ml: 14,
          '& .aa': {
            backgroundColor: '#edebeb',
          }, 
          '& .massi': {
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          },
            
          
        }}
      >
        <div className='w-full mb-5 mt-12 flex items-center justify-between'>
          <p className='text-3xl font-semibold'>Patients</p>
          <div className='space-x-6 '>
            <Link className='bg-blue-800 text-white p-3 rounded-lg' onClick={() =>
            setShowBlurr(true)}>
              <GroupAddIcon />
            </Link>
            <Link className='bg-red-500 text-white p-3 rounded-lg'>
              <PersonRemoveIcon />
            </Link>
          </div>
          
        </div>
        
        <DataGrid
          rows={rowsDoctorPatients}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getCellClassName={(params)=> {
            return 'aa';
          }}
          getRowSpacing={params =>({
            top:params.isFirstVisible ? 0 : 6,
            bottom:params.isFirstVisible ? 0 : 6
          })}
        />
      </Box> 
      </div>
      <Blurr isVisible={showBlurr} onClose={() => setShowBlurr(false)}>

      </Blurr>
    </Fragment>
  );
}