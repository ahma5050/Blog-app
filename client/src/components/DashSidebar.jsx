import React, { useEffect, useState } from 'react' 
import { useSelector} from 'react-redux'
import {Sidebar} from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { HiChartPie, HiUser } from 'react-icons/hi'

const DashSidebar = () => {
      const location=useLocation();
 const [tab, setTab]=useState('');
 useEffect(()=>{
  const urlParams= new URLSearchParams(location.search);
  const tapformUrl= urlParams.get('tab');
  setTab(tapformUrl)

 },[location.search])
   const {currentUser}=useSelector(state=>state.user)
  return (
    <Sidebar className='w-full md:w-50'>
    <Sidebar.Items>
    <Sidebar.ItemGroup>
     {currentUser && (<Link to='/Dashboard?tab=dash'>
      <Sidebar.Item active={tab==='dash'} icon={HiChartPie}  as="div">Dashboard</Sidebar.Item>
     </Link>)}
     <Link to='/Dashboard?tab=profile'>
      <Sidebar.Item active={tab==='profile'} icon={HiUser} label='User'>profile</Sidebar.Item>
     </Link>
    </Sidebar.ItemGroup>
    </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar