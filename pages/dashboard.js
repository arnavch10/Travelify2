import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStateContext } from '@/context/StateContext'
import { useRouter } from 'next/router'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'

const Dashboard = () => {
  const { user } = useStateContext()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user])

  return (
    <>
      <DashboardNavbar />
      
      <Section>
        <TopHeader>Dashboard</TopHeader>
      </Section>
    </>
  )
}

const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
`

const TopHeader = styled.h1`
  font-size: 26px;
`

export default Dashboard