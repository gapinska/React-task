import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input"
import Button from '../Button/Button'

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <h2>Add new twitter account</h2>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
      <Input
        name="name"
        label="Name"
        maxLength={30}      
      />
      <Input
        name="link"
        label="Twitter link"
        maxLength={30}      
      />
      <Input
        name="image"
        label="Image"
        maxLength={30}
      />
      <Input
        tag="textarea"
        name="description"
        label="Description"
      />

      <Button>add new item</Button>
     
      
    </form>
  </div>
);

export default Form;