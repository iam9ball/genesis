'use client'
import { useCreateWorkspace } from '@/hooks/useCreateWorkspace';
import React from 'react'
import FormGenerator from './FormGenerator';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

const WorkspaceForm = () => {
    const {errors, isPending, onFormSubmit, register} = useCreateWorkspace();
  return (
    <form onSubmit={onFormSubmit} className="flex flex-col gap-y-3">
      <FormGenerator
        register={register}
        inputType="input"
        type="text"
        name="name"
        placeholder={"Workspace Name"}
        label="Name"
        errors={errors}
      />
      <Button className="text-sm w-full mt-2" type="submit" disabled={isPending}>
        {isPending ? <Loader/> : "Create Workspace"}
      </Button>
    </form>
  );
}

export default WorkspaceForm
