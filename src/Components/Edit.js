import React from 'react'
export const EditForm = ({ formData, onSubmit }) => {
    const { register, handleSubmit } = useForm({ defaultValues: formData });
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input type="text" {...register('title')} />
  
        <label>Summary</label>
        <textarea {...register('summary')} />
  
        <label>Description</label>
        <textarea {...register('description')} />
  
        <label>Event Type</label>
        <input type="text" {...register('eventType')} />
  
        <label>Event Name</label>
        <input type="text" {...register('eventName')} />
  
        <label>Event Date</label>
        <input type="text" {...register('eventDate')} />
  
        <label>Cover Image</label>
        <input type="text" {...register('coverImage')} />
  
        <button type="submit">Save</button>
      </form>
    );
  };
  