'use client'
import { useQueryData } from '@/hooks/useQueryData'
import { UserWorkspaces } from '@/types/index.types'
import React from 'react'
import Modal from './Modal'
import { Button } from '@/components/ui/button'
import { FolderPlusIcon } from 'lucide-react'
import WorkspaceForm from './forms/WorkspaceForm'

type Props = {

} 

const CreateWorkspace = () => {

    const { data } = useQueryData(["user-workspaces"]);

    const { data: plan } = data as UserWorkspaces;

    // if (plan.subscription?.plan === "FREE") {
    //     return <></>
    // }

  return (
    <Modal 
    title='Create a workspace'
    description='Workspaces helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private.'
    trigger={<Button  className='bg-[#1d1d1d] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl'>
        <FolderPlusIcon/>
        Create a workspace
    </Button>}
    >
        
      <WorkspaceForm/>
    </Modal>
  )
}

export default CreateWorkspace
