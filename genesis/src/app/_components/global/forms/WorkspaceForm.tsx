'use client'
import { useCreateWorkspace } from '@/hooks/useCreateWorkspace';
import React from 'react'
import FormGenerator from './FormGenerator';

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
        label="Workspace Name"
        errors={errors}
      />
    </form>
  );
}

export default WorkspaceForm
